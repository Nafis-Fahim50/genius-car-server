const express = require('express');
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require ('dotenv').config();

const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6llxg7j.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const serviceCollection = client.db('geniusCar').collection('services');
    }
    finally{

    }
}


// middleware
app.use(cors());
app.use(express.json())

app.get('/', (req,res) =>{
    res.send('Genius Car Server is Running...')
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})