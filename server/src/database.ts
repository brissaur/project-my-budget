import { MongoClient } from 'mongodb';

// Connection URL
const url = process.env.MONGODB_URL || 'mongodb://localhost:27017';

// Database Name
const dbName = process.env.MONGODB_DB_NAME || 'myproject';

// Use connect method to connect to the server
async function init() {
  const client = await MongoClient.connect(
    url,
    { useNewUrlParser: true },
  );
  return client.db(dbName);
}

export default init();
