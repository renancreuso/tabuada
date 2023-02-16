
const exibir =  document.querySelector(".exibir");
exibir.addEventListener('click', function(){
    
    let sessao = document.querySelector('section');
    sessao.append(criarLinha('pre', 'resultado'));
    let resultado = document.querySelector(".resultado");
    const valor = document.querySelector(".valores").value;
    
    
    
    for(let i = 1; i <= 10; i++){
        const total = valor* i;
        resultado.textContent +=valor+" x "+ i +" = "+total+" \n";
           
    }

    if(valor == "valor"){
        resultado.classList.add("valor")
        resultado.textContent = " Escolha uma opção de 1 - 10\n na caixinha de Valor a cima,\n Mas aperte limpar antes.";
    }
   
})

function criarLinha(elemento,classe){

    let linha = document.createElement(elemento);
    linha.classList.add(classe);
    
    return linha;
}
