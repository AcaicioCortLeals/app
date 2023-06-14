
(async()=>{
       
    const array_dados = await buscardados()
    await inputarDadosBase(array_dados);
    
})();

async function inputarDadosBase(dados_array){
    // console.log('chegou', dados_array);

    dados_array.forEach((dado, index) => {
        let nome_unidade = dado.unidadeSigla || 'Null';
        console.log(nome_unidade);
        let coordenacao = dado.coordenacao || 'Null';
        console.log(coordenacao);
        let curso = dado.nomeCurso || 'Null';
        console.log(curso);
        let modalidadeCurso = dado.modCurso || 'Null';
        console.log(modalidadeCurso);
        let modalidadeOferta = dado.modOferta || 'Null';
        console.log(modalidadeCurso);

        let modalidadeEnsino = dado.modDesc || 'Null';
        console.log(modalidadeEnsino);

        let turno = dado.turnoDesc || 'Null';
        console.log(turno);

        let codComponente = dado.codigoDisciplina || 'Null';
        console.log(codComponente);

        let compCurricular = dado.nomeDisciplina || 'Null';
        console.log(compCurricular);

        let periodoCompCurricular = dado.periodoDisci || 'Null';
        console.log(periodoCompCurricular);

        let cHtotalDisc = dado.cargaSemestralDisci || 'Null';
        console.log(cHtotalDisc);

        let cHSemanalDisc = dado.cargaSemanalDisci || 'Null';
        console.log(cHSemanalDisc);

        let nomeDocente = dado.nomeDocente || 'sem professor' ;
        console.log(nomeDocente);

        let codSistemaAcademico = dado.codigoDocente || 'Null';
        console.log(codSistemaAcademico);

        let chDocente = dado.carga_horaria || 'Null';
        console.log(chDocente);

        let statusDocente = dado.descricao || 'Null';
        console.log(chDocente);


        let vinculo = 'sem vínculo';
        if(dado.cod_efetivo > 0){
             vinculo = 'Efetivo';
        }else if(dado.cod_pss > 0){
             vinculo = 'Pss';
        }
        console.log(vinculo);

        //pensar em como somar as cargas horárias
        let cHtotal = 'Null';
        console.log(cHtotal);

        let codigoTuma = dado.codigo_da_turma || 'Null';
        console.log(codigoTuma);

        let diaSemana = dado.sigla || 'Null';
        console.log(diaSemana);

        let horarioEntrada = dado.horario_entrada || 'Null'
        let horarioSaida = dado.horario_saida || 'Null'
        let idDDocenteInSistemaUea = dado.codigoDocente;

        //criar linha
        //INFORMAÇÕES GERAIS
        let celulaLinhaGeral = document.querySelectorAll('.tableInTable')[0].querySelector('tbody');
        console.log(celulaLinhaGeral);
        // let valoresCelulasLinhaGeral 
        let qtdLinha = celulaLinhaGeral.querySelectorAll('tr').length;
        console.log(qtdLinha)
        let novaLinha = `<tr ondblclick ="marcarLinha(${qtdLinha})" idDDocenteInSistemaUea="${idDDocenteInSistemaUea}" valorLinha="${qtdLinha}"> <td class="valueUnidadeInTable">${nome_unidade}</td> <td>${coordenacao}</td>  <td class="valueCursoInTable">${curso}</td>  <td >${modalidadeCurso}</td> <td >${modalidadeOferta}</td> <td >${modalidadeEnsino}</td>  <td class="valueTurnoInTable" >${turno}</td> </tr>`
        celulaLinhaGeral.innerHTML = celulaLinhaGeral.outerHTML + novaLinha;

        // COMPONENTE CURRICULAR
        let celulaLinhaComponeteCurricular = document.querySelectorAll('.tableInTable')[1].querySelector('tbody');
        let novoCompoeneteCurricular = `<tr valorLinha="${qtdLinha}"  ondblclick ="marcarLinha(${qtdLinha})" > <td>${codComponente}</td> <td class='nomeComponente'>${compCurricular.toUpperCase()}</td> <td>${periodoCompCurricular}</td> <td>${cHtotalDisc}</td> <td codDocente="${codSistemaAcademico}" class="chSemanalDisc">${cHSemanalDisc}</td>  </tr>`
        celulaLinhaComponeteCurricular.innerHTML = celulaLinhaComponeteCurricular.outerHTML + novoCompoeneteCurricular;

        // DADOS DOCENTE
        
        let celulaLinhaDadosDocente = document.querySelectorAll('.tableInTable')[2].querySelector('tbody');
        
        
        /*console.log('antes de entrar no if',dado.codigoDocente)
        if(dado.codigoDocente != null && dado.codigoDocente !=undefined && dado.codigoDocente > 0 ){
            codigoInSistema = dado.codigoDocente;
        }

        let novoDocente = '';
        if(codigoDocente != null && codigoDocente != undefined){
             const ChtotalReturn =  updateValorCHTotal(codigoDocente);
             if(ChtotalReturn === false){
             novoDocente = `<tr idDocente="${dado.codigoDocenteInSistema}" > <td class="nome_docente">${nomeDocente}</td> <td> ${codSistemaAcademico} </td> <td> ${chDocente} </td> <td>${vinculo}</td> <td>${statusDocente}</td> <td>${cHSemanalDisc}</td> </tr>`
            }else{
             novoDocente = `<tr idDocente="${dado.codigoDocenteInSistema}" > <td class="nome_docente">${nomeDocente}</td> <td> ${codSistemaAcademico} </td> <td> ${chDocente} </td> <td>${vinculo}</td> <td>${statusDocente}</td> <td>${ChtotalReturn}</td> </tr>`
        }
        }else{
                  novoDocente = `<tr idDocente="${dado.codigoDocenteInSistema}" > <td class="nome_docente">${nomeDocente}</td> <td> ${codSistemaAcademico} </td> <td> ${chDocente} </td> <td>${vinculo}</td> <td>${statusDocente}</td> <td>-</td> </tr>`
        }*/

        novoDocente = `<tr  ondblclick ="marcarLinha(${qtdLinha})" numeroLinha="${qtdLinha}" idDocente="${idDDocenteInSistemaUea}" > <td style="cursor:pointer" onclick="buscaDocente(${idDDocenteInSistemaUea})" class="nome_docente">${nomeDocente}</td> <td> ${codSistemaAcademico} </td> <td> ${chDocente} </td> <td>${vinculo}</td> <td>${statusDocente}</td> <td>-</td> </tr>`
        

        celulaLinhaDadosDocente.innerHTML = celulaLinhaDadosDocente.outerHTML + novoDocente;



        // TURMA
        let celulaLinhaTurma = document.querySelectorAll('.tableInTable')[3].querySelector('tbody');
        let novaTurma = `<tr valorLinha="${qtdLinha}"  ondblclick ="marcarLinha(${qtdLinha})" > <td>${codigoTuma.toUpperCase()}</td> </tr>`
        celulaLinhaTurma.innerHTML = celulaLinhaTurma.outerHTML + novaTurma;

        // HORARIO_DIA_DA_SEMANA
        let celulaLinhaDiaSemana = document.querySelectorAll('.tableInTable')[4].querySelector('tbody');
        let novoDiaSemana = `<tr  ondblclick ="marcarLinha(${qtdLinha})" > <td class="dia_SEG">${horarioEntrada} - ${horarioSaida}</td> <td class="dia_TER">-</td> <td class="dia_QUA">-</td> <td class="dia_QUI">-</td> <td class="dia_SEX">-</td> <td class="dia_SAB">-</td> </tr>`
        if(diaSemana === 'TER'){
             novoDiaSemana = `<tr  ondblclick ="marcarLinha(${qtdLinha})" ><td class="dia_SEG">-</td> <td class="dia_TER">${horarioEntrada} - ${horarioSaida}</td> <td class="dia_QUA"></td> <td class="dia_QUI">-</td> <td class="dia_SEX">-</td> <td class="dia_SAB">-</td> </tr>`
        }else if(diaSemana === 'QUA'){
             novoDiaSemana = `<tr  ondblclick ="marcarLinha(${qtdLinha})" ><td class="dia_SEG">-</td> <td class="dia_TER">-</td> <td class="dia_QUA">${horarioEntrada} - ${horarioSaida}</td> <td class="dia_QUI">-</td> <td class="dia_SEX">-</td> <td class="dia_SAB">-</td> </tr>`
        }else if(diaSemana === 'QUI'){
             novoDiaSemana = `<tr  ondblclick ="marcarLinha(${qtdLinha})" ><td class="dia_SEG">-</td> <td class="dia_TER">-</td> <td class="dia_QUA">-</td> <td class="dia_QUI">${horarioEntrada} - ${horarioSaida}</td> <td class="dia_SEX">-</td> <td class="dia_SAB">-</td> </tr>`
        }else if(diaSemana === 'SEX'){
             novoDiaSemana = `<tr  ondblclick ="marcarLinha(${qtdLinha})" ><td class="dia_SEG">-</td> <td class="dia_TER">-</td> <td class="dia_QUA">-</td> <td class="dia_QUI"></td> <td class="dia_SEX">${horarioEntrada} - ${horarioSaida}</td> <td class="dia_SAB">-</td> </tr>`
        }else if(diaSemana === 'SAB'){
             novoDiaSemana = `<tr  ondblclick ="marcarLinha(${qtdLinha})" ><td class="dia_SEG">-</td> <td class="dia_TER">-</td> <td class="dia_QUA">-</td> <td class="dia_QUI">-</td> <td class="dia_SEX">-</td> <td class="dia_SAB">${horarioEntrada} - ${horarioSaida}</td> </tr>`
        }

        celulaLinhaDiaSemana.innerHTML = celulaLinhaDiaSemana.outerHTML + novoDiaSemana;

        //STATUS CARGA
        let funcaoDocente = dado.funcaoDescricao || 'sem informações adicionais';
        let resolucao_obervacao = dado.resolucao_obervacao || '';
        let horaDesconto = dado.horaDesconto || ''
        let celulaLinhaStatusCarga = document.querySelectorAll('.tableInTable')[5].querySelector('tbody');
        let novoStatusCarga = ''
        if(resolucao_obervacao !=''){
            //  novoStatusCarga = `<tr  valorLinha="${qtdLinha}" ondblclick="marcarLinha(${qtdLinha})"> <td class="valueCHInTable" >-</td>  <td>${funcaoDocente} - ${resolucao_obervacao} - *[Desconto de: ${horaDesconto} horas</td> </tr>`
             novoStatusCarga = `<tr  valorLinha="${qtdLinha}" ondblclick="marcarLinha(${qtdLinha})"> <td class="valueCHInTable" >-</td>  <td>${funcaoDocente} - ${resolucao_obervacao}</td> </tr>`
        }else{
             novoStatusCarga = `<tr  valorLinha="${qtdLinha}" ondblclick="marcarLinha(${qtdLinha})"> <td class="valueCHInTable" >-</td>  <td>${funcaoDocente}</td> </tr>`
        }
        celulaLinhaStatusCarga.innerHTML = celulaLinhaStatusCarga.outerHTML + novoStatusCarga;

    })

    //setar periodo da matriz no topo
    // document.querySelector('#titlePageWithSemestre').innerText = `Matriz Ocupacional - ${dados_array[0].semestre}`

    updateValorCHTotal();
}

