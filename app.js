
import express from "express";
import router from "./router";
let app = express();
let engine = require('express-edge')


app.use(engine)

app.set('views',`${__dirname}/page`)

app.use(express.urlencoded({extended:true}))

app.use(router)

app.use(express.static('./assest'))

app.listen(3000)

/*
git rm -r --cached .
git add .
git commit -am 'git cache cleared'
git push
*/

/*const express = require("express")
const app = express()
app.use(express.json())
const {connectToDb,getDb} = require("./controller/db")
const { ObjectId } = require("mongodb")
let db
connectToDb((err)=>{
    if(!err){
        app.listen(3001,()=>{
            console.log("app listening at port 3001")
        })
        db = getDb()
    }
})

app.get('/books',(req,res)=>{
    let books = []
    const page = req.query.p || 0
    const booksperpage = 2
    db.collection("books")
    .find()
    .sort({author:1})
    .skip(page*booksperpage)
    .limit(booksperpage)
    .forEach(book => books.push(book))
    .then(()=>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:'Could not fetch the documents'})
    })
})

app.get('/books/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        db.collection("books")
        .findOne({_id: new ObjectId(req.params.id)})
        .then((books)=>{
            res.status(200).json(books)
        })
        .catch(err=>{
            res.status(500).json({error:'Could not fetch the documents'})
        })
    }else{
        res.status(500).json({error:'Not a vaild of doc id'})
    }
    
})

app.post("/books",(req,res)=>{
    let books = req.body
    db.collection("books")
    .insertOne(books)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(500).json({err:`Cannot create new book doc`})
    })
})

app.delete('/books/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        db.collection("books")
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then((books)=>{
            res.status(200).json(books)
        })
        .catch(err=>{
            res.status(500).json({error:'Could not delete the documents'})
        })
    }else{
        res.status(500).json({error:'Not a vaild of doc id'})
    }
    
})

app.patch('/books/:id',(req,res)=>{
    let update = req.body
    if(ObjectId.isValid(req.params.id)){
        db.collection("books")
        .updateOne({_id: new ObjectId(req.params.id)},{$set : update})
        .then((books)=>{
            res.status(200).json(books)
        })
        .catch(err=>{
            res.status(500).json({error:'Could not fetch the documents'})
        })
    }else{
        res.status(500).json({error:'Not a vaild of doc id'})
    }
    
})


/*require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 4000

mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
//db.on('error',(error)=>console.log(error))
//db.once('open',()=>console.log('connected to the database'))

app.get('/',(req,res)=>{
    db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('connected to the database'))
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost${PORT}`)
})*/