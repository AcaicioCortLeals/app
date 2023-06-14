//função será usada na chamada get(relatorio_Matriz_Ocupacional)

const {pool} = require('../bd/db');
require('dotenv').config()



async function buscaTurmasDocente(codigo_SA_docente){
    try{
    const conn = await pool();
    
    // VERIFICAR SE O RIGHT INFLUENCIA NA BUSCA
    // IMPLEMENTAR WHERE PARA O PERÍODO
    // WHERE turma.periodo_letivo = 1   
    const row = await conn.query(`
    SELECT tabela_turma_docente.codigo as codigoNaTabelaTurma_Docente,  tabela_unidade.sigla AS unidadeSigla, tabela_curso.nome as nomeCurso, tabela_modalidade_curso.descricao AS modCurso,   tabela_modalidade_oferta.descricao AS modOferta, tabela_modalidade_ensino.descricao as modDesc, tabela_turno.descricao as turnoDesc,
tabela_disciplina.codigo_disciplina AS codigoDisciplina, tabela_disciplina.nome AS nomeDisciplina, tabela_disciplina.periodo AS periodoDisci, tabela_disciplina.carga_horaria as cargaSemestralDisci, tabela_disciplina.carga_horaria_semanal as cargaSemanalDisci,
tabela_docente.nome as nomeDocente,  tabela_docente.codigo_sistema_aca as codigoDocente, tabela_docente.carga_horaria as carga_horaria, tabela_efetivo.codigo as cod_efetivo, tabela_pss.codigo as cod_pss, tabela_situacao_funcional.descricao as descricao, 
tabela_turma.codigo_turma as codigo_da_turma, 
tabela_horario.dias_semana_codigo, tabela_dias_semana.sigla, tabela_horario.horario_entrada, tabela_horario.horario_saida,
tabela_funcao.descricao as funcaoDescricao, tabela_funcao.proposta_hora as horaDesconto,  tabela_funcao.observacao as resolucao_obervacao,
tabela_periodo_letivo.ano_semestre, tabela_periodo_letivo.codigo
FROM turma as tabela_turma 
left join turma_docente AS tabela_turma_docente ON tabela_turma_docente.turma_codigo = tabela_turma.codigo
left join turma_horario as tabela_horario ON tabela_horario.turma_codigo = tabela_turma.codigo
left join dias_semana as tabela_dias_semana on tabela_dias_semana.codigo = tabela_horario.dias_semana_codigo
LEFT JOIN docente as tabela_docente ON tabela_docente.codigo = tabela_turma_docente.docente_codigo
left JOIN efetivo as tabela_efetivo ON tabela_efetivo.codigo = tabela_docente.codigo
left JOIN pss as tabela_pss ON tabela_pss.codigo = tabela_docente.codigo
left join situacao_funcional as tabela_situacao_funcional ON tabela_situacao_funcional.codigo = tabela_efetivo.codigo 
left join funcao as tabela_funcao on tabela_funcao.codigo = tabela_efetivo.funcao_codigo
left join disciplina_curso as tabela_disciplina_curso ON tabela_disciplina_curso.codigo = tabela_turma.disciplina_curso_codigo
LEFT join disciplina as tabela_disciplina ON tabela_disciplina.codigo = tabela_disciplina_curso.disciplina_codigo
LEFT join curso AS tabela_curso ON tabela_curso.codigo = tabela_disciplina_curso.curso_codigo
left join unidade AS tabela_unidade ON tabela_unidade.codigo = tabela_curso.unidade_codigo_responsavel
inner join modalidade_curso as tabela_modalidade_curso ON tabela_modalidade_curso.codigo = tabela_curso.modalidade_curso_codigo
inner join modalidade_oferta as tabela_modalidade_oferta ON tabela_modalidade_oferta.codigo = tabela_curso.modalidade_oferta_codigo
inner join modalidade_ensino as tabela_modalidade_ensino ON tabela_modalidade_ensino.codigo = tabela_curso.modalidade_ensino_codigo
inner join turno as tabela_turno ON tabela_turno.codigo = tabela_turma.turno_codigo
inner join periodo_letivo as tabela_periodo_letivo  ON tabela_periodo_letivo.codigo = tabela_turma.periodo_letivo_codigo 
where tabela_docente.codigo_sistema_aca = ${codigo_SA_docente}
ORDER BY tabela_periodo_letivo.codigo ASC,  tabela_turma.codigo_turma ASC, tabela_disciplina.nome ASC, tabela_horario.dias_semana_codigo ASC;
    `);
    // console.log(row)
    return row[0];
    
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    buscaTurmasDocente
}
