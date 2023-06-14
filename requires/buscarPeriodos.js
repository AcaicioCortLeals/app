//função será usada na chamada get(relatorio_Matriz_Ocupacional)

const {pool} = require('../bd/db');
require('dotenv').config()



async function buscaPeriodos(){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    SELECT * FROM sistema_uea.periodo_letivo;
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    buscaPeriodos
}
