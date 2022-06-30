const { MongoClient } = require('mongodb');

const express = require('express')
const app = express()
const port = process.env.PORT || 3002;


// Connection URL
const url = 'mongodb+srv://safra:safra2711@cluster0.7ocaq6r.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'backend';
app.get('/',async (req, res) => {
    await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('frontandback');
  const kopi = await collection.find({}).toArray();
 res.json({kopi})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})