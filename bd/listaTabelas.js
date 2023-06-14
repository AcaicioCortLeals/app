const {pool} = require('./db');


async function listaTables(){
    try{
    const conn = await pool();
    const  row = await conn.query('show tables;');
    // const [tables] = (await (await pool()).query('show tables;'))
    // console.log(users[0]);
    console.log(row);
    return row[0];
    }catch(error){
        console.log(error)
    }
}

(async()=>{
    console.log(await listaTables());
})();

module.exports = {
    listaTables
}