//FUNÇÃO QUE CALCULA A CARGA HORARIA TOTAL E transforma em dado qualitativo 'en excesso'. 'em falta', 'normal'
function updateValorCHTotal(idDocente){

    //INDENTIIFICAR OS IDS DOS DOCENTES PRESENTES NA TABELA
    let idsDocentes = [];
    let linhasDocentes =  document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll(`tr`);
    linhasDocentes.forEach((linha)=>{
        let idDocente =  linha.getAttribute('idDocente');
        console.log(idDocente)
        if(idDocente !== null && idDocente !== undefined && idDocente !='' ){
            if(idsDocentes.indexOf(idDocente) === -1){
                idsDocentes.push(idDocente)
            }
        }
    })
    console.log(idsDocentes)

    idsDocentes.forEach((numeroIdDocente) => {
        const linhasInDocente = document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll(`[idDocente="${numeroIdDocente}"]`);
        let cargaHoratiaTotal = 0;
        let blackListTurmas = [];
        let blackListComponenteCurricular = [];
        linhasInDocente.forEach((linha) => {
            let campoCargahoraria = linha.querySelectorAll('td')[5]; //carga horaria
            
            let codigoDisciplina = document.querySelectorAll('.tableInTable')[3].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelector('td').outerText;
            let codigoCompoente = document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll('tr')[linha.getAttribute('numeroLinha')].querySelector('td').outerText;
            // console.log(linha, codigoCompoente);   
            // console.log(numeroIdDocente, document.querySelectorAll('.tableInTable')[3].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelector('td'), codigoDisciplina)
            // console.log(campoCargahoraria);
            // console.log(codigoDisciplina,numeroIdDocente)
            if(blackListTurmas.indexOf(codigoDisciplina) === -1 && linha.querySelectorAll('td')[0].outerText !== 'sem professor'){   
                // console.log(numeroIdDocente,codigoDisciplina, parseInt(document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[4].outerText) );
                // blackListTurmas.push(codigoDisciplina);
                blackListTurmas.push(codigoDisciplina);
                blackListComponenteCurricular.push(codigoCompoente);

                cargaHoratiaTotal = cargaHoratiaTotal + parseInt(document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[4].outerText);
                linhasInDocente.forEach((novaLinha) => {
                    let novocampoCargahoraria = novaLinha.querySelectorAll('td')[5]; //carga horaria
                    novocampoCargahoraria.innerText = cargaHoratiaTotal;
                    // console.log('valor carga horari', cargaHoratiaTotal);
                });
                
            }else if( blackListTurmas.indexOf(codigoDisciplina) != -1 && blackListComponenteCurricular.indexOf(codigoCompoente) === -1 ){
                console.log('ENTROU NA SEGUNDA CONDICAO', linha, codigoCompoente, blackListComponenteCurricular.indexOf(codigoCompoente))
                console.log(blackListComponenteCurricular);
                blackListComponenteCurricular.push(codigoCompoente);
                cargaHoratiaTotal = cargaHoratiaTotal + parseInt(document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[4].outerText);
                linhasInDocente.forEach((novaLinha) => {
                    let novocampoCargahoraria = novaLinha.querySelectorAll('td')[5]; //carga horaria
                    novocampoCargahoraria.innerText = cargaHoratiaTotal;
                    console.log('valor carga horari', cargaHoratiaTotal);
                });

            }
            else{
                campoCargahoraria.innerText = cargaHoratiaTotal;
            }

            
            
        });

    }); 
    
    marcaStatusCH();
}


