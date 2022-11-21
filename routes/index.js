import { MongoClient } from 'mongodb';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

  /*
  *Requires the MongoDB Node.js Driver
  *https"//mongodb.github.io/node-mongodb-native
  */

  const { MongoClient } = require('mongodb');

const url = 'mongodb://mongo:27017/';

const dbName = '418y';
const client = new MongoClient(url);    
await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('students');
    
    // Inserting an object
    const insertResult = await collection.insertMany([{a:1}, {b:2}]);
  
    console.log('Inserted documents =>', insertResult);

    // Filtering documents
    const findResult = await collection.find({}).toArray();
console.log(finalResult);
  res.render('index', { title: 'Express', people : ["tom"] });
});

module.exports = router;
