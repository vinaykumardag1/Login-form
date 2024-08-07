const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const NewModel = require('./user');

app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

mongoose.connect("mongodb://127.0.0.1:27017/form", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongodb is connected"))
    .catch(err => console.log("Database connection error:", err));

app.post('/register', (req, res) => {
    NewModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

app.post('/login', (req, res) => {
    const {email,password}=req.body;
    NewModel.findOne({email:email})

        .then(user =>{
            if(user){
                if(user.password===password){
                    res.json("success")
                }else{
                   res.json("password is incorrect") 
                }
            }else{
                res.json("no record existed")
            }
        })
        .catch(err => res.status(400).json("Error: " + err));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
