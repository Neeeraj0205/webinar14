
const route = require('express').Router()
 const Product = require('../../db').Product
 route.get('/',(req,res)=>{
    Product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"could not retrive data"
        })
    })

})
route.post('/',(req,res)=>{
      if(isNaN(req.body.price)){
          return res.status(403).send({
              error:"price is not valid"
          })
      } 
    Product.create({
        name:req.body.name, 
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
          }).then((product)=>{
              res.status(201).send(product)
          })
          .catch((err)=>{
              res.status(501).send({
                  error:"could not add product"
              })
      
          })
      })
    



exports=module.exports=route