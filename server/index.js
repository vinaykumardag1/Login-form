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



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vinaykumardag1:vinayKOT@105@atlascluster.8tdja.mongodb.net/?retryWrites=true&w=majority&login_form=AtlasCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.post('/register', (req, res) => {
    NewModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});
app.get("/",(req,res)=>{
    res.send("backend works")
})

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
