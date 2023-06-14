
// ROTINAS PARA A MODAL UNIDADE
  
async function abrirModalUnidade(){
    const unidades = await coletarValoresUnidade();
    document.querySelector('#bgModal').classList.add('active')
    document.querySelector('.modaloptoinUnidade').classList.add('active')
}


async function coletarValoresUnidade(){
    const celulaUnidade = document.querySelectorAll('.valueUnidadeInTable');
    let textoUnidade = [];
    
    celulaUnidade.forEach((value)=>{
        console.log(value.outerText)
        let encontrou = textoUnidade.indexOf(value.outerText);

        if(encontrou === -1){
            textoUnidade.push(value.outerText);
        }else{
        }    
        console.log(textoUnidade)
    })

    // IMPLEMENTAR ROTINA PARA ADINAR OS VALORES DE 'textoUnidade' EM OPÇÕES DE ESCOLHA NA MODAL
    let modal = document.querySelector('.optionsUnidades');
    let options =  '<span onclick="removerFiltroUnidade()">REMOVER FILTRO</span>'
    textoUnidade.forEach((valorUnidade) => {
        options = options + `<span onclick="escolherUnidade(this.outerText)">${valorUnidade}</span>`
    })
    modal.innerHTML = ''
    modal.innerHTML = options;

    return textoUnidade
}

function fecharModalUnidade(){
    document.querySelector('#bgModal').classList.remove('active')
    document.querySelector('.modaloptoinUnidade').classList.remove('active')
}

function escolherUnidade(unidadeValor){
    
    formartarTabelaInUnidade(unidadeValor)

    fecharModalUnidade()
}

function formartarTabelaInUnidade(unidadeValor){
    // console.log(unidadeValor);
    const linhasInUnidadeInMatriz = document.querySelectorAll('.valueUnidadeInTable');
    let valorLinha = [];
    linhasInUnidadeInMatriz.forEach((celulaUnidade) => {
        if(celulaUnidade.outerText === unidadeValor){
            // console.log(celulaUnidade.parentNode.getAttribute('valorLinha'));
            valorLinha.push(parseInt(celulaUnidade.parentNode.getAttribute('valorLinha')))
        }else{
            // celulaUnidade.parentNode.classList.add('ocutarLinha');
        }
    })

    console.log('linhas', valorLinha);

    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas, index) => {
            console.log(valorLinha.indexOf(index),linhaas)
            if(valorLinha.indexOf(index) == -1){
                linhaas.classList.add('ocutarLinha');
            }else{
                linhaas.classList.remove('ocutarLinha');

            }
        })
    })


}

function removerFiltroUnidade(){
    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas) => {
                linhaas.classList.remove('ocutarLinha');
        })
    })
}

// ROTINA PARA A MODAL CURSOS
async function abrirModalCurso(){
    const unidades = await coletarValoresCurso();
    document.querySelector('#bgModal').classList.add('active')
    document.querySelector('.modalOptionCurso').classList.add('active')
}

async function coletarValoresCurso(){
    const celulaUnidade = document.querySelectorAll('.valueCursoInTable');
    let textoCurso = [];
    
    celulaUnidade.forEach((value)=>{
        console.log(value.outerText)
        let encontrou = textoCurso.indexOf(value.outerText);

        if(encontrou === -1){
            textoCurso.push(value.outerText);
        }else{
        }    
        console.log(textoCurso)
    })

    // IMPLEMENTAR ROTINA PARA ADINAR OS VALORES DE 'textoUnidade' EM OPÇÕES DE ESCOLHA NA MODAL
    let modal = document.querySelector('.optionCurso');
    let options =  '<span onclick="removerFiltroCurso()">REMOVER FILTRO</span>'
    textoCurso.forEach((valorCurso) => {
        options = options + `<span onclick="escolherCurso(this.outerText)">${valorCurso}</span>`
    })
    modal.innerHTML = ''
    modal.innerHTML = options;

    return textoCurso
}


function fecharModalCurso(){
    document.querySelector('#bgModal').classList.remove('active')
    document.querySelector('.modalOptionCurso').classList.remove('active')
}

function escolherCurso(valorCurso){
   
    formartarTabelaInCurso(valorCurso)

    fecharModalCurso()

}


