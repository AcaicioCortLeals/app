//função será usada na chamada get(relatorio_Matriz_Ocupacional)

const {pool} = require('../bd/db');
require('dotenv').config()



async function buscaPeriodosDocente(){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    SELECT * FROM sistema_uea.turma_docente
    left JOIN turma ON turma.codigo = turma_docente.turma_codigo
    left JOIN docente on docente.codigo = turma_docente.docente_codigo
    where docente.codigo_sistema_aca = ${periodo};
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    buscaPeriodosDocente
}
