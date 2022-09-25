const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    //É uma linguagem de marcação utilizada na construção de páginas na Web.
                    //É um mecanismo para adicionar estilo a um documento web.
                    //É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.
                    '<p>HTML</p> <br> <p>Is a markup language using  for web page construction.</p> <br>',
                    '<p>CSS</p> <br> <p>It responsible for  adding  style in a web a page.</p> <br>',
                    '<p>JavaScript</p> <br> It a Programming Language. With HTML and CSS, it one of tree principles in web. <p></p> <br>',
                    '<p>Git</p> <br> <p>It a system version control. </p> <br>',
                    '<p>Github</p> <br> <p>It a platform for host a code and archives with control version using Git.</p> <br>',
                    '<p>Java</p> <br> <p>It a OPP Programing Language. Today is  using for back end systems with Springboot framework.</p> <br>',
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Pass the mouse over and skill for read description */';
    } )
} );