function formartarTabelaInCurso(cursoValor){
    // console.log(unidadeValor);
    const linhasInCursoInMatriz = document.querySelectorAll('.valueCursoInTable');
    let valorLinha = [];
    linhasInCursoInMatriz.forEach((celulaUnidade) => {
        if(celulaUnidade.outerText === cursoValor){
            // console.log(celulaUnidade.parentNode.getAttribute('valorLinha'));
            valorLinha.push(parseInt(celulaUnidade.parentNode.getAttribute('valorLinha')))
        }else{
            // celulaUnidade.parentNode.classList.add('ocutarLinha');
        }
    })

    console.log('linhas', valorLinha);

    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas, index) => {
            console.log(valorLinha.indexOf(index),linhaas)
            if(valorLinha.indexOf(index) == -1){
                linhaas.classList.add('ocutarLinha');
            }else{
                linhaas.classList.remove('ocutarLinha');

            }
        })
    })


}

function removerFiltroCurso(){
    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas) => {
                linhaas.classList.remove('ocutarLinha');
        })
    })

    fecharModalCurso();
}




// ROTINA PARA A MODAL TURNOS
async function abrirModalTurno(){
    const turnos = await coletarValoresTurno();
    document.querySelector('#bgModal').classList.add('active')
    document.querySelector('.modalOptionTurno').classList.add('active')
}

async function coletarValoresTurno(){
    const celulaUnidade = document.querySelectorAll('.valueTurnoInTable');
    let textoTurno = [];
    
    celulaUnidade.forEach((value)=>{
        console.log(value.outerText)
        let encontrou = textoTurno.indexOf(value.outerText);

        if(encontrou === -1){
            textoTurno.push(value.outerText);
        }else{
        }    
        console.log(textoTurno)
    })

    // IMPLEMENTAR ROTINA PARA ADINAR OS VALORES DE 'textoUnidade' EM OPÇÕES DE ESCOLHA NA MODAL
    let modal = document.querySelector('.optionTurno');
    let options =  '<span onclick="removerFiltroTurno()">REMOVER FILTRO</span>'
    textoTurno.forEach((textoTurno) => {
        options = options + `<span onclick="escolherTurno(this.outerText)">${textoTurno}</span>`
    })
    modal.innerHTML = ''
    modal.innerHTML = options;

    return textoTurno
}


function fecharModalTurno(){
    document.querySelector('#bgModal').classList.remove('active')
    document.querySelector('.modalOptionTurno').classList.remove('active')
}

function escolherTurno(valorTurno){
   
    formartarTabelaInTurno(valorTurno)

    fecharModalTurno()

}


function formartarTabelaInTurno(cursoValor){
    // console.log(unidadeValor);
    const linhasInCursoInMatriz = document.querySelectorAll('.valueTurnoInTable');
    let valorLinha = [];
    linhasInCursoInMatriz.forEach((celulaUnidade) => {
        if(celulaUnidade.outerText === cursoValor){
            // console.log(celulaUnidade.parentNode.getAttribute('valorLinha'));
            valorLinha.push(parseInt(celulaUnidade.parentNode.getAttribute('valorLinha')))
        }else{
            // celulaUnidade.parentNode.classList.add('ocutarLinha');
        }
    })

    console.log('linhas', valorLinha);

    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas, index) => {
            console.log(valorLinha.indexOf(index),linhaas)
            if(valorLinha.indexOf(index) == -1){
                linhaas.classList.add('ocutarLinha');
            }else{
                linhaas.classList.remove('ocutarLinha');

            }
        })
    })


}

function removerFiltroTurno(){
    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas) => {
                linhaas.classList.remove('ocutarLinha');
        })
    })

    fecharModalTurno();
}




// ROTINA PARA A MODAL CARGA HORÁRIA
async function abrirModalStatusCargaHoraria(){
    const turnos = await coletarValoresCargaHoraria();
    document.querySelector('#bgModal').classList.add('active')
    document.querySelector('.modalOptionCH').classList.add('active')
}

async function coletarValoresCargaHoraria(){
    const celulaUnidade = document.querySelectorAll('.valueCHInTable');
    let textoTurno = [];
    
    celulaUnidade.forEach((value)=>{
        console.log(value.outerText)
        let encontrou = textoTurno.indexOf(value.outerText);

        if(encontrou === -1){
            textoTurno.push(value.outerText);
        }else{
        }    
        console.log(textoTurno)
    })

    // IMPLEMENTAR ROTINA PARA ADINAR OS VALORES DE 'textoUnidade' EM OPÇÕES DE ESCOLHA NA MODAL
    let modal = document.querySelector('.optionCH');
    let options =  '<span onclick="removerFiltroCH()">REMOVER FILTRO</span>'
    textoTurno.forEach((textoTurno) => {
        options = options + `<span onclick="escolherCH(this.outerText)">${textoTurno}</span>`
    })
    modal.innerHTML = ''
    modal.innerHTML = options;

    return textoTurno
}


function fecharModalCargaHoraria(){
    document.querySelector('#bgModal').classList.remove('active')
    document.querySelector('.modalOptionCH').classList.remove('active')
}

