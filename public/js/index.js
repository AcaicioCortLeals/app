function toggleBarLeft(){
    document.querySelector('.leftBar').classList.toggle('closed');
}

function abrirSelect(indice, element){
    element.querySelector('.angle_select').classList.toggle('rotate')
    let selects = document.querySelectorAll('.listaOptions');

    selects[indice].classList.toggle('open');
}

function selecionaSelect(indice, elemento, idSemestreInDB) {
    document.querySelectorAll('.value_select')[indice].innerText = elemento.outerText;
    document.querySelector('#botaoAbrirMatriz').setAttribute('href',`/matriz_ocupacional?periodo=${idSemestreInDB}`);
    header = document.querySelectorAll('.cabecalhoFilter')[indice]
    abrirSelect(indice, header);
    verificaMudanca(header)
}

function verificaMudanca(header){
   console.log(header.querySelector('.value_select'));
   if(header.querySelector('.value_select') !== 'selecione uma período'){
        document.querySelectorAll('.optionDownlad').forEach((iten) => {
            iten.classList.add('valido')
        })
   }else{
    document.querySelectorAll('.optionDownlad').forEach((iten) => {
        iten.classList.remove('valido')
    })
   }
}

function baixarEmFormatoExcel(){
    window.open(
        './excelDownload.html',
        '_blank' // <- This is what makes it open in a new window.
      );
}

function baixarEmFormatoPdf(){
    alert('baixar em formato pdf')
}


/*function visualizarNaWeb(){
    let periodo = document.querySelector('.cabecalhoFilter').getAttribute('valorescolhido');
    window.open(
        `http://localhost:8081/matriz_ocupacional/`,
        '_blank' // <- This is what makes it open in a new window.
      );
}*/


/* FUNÇÕES DA BARRA LATERAL */
function irToHome(){
    window.open('/','_self')
}