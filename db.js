const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

const clientFun = async ff => {
  await client.db('mytest');
  const db = client.db('mytest');
  return db.collection(ff);
};

const main = async () => {
  const ff = await clientFun('ff');
  const d = await ff.insertOne({ username: 'test', age: 20 });
  console.info(d);
};

main().finally(() => client.close());
