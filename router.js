import express from "express";
let router = express.Router();
import { index,create,store, edit, update, destory } from "./controller/tag";
import db from './controller/db'
let x = 0
const path = require('path')
const multer = require('multer')  
const storage = multer.diskStorage({   
    destination: (req, file, cb)=>{
        cb(null,'assest/uploads')
    },
    filename: (req,file,cb)=>{
        let imgnub = Date.now()
        cb(null,file.fieldname+"-"+imgnub +path.extname(file.originalname))
        let name = req.body.name
        let img = file.fieldname+"-"+imgnub+path.extname(file.originalname)
        db.query(`insert into person(name,images)values('${name}','${img}')`,e=>{
            if(e) throw e;
        })
    }
})

const storagetwo = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'assest/uploads')
    },
    filename: (req,file,cb)=>{
        var imgnub = Date.now()
        cb(null, file.fieldname + "-" + imgnub + path.extname(file.originalname))
        let id = req.params.id;
        let name = req.body.name
        var img = file.fieldname+"-"+imgnub+path.extname(file.originalname)
        let sql = `update person set name='${name}',images ='${img}' where id ='${id}' `
        db.query(sql,e=>{
            if(e) throw e;
        })
    }
})

const upload = multer({storage:storage})
//const uploadtwo = multer({storage:storagetwo})

const maxSize = 1 * 1024 * 1024
var uploadtwo = multer({
    storage:storagetwo,
    fileFilter: (req,file,cb) =>{
        if(file.mimetype === "image/png" || file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
            cb(null,true)
        }else{
            cb(null,false)
            return cb(new Error('Only jpg format'));
            
        }
    },
    limits: {fileSize: maxSize}
})


router.get('/',index)

router.get('/create',create)

router.post('/create',upload.single('image'),store)

router.get('/edit/:id',edit)

router.post('/edit/:id',uploadtwo.single('image'),update,(req,res) =>{
    uploadtwo(req,res, function(err){
        if(err instanceof multer.MulterError){
            res.send(err)
        }else if(err){
            res.send(err)
        }
    })
})

router.get('/delete/:id',destory)

export default router;