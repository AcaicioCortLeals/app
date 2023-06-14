//função será usada na chamada get(relatorio_Matriz_Ocupacional)

const {pool} = require('../bd/db');
require('dotenv').config()



async function docenteCompartilhado(idperiodo){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    select unidade_disciplina.sigla as sigla_unidade_turma, unidade_disciplina.nome as nome_unidade_turma,
curso_turma.nome as nome_curso_disciplina_turma, disc.nome as nome_disciplina, disc.codigo_disciplina, t.codigo_turma, 
d.codigo_sistema_aca, d.nome as nome_docente, curso_docente.nome as curso_vinculo_docente, unidade_docente.sigla as sigla_unidade_vinculo_docente ,unidade_docente.nome as nome_unidade_vinculo_docente 
from turma_docente as t_d
inner join turma as t on t.codigo = t_d.turma_codigo
inner join docente as d on d.codigo = t_d.docente_codigo
left join disciplina_curso as d_c on d_c.codigo = t.disciplina_curso_codigo
left join disciplina as disc on disc.codigo = d_c.disciplina_codigo
inner join unidade as unidade_docente on unidade_docente.codigo = d.unidade_codigo
inner join unidade as unidade_disciplina on unidade_disciplina.codigo = t.unidade_codigo
inner join curso as curso_turma on curso_turma.codigo = d_c.curso_codigo
inner join curso as curso_docente on curso_docente.codigo = d.curso_codigo
where t.periodo_letivo_codigo = ${idperiodo} AND unidade_disciplina.sigla NOT LIKE unidade_docente.sigla 
order by d.nome asc, disc.nome ASC
;
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
        docenteCompartilhado
}
