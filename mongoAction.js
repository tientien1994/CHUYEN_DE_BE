import { MongoClient } from "mongodb";
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = 'mydb_demo'

export async function create({ collectionName, data }) {
    let status = false
    try {
        const database = client.db(dbName);

        const collection = database.collection(collectionName);

        const result = await collection.insertOne(data);

        console.log(`A document was inserted with the _id: ${JSON.stringify(result)}`);

        status = true

    } catch(error) {

        status = false

        console.log("Create Error: " + error)

    } finally {

        await client.close();

    }
    return status
}