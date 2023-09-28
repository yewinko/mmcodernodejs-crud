
import db from './db';
export const index = (req,res)=>{
    db.query(`select * from person`,(e,data,f)=>{
        if(e){
            console.log(e)
        }else{
            res.render('index',{data})
        }
    })
}

export const create = (req,res)=>{
    res.render('create')
}

export const store = (req,res)=>{
    res.render('index')
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
    if(req.file === undefined){
        let sql = `update person set name='${name}',images ='' where id ='${id}' `
        db.query(sql,e=>{
            if(e) throw e;
        })
    }
    return res.redirect('/')
}