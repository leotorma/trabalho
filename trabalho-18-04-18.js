const form = document.querySelector('form');
const inputCursos = document.querySelector('input#cursos');
const selectPrioridade = document.querySelector('select#prioridade');
const ol = document.querySelector('ol');
const inputPrioridade = document.querySelector('input#prioridade');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const cursos = inputCursos.value;
    const prioridade = inputPrioridade.value;
    const opcao = document.createElement('option');
    opcao.textContent = cursos;
    return selectPrioridade.appendChild(opcao);  
});

selectPrioridade.addEventListener('click',function(e){
   console.log(e.target.tagName);  
   if (e.target.tagName === 'OPTION')     
});

