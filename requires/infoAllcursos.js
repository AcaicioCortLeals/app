const {pool} = require('../bd/db');
require('dotenv').config()



async function infoCUrsos(ano_semestre){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    select curso.codigo as idCurso, curso.codigo_curso, curso.nome, curso.estatus, mc.descricao as modalidade_curso_codigo,
me.descricao as modalidade_ensino_codigo, mo.descricao as modalidade_oferta_codigo,
unf.sigla as unidade_codigo_fisica, unf.nome as unidade_fisica_descricao, un.sigla as unidade_codigo_responsavel,  un.nome as unidade_descricao,  
serv.nome as codigo_servidor_cordenador, serv_secre.nome as codigo_servidor_secretario from curso
inner join modalidade_curso as mc on mc.codigo = curso.modalidade_curso_codigo
inner join modalidade_ensino as me on me.codigo = curso.modalidade_ensino_codigo
inner join modalidade_oferta as mo on mo.codigo = curso.modalidade_oferta_codigo 
inner join unidade_fisica as unf on unf.codigo = curso.unidade_codigo_fisica
inner join unidade as un on un.codigo = curso.unidade_codigo_responsavel
inner join servidor as serv on serv.codigo = curso.codigo_servidor_cordenador
inner join servidor as serv_secre on serv_secre.codigo = curso.codigo_servidor_secretario
ORDER BY curso.nome ASC
;
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    infoCUrsos
}
