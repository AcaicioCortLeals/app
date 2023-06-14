const express = require("express");
const app = express();

//DOTENV
require("dotenv").config();


//cors
let cors = require("cors");

let corsOptins = {
    credentials: true,
    origin: '*'
}
app.use(cors(corsOptins));

//body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const fs = require('fs')
const path = require("path");
// const moment = require("moment");



//ejs
app.set('view engine', 'ejs');

//arquivos estáticos
app.use(express.static("public"));


(async()=>{
    const {buscaMatriz} = require('./requires/matriz_ocupacional')
    // console.log(await buscaMatriz());
})();

app.get('/', async(req,res)=>{
    res.render('login.ejs', {msg:''});
    
    
});

app.post('/validate', async(req,res)=>{
    try {
    console.log(req);
    let cpf = req.body.cpf;
    let senha = req.body.senha;
    if(!cpf || !senha){
        res.render('login.ejs', {status:1,msg:'USUÁRIO NÃO ENCONTRADO!'}/*, {relatorio:relatorio}*/);    
    }
    let {validarUser} = require('./requires/validarUser');
    let resposta = await validarUser(cpf, senha) 
    console.log(resposta)
    // const {buscaMatriz} = require('./requires/matriz_ocupacional')
    // const relatorio = await buscaMatriz(); 
    if(resposta.length > 0){
        res.render('index.ejs', {user:resposta}/*, {relatorio:relatorio}*/);
    }else{
        res.render('login.ejs', {status:1,msg:'USUÁRIO NÃO ENCONTRADO!'}/*, {relatorio:relatorio}*/);
    }
    // res.json({status:1, relatorio:relatorio});
    
    } catch (error) {
        res.render('login.ejs', {status:1,msg:'Erro no servidor!'}/*, {relatorio:relatorio}*/);
    }
    
});


app.get('/relatorios', async (req, res)=>{
    res.render('relatorios.ejs')
})

app.get('/relatorio_Matriz_Ocupacional', async(req, res)=>{
    //funcação para buscar os períodos
    try {
        res.render('relatorio_Matriz_Ocupacional.ejs')
    } catch (error) {
        res.render('index.ejs')
    }
})

app.get('/matriz_ocupacional', async(req, res)=>{
    let semestre = req.query.periodo || 1;
    console.log('semestre passado',semestre);
    const {queryPersonlizada} = require('./requires/queryPersonalisado')
    const semestre_ano = await queryPersonlizada(`SELECT * FROM sistema_uea.periodo_letivo as tabela_periodo Where tabela_periodo.codigo = ${semestre} ;`);
    console.log(semestre_ano);
    res.render('matriz_ocupacional.ejs', {codSemestre:semestre, ano_semestre:semestre_ano[0].ano_semestre})
})


app.get('/buscaProfessor', async(req,res)=>{
    const codSistemaAcademico = req.query.idProfessor;
    console.log(codSistemaAcademico)
    if(codSistemaAcademico){
        console.log(req.query);
        const {buscaOneProfessor} = require('./requires/buscaOneProfessor')
        const dadosProfessor = await buscaOneProfessor(codSistemaAcademico)
        console.log(dadosProfessor);
        // res.json(req.query);
        res.render('infoDocente.ejs', {dadosProfessor:dadosProfessor[0]})
    }
    

});

app.get('/relatorio_outros', async (req, res)=>{
    try {
        let {infoCUrsos} = require('./requires/infoAllcursos');
        let {buscaPeriodos} = require('./requires/buscarPeriodos');
        const cursos = await infoCUrsos();
        const periodos = await buscaPeriodos();
        res.render('relatorio_outros.ejs',{cursos:cursos, periodos:periodos});
    } catch (error) {
        
    }
})

app.get('/infocursos', async(req,res)=>{
    try{
        const codSistemaAcademico = req.query.curso;
        const {buscarProfessoresCurso} = require('./requires/curso/professor_curso');
        const professores = await buscarProfessoresCurso(codSistemaAcademico)
        console.log(codSistemaAcademico);
        res.render('cursos/infoCurso.ejs', {professores:professores, curso:professores[0].nome, mEnsino:professores[0].modalidadeEnsino , mOferta: professores[0].modalidadeOferta , mCurso: professores[0].modalidadeCurso , Ufisica: professores[0].unidadeFisicaCurso , Uresponsavel:professores[0].unidadeResponsavel});
    }catch(error){
        res.render('index.ejs')
    }
})

app.get('/docentescompartilhados', async(req,res)=>{
    try {
        let idPeriodo = req.query.idPeriodo;
        let {docenteCompartilhado} = require('./requires/buscaDocenteCompartilhado')
        console.log(idPeriodo);
        let docentesCompartilhados = await docenteCompartilhado(idPeriodo);
        console.log(docentesCompartilhados);

        res.render('./docentes/compartilhado/index.ejs', {docentesCompartilhados:docentesCompartilhados});
    } catch (error) {
        console.log(error)
        res.render('index.ejs');
        
    }
    

})

app.get('/excelDownload', async(req,res)=>{
    try {
    res.render('./excelDownload.ejs');
    } catch (error) {
        console.log(error)
        res.render('index.ejs');
        
    }
})

app.post('/buscarPeriodos', async(req,res)=>{
    try {
        const {buscaPeriodos} = require('./requires/buscarPeriodos');
        const periodos = await buscaPeriodos();
        res.json({status:1, periodos:periodos})    
    } catch (error) {
        res.json({status:0})
    }
    
});

app.post('/buscaTurmaDocente', async (req,res)=>{
    try {
        const codigo_SA_docente = req.body.codigoDocente || 1;
        console.log('codigo',req.body);

        const {buscaTurmasDocente} = require('./requires/buscarTurmaDocente');
        const turmasDocente = await buscaTurmasDocente(codigo_SA_docente);
        console.log('buscaDocentees',turmasDocente);
        res.json({status:1, turmasDocente:turmasDocente})    
    } catch (error) {
        res.json({status:0})
    }
});

app.post('/teste', async(req,res)=>{
    try {
    let semestre = req.body.semestre || 1;
    const {buscaMatriz} = require('./requires/matriz_ocupacional')
    const relatorio = await buscaMatriz(semestre); 
    console.log(relatorio)
    res.json({status:1, relatorio:relatorio, semestre:semestre});
    
    } catch (error) {
        res.json({status:0, erro:error});    
    }
    
})


app.listen(parseInt(8081), async()=>{
    // await testDB();
    console.log("APP RODANDO NA PORTA " + 8081 );
});