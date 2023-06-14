//função será usada na chamada get(relatorio_Matriz_Ocupacional)

const {pool} = require('../bd/db');
require('dotenv').config()



async function buscaOneProfessor(codSistemaAcademico){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    SELECT tabela_docente.codigo, tabela_docente.cpf, tabela_docente.carga_horaria, tabela_docente.codigo_sistema_aca,
    tabela_docente.email_particular, tabela_docente.nome, tabela_docente.telefone, tabela_docente.data_nascimento, 
    tabela_docente.genero, tabela_docente.nome_mae, curso.nome as nome_curso, titulacao.descricao  as titulacao, tabela_unidade.nome as nomeUnidade, tabela_unidade.sigla as siglaUnidade,
    efetivo.codigo as codigoEfetivo, efetivo.matricula as matriculaEfetivo, 
    funcao.descricao as funcaoEfetivo,
    pss.codigo as codigoPSS, pss.matricula as matriculaPSS
    FROM sistema_uea.docente as tabela_docente
    inner join curso ON curso.codigo = tabela_docente.curso_codigo
    inner join titulacao ON titulacao.codigo = tabela_docente.titulocao_codigo
    inner join unidade as tabela_unidade ON tabela_unidade.codigo = tabela_docente.unidade_codigo
    left join efetivo ON efetivo.codigo = tabela_docente.codigo
    left join funcao on funcao.codigo = efetivo.funcao_codigo
    left join pss ON pss.codigo = tabela_docente.codigo
    where tabela_docente.codigo_sistema_aca =  ${codSistemaAcademico} ;
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    buscaOneProfessor
}
