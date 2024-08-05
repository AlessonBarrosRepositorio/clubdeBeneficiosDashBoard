const meuObservador = new  IntersectionObserver((entradas) =>{
    //console.log(entrada)
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('show');
            //entrada.isIntersecting.remove('hidden');
        }else{
            entrada.target.classList.remove('show')
            //entrada.target.classList.add('hidden')
        }
    })
});

const elemento01 = document.querySelectorAll('.hidden');

elemento01.forEach((elemento001) => meuObservador.observe(elemento001))

//meuObservador.observe(fundo01);