//FUNÇÃO PARA FAZER A MARCAÇÃO NO STATUS DO PROFESSOR
function marcaStatusCH(){
    let linhas = document.querySelectorAll('.tableInTable')[2].querySelectorAll('tbody tr');

    linhas.forEach((linha, index)=>{
        let regimeTrabalho = linha.querySelectorAll('td')[2].outerText;
        
        if(regimeTrabalho != 'Null' && regimeTrabalho != undefined && regimeTrabalho != null){
            regimeTrabalho = parseInt(regimeTrabalho); //transforma em inteiro
            
            let cargaHoratiaTotal = linha.querySelectorAll('td')[5].outerText;
            if(cargaHoratiaTotal != 'Null' && cargaHoratiaTotal != undefined && cargaHoratiaTotal != null && linha.querySelectorAll('td')[0] !='sem professor'){
                cargaHoratiaTotal = parseInt(cargaHoratiaTotal);

                if(regimeTrabalho === 40 && (cargaHoratiaTotal <= 20 && cargaHoratiaTotal >= 12)){
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'Carga horária normal'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.color = 'limegreen'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.fontWeight = 'bold'
        
                }else if(regimeTrabalho === 40 && cargaHoratiaTotal <12){
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'Carga horária em falta'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.color = 'red'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.fontWeight = 'bold'
        
                }else if(regimeTrabalho === 40 && cargaHoratiaTotal > 20){
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'Carga horária em excesso'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.color = '#9c31df'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.fontWeight = 'bold'
        
                }if(regimeTrabalho === 20 && (cargaHoratiaTotal <= 12 && cargaHoratiaTotal >= 8)){
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'Carga horária normal'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.color = 'limegreen'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.fontWeight = 'bold'
                }else if(regimeTrabalho === 20 && cargaHoratiaTotal <8){
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'Carga horária em falta'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.color = 'red'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.fontWeight = 'bold'
                }else if(regimeTrabalho === 20 && cargaHoratiaTotal > 12){
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'Carga horária em excesso'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.color = '#9c31df'
                    document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].style.fontWeight = 'bold'
                }
            }
        }else{
            document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll(`tr`)[linha.getAttribute('numeroLinha')].querySelectorAll('td')[0].innerText = 'disciplina sem professor'

        }    
        

        

    })
    
    return true;      
    
}//FIM DA FUNÇÃO DE MARCAÇÃO DO STATUS DA CARGA HORÁRIA

