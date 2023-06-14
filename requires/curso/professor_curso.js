//função será usada na chamada get(relatorio_Matriz_Ocupacional)

const {pool} = require('../../bd/db');
require('dotenv').config()



async function buscarProfessoresCurso(idCurso){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    select pss.edital_pss, pss.matricula as matriculaPSS, funcaoPss.descricao as funcaoPSS ,ef.matricula as matriculaEfetivo,  f.descricao as funcao , ef.situacao_funcional_codigo, sfEfetivo.descricao as situacaoEfetivo , d.codigo as codigoSIGMO, d.codigo_sistema_aca as codigo_SA, ef.email_institucional as email, d.nome as nomeDocente, d.telefone as telefoneDocente, d.genero as docenteGenero ,
t.descricao as titulacaoDocente, u.nome as nomeUnidade, u.sigla as siglaUnidadeLotacao, c.nome, mc.descricao as modalidadeCurso, me.descricao as modalidadeEnsino, mf.descricao as modalidadeOferta, unidadeF.nome as unidadeFisicaCurso, unidadeR.nome as unidadeResponsavel
from docente as d
inner join curso as c on c.codigo = d.curso_codigo
inner join titulacao as t on t.codigo = d.titulocao_codigo
inner join unidade as u on u.codigo = d.unidade_codigo
inner join unidade as unidadeF on unidadeF.codigo = c.unidade_codigo_fisica
inner join unidade as unidadeR on unidadeR.codigo = c.unidade_codigo_responsavel
left join efetivo as ef on ef.codigo = d.codigo
left join situacao_funcional as sfEfetivo on sfEfetivo.codigo = ef.situacao_funcional_codigo
left join pss on pss.codigo = d.codigo
left join funcao as f on f.codigo = ef.funcao_codigo 
left join funcao as funcaoPss on funcaoPss.codigo = pss.funcao_codigo 
inner join modalidade_curso as mc on mc.codigo = c.modalidade_curso_codigo
inner join modalidade_ensino as me on me.codigo = c.modalidade_ensino_codigo
inner join modalidade_oferta as mf on mf.codigo = c.modalidade_oferta_codigo
    where c.codigo = ${idCurso}
    order by d.nome asc
    ;
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    buscarProfessoresCurso
}
