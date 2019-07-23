const sequelize = require('sequelize');
var db = new sequelize('shopdb','neeraj','neeraj02',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})
const User = db.define('users',{
    id:{type:sequelize.INTEGER,autoIncrement:true,primaryKey :true},
    name:{
        type:sequelize.STRING,allowNULL:false
    }
})
const Product = db.define('products',{
    id:{type:sequelize.INTEGER,autoIncrement:true,primaryKey :true},
    name:{
        type:sequelize.STRING,allowNULL:false
    },
    manufacturer:{
        type:sequelize.STRING
    },
    price:{
        type:sequelize.FLOAT,allowNULL:false,defaultvalue:0.0
    }
})
db.sync()
     .then(()=>console.log("database synced"))
     .catch((err)=>console.error("DATABASE NOT SYNCED"))
exports=module.exports={User,Product}
