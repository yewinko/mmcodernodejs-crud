
import db from './db'
//import multer from 'multer'

export const index = (req,res)=>{
    let sql = `select * from person`
    db.query(sql,(e,data)=>{
        if(e) throw e;
        res.render('index',{data})
    })
}

export const create = (req,res)=>{
    res.render('create')
}

export const store = (req,res)=>{
    res.render('create')
}

export const edit = (req,res)=>{
    let id = req.params.id;
    let sql = `select * from person where id = '${id}'`;
    db.query(sql,(err,data)=>{
        res.render('edit',{data})
    })
}

export const update = (req,res)=>{
    let id = req.params.id;
    let name = req.body.name;

    console.log(name,'from update')
    if(req.file === undefined){
        let sql = `update person set  name='${name}',images ='' where id ='${id}' `
        db.query(sql,e=>{
            if(e) throw e;
        })
    }
    
    return res.redirect('/')
}

export const destory = (req,res)=>{
    let id = req.params.id;
    let sql = `delete from person where id = '${id}'`
    db.query(sql,(e,data)=>{
        if(e) throw e;
        return res.redirect('/')
    })
}