function escolherCH(valorTurno){
   
    formartarTabelaInCH(valorTurno)

    fecharModalCargaHoraria()

}


function formartarTabelaInCH(cursoValor){
    // console.log(unidadeValor);
    const linhasInCursoInMatriz = document.querySelectorAll('.valueCHInTable');
    let valorLinha = [];
    linhasInCursoInMatriz.forEach((celulaUnidade) => {
        if(celulaUnidade.outerText === cursoValor){
            // console.log(celulaUnidade.parentNode.getAttribute('valorLinha'));
            valorLinha.push(parseInt(celulaUnidade.parentNode.getAttribute('valorLinha')))
        }else{
            // celulaUnidade.parentNode.classList.add('ocutarLinha');
        }
    })

    console.log('linhas', valorLinha);

    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas, index) => {
            console.log(valorLinha.indexOf(index),linhaas)
            if(valorLinha.indexOf(index) == -1){
                linhaas.classList.add('ocutarLinha');
            }else{
                linhaas.classList.remove('ocutarLinha');

            }
        })
    })


}

function removerFiltroCH(){
    let contentTableInTable = document.querySelectorAll('.contentTableInTable');
    
    contentTableInTable.forEach((tabela) => {
        let linhasTabela =  tabela.querySelectorAll('tbody tr');
        linhasTabela.forEach((linhaas) => {
                linhaas.classList.remove('ocutarLinha');
        })
    })

    fecharModalCargaHoraria();
}


/*MODAL TURMA*/

function abrirModalDisciplina(){
    document.querySelector('#bgModal').classList.add('active');
    document.querySelector('.modalBuscaDisciplina').classList.add('active');
    setTimeout(()=>{

    document.querySelector('.modalBuscaDisciplina').style.height = '140px' 
    document.querySelector('.modalBuscaDisciplina').style.width = '400px' 
    },200)
}

function fecharModalDisciplina(){
    document.querySelector('.modalBuscaDisciplina').classList.remove('active');
    document.querySelector('#bgModal').classList.remove('active');
    document.querySelector('.modalBuscaDisciplina').style.width = '0px' 
    document.querySelector('.modalBuscaDisciplina').style.height = '0px' 
}

document.getElementById('buscaDisciplina').addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        buscaNomeDisciplina()
    }
});

function buscaNomeDisciplina(){
    
    let array_disciplinas = document.querySelectorAll('.nomeComponente');
    let valorInBusca = document.getElementById('buscaDisciplina').value.trim().toLowerCase()

    //buscar as linhas que contém o nome da disciplina
    let numero_linhas_disciplina_encontrada = []
    array_disciplinas.forEach((celulaDisciplina)=>{
        let valorDisicplina = celulaDisciplina.outerText.trim().toLowerCase();
        if(valorDisicplina.indexOf(valorInBusca) > -1){
            numero_linhas_disciplina_encontrada.push(celulaDisciplina.parentNode.getAttribute('valorLinha'))
        }else{

        }
        
    });

    console.log(numero_linhas_disciplina_encontrada);
    document.querySelector('#numeroBuscaEncontradosDisciplinas').parentNode.style.display = 'inline-flex'
    document.querySelector('#numeroBuscaEncontradosDisciplinas').innerText = numero_linhas_disciplina_encontrada.length;

    // esconder as linhas que tenham essas disciplinas
    const tabelas = document.querySelectorAll('.tableInTable');

    tabelas.forEach((tabela)=>{
        let linhas = tabela.querySelectorAll(' tbody tr');
        linhas.forEach((linha, index)=>{
            console.log(index.toString(), numero_linhas_disciplina_encontrada)
            console.log(numero_linhas_disciplina_encontrada.indexOf(index.toString()))
            if(numero_linhas_disciplina_encontrada.indexOf(index.toString()) === -1){
                linha.classList.add('ocutarLinha')
            }else{
                linha.classList.remove('ocutarLinha')
            }
        })
    })
    

    

}


//abrirModalTurma

function abrirModalTurma(){
    document.querySelector('#bgModal').classList.add('active')
    document.querySelector('.modalBuscaTurmas').classList.add('active');
}

function fecharModalTurma(){
    document.querySelector('#bgModal').classList.remove('active')
    document.querySelector('.modalBuscaTurmas').classList.remove('active')
}

//FUNÇÃO PARA ABRIR A TABELA TURMA DENTRO DO MODAL
function abreTabelaTurma(componente,index){
    document.querySelectorAll('.contentTableTurma')[index].classList.toggle('active');  
    componente.querySelector('i').classList.toggle('active')
}