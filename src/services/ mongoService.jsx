import { MongoClient } from 'mongodb';
import BaseService from './baseService';

const client = new MongoClient(process.env.MONGO_URI);

class MongoService extends BaseService {
  async create(collectionName, data) {
    await client.connect();
    const collection = client.db().collection(collectionName);
    const result = await collection.insertOne(data);
    return { id: result.insertedId, ...data };
  }

  async read(collectionName, query = {}) {
    await client.connect();
    const collection = client.db().collection(collectionName);
    const data = await collection.find(query).toArray();
    return data;
  }

  async update(collectionName, id, data) {
    await client.connect();
    const collection = client.db().collection(collectionName);
    await collection.updateOne({ _id: id }, { $set: data });
    return { id, ...data };
  }

  async delete(collectionName, id) {
    await client.connect();
    const collection = client.db().collection(collectionName);
    await collection.deleteOne({ _id: id });
    return id;
  }
}

export default new MongoService();
