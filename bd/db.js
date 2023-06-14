const mysql = require('mysql2/promise')
require('dotenv').config()



const dataConfig = {
    connectionLimit : 10,
    host : process.env.HOST_DB,
    user : process.env.USER_DB,
    password : process.env.PASS_DB,
    database : process.env.NAME_DB
} 


async function pool(){
    try{
    // create the connection
    const connection = await mysql.createPool(dataConfig);
    // query database
    // const  row = await connection.query('show tables');
    return connection;    
    }catch(error){
        console.log(error)
    }
}
/*
pool().then((row)=>{
    console.log(row); 
})
*/
module.exports = {
    pool
}


