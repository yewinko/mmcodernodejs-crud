import mysql from "mysql";

let c = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

c.connect()
export default c;
//mongodb+srv://<username>:<password>@cluster0.mfb7qrc.mongodb.net/?retryWrites=true&w=majority
/*const {MongoClient} = require("mongodb")
let dbConnection
//let uri = 'mongodb+srv://<eclipse>:<PvKkTG3sbNP9MV2f>@********.mongodb.net/<db name>?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true'
let uri ='mongodb://eclipse:PvKkTG3sbNP9MV2f@ac-qzay4qd-shard-00-00.qmtr4ny.mongodb.net:27017,ac-qzay4qd-shard-00-01.qmtr4ny.mongodb.net:27017,ac-qzay4qd-shard-00-02.qmtr4ny.mongodb.net:27017/?ssl=true&replicaSet=atlas-7hbv9j-shard-0&authSource=admin&retryWrites=true&w=majority'
module.exports = {
    connectToDb:(cb)=>{
        //MongoClient.connect('mongodb://127.0.0.1:27017/bookstore')
        MongoClient.connect(uri)
        .then((client)=>{
            dbConnection = client.db()
            return cb()
        })
        .catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:()=>dbConnection
}

//PvKkTG3sbNP9MV2f*/