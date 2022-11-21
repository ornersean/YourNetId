import { MongoClient } from 'mongodb';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

  /*
  *Requires the MongoDB Node.js Driver
  *https"//mongodb.github.io/node-mongodb-native
  */

  const filter = {'name': 'Sean Orner'
};

const client = await MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true});
const call = client.db('418y').collection('students');
const cursor = call.find(filter);
const result = await cursor.toArray();
await client.close();
  res.render('index', { title: 'Express', people : ["tom"] });
});

module.exports = router;
