import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
async function init() {
  const client = await MongoClient.connect(
    url,
    { useNewUrlParser: true },
  );
  return client.db(dbName);
}

export default init();
