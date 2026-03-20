//eventos - propriedades

let botao1 = document.getElementById("botao1");

//manipulador = onclick
botao1.onclick = function(){
    console.log("clique");
    alert("Primeiro Evento");
};

botao1.onclick = function(){
    alert("Segundo evento");
};

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    //alert("Segundo evento");
    botao2.style.backgroundColor = "red";
}

//restaurar a cor original do botão
botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
}

botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique";
}

//evento = teclado
let campoEntrada = document.getElementById("campoEntrada");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("pressionou a tecla Enter");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
};

let botao3 = document.getElementById("botao3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");

//addeventlistener
botao3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro evento!";
});

botao3.addEventListener("click", function(){
    mensagem2.textContent = "Segundo evento!";
});

let caixa = document.getElementById("caixa");
let area = document.getElementById("area");

//permite arrastar o elemento
caixa.addEventListener("dragstart", () =>{
    console.log("arrastando o objeto");
});

//permite soltar o elemento
area.addEventListener("dragover", (e) =>{
    e.preventDefault();
});

area.addEventListener("drop", ()=>{
    area.appendChild(caixa);
});

