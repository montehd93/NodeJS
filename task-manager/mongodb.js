const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Não foi possível conectar ao banco.");
    }
    console.log("Banco conectcado.");

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Hugo",
    //     age: 28,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Não foi possivel inserir os dados");
    //     }
    //     console.log(result.ops);
    //   }
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Não foi possível inserir os itens");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
