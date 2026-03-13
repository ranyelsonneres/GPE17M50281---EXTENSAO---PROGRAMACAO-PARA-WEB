//buscar o elemento
let meuElemento = document.getElementById("paragrafo"); //id
console.log(meuElemento);
console.log(meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo"); //classe
console.log(paragrafo1);
for(let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p"); //tag
console.log(paragrafo2);

//criar elementos HTML
let destino = document.getElementById("elemento");
let elementoHtml = document.createElement("p");
elementoHtml.textContent = "Paragrafo criado via JavaScript";
destino.append(elementoHtml);

let lista = document.getElementById("lista");
let ul = document.createElement("ul"); //lista não ordenada
let itens = ["Arroz", "Feijão", "Suco", "Uva"]; //itens da lista
for(i = 0; i<itens.length;i++){
    let li = document.createElement("li"); //item da lista
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul);


//algoritmo
function somar() {
    //capturar o que o usuário digita
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    console.log(typeof n1);
    let soma = n1 + n2;
    let saida = `Resultado: <b>${soma}</b>`; //template literal
    document.getElementById("resultado").innerHTML = saida;
}

//eventos (clique)
let botao = document.getElementById("botao");
botao.onclick = function(){
    alert("Clicou!");
    botao.style.backgroundColor = "red";
    botao.textContent = "Você clicou sim!";
} 