document.querySelector('#inputBarSearch').addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
    buscaInTableDocente()
    }
});
//FUNÇÃO PARA BUSCAR PROFESSORES E DISICPLINAS
function buscaInTableDocente(){
    const valorBusca = document.querySelector('#inputBarSearch').value.trim().toLowerCase();
    
    if(valorBusca === ''){
        removerFiltroUnidade();
        return;
    }

    console.log(valorBusca)
    console.log(valorBusca)
    const linhasDocente = document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll('tr');

    linhasDocente.forEach((linha, index) => {
        let currentNomeDocente = linha.querySelectorAll('td')[0].outerText;
        // console.log(, linha);
        if(currentNomeDocente.trim().toLowerCase().indexOf(valorBusca) === -1 ){
            document.querySelectorAll('.tableInTable')[0].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[3].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[4].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
        }else{
            document.querySelectorAll('.tableInTable')[0].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[3].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[4].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
        }
    })

    /*const linhas_disciplina = document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll('tr');
    console.log(linhas_disciplina)

    linhas_disciplina.forEach((linha, index) => {
        let currentNomeDisciplina = linha.querySelectorAll('td')[1].outerText;
        console.log(valorBusca)
        // console.log(, linha);
        if(currentNomeDisciplina.trim().toLowerCase().indexOf(valorBusca) === -1 ){
            document.querySelectorAll('.tableInTable')[0].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[3].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[4].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
            document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll('tr')[index].classList.add('ocutarLinha')
        }else{
            document.querySelectorAll('.tableInTable')[0].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[1].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[2].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[3].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[4].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
            document.querySelectorAll('.tableInTable')[5].querySelector('tbody').querySelectorAll('tr')[index].classList.remove('ocutarLinha')
        }
    })*/


}



//funcão para buscar um docente
function buscaDocente(codigoDocenteUEASistema){
    if(codigoDocenteUEASistema != null && codigoDocenteUEASistema != 'null' && codigoDocenteUEASistema != undefined){
        let urlBuscaProfessor =    '/buscaProfessor?idProfessor='+codigoDocenteUEASistema;
        // window.open(urlBuscaProfessor)
        const win = window.open(urlBuscaProfessor, '_blank')
        win.focus()

        // alert(codigoDocenteUEASistema);
    }
}