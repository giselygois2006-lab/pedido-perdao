// Tela 1.A
document.getElementById("tela1A-sim").addEventListener("click", function() {
  document.getElementById("tela1A").style.display = "none";
  document.getElementById("tela1A1").style.display = "flex";
});
document.getElementById("tela1A-nao").addEventListener("click", function() {
  document.getElementById("tela1A").style.display = "none";
  document.getElementById("tela1B").style.display = "flex";
});

// Tela 1.A1
const tela1A1Nao = document.getElementById("tela1A1-nao");
tela1A1Nao.addEventListener("mouseover", function() {
  const maxX=150, maxY=30;
  tela1A1Nao.style.left = Math.random()*maxX + "px";
  tela1A1Nao.style.top = Math.random()*maxY + "px";
});
document.getElementById("tela1A1-sim").addEventListener("click", function() {
  document.getElementById("tela1A1").style.display = "none";
  document.getElementById("tela2").style.display = "flex";
});

// Tela 1.B
const tela1BNao = document.getElementById("tela1B-nao");
tela1BNao.addEventListener("mouseover", function() {
  const maxX=150, maxY=30;
  tela1BNao.style.left = Math.random()*maxX + "px";
  tela1BNao.style.top = Math.random()*maxY + "px";
});
document.getElementById("tela1B-sim").addEventListener("click", function() {
  document.getElementById("tela1B").style.display = "none";
  document.getElementById("tela2").style.display = "flex";
});

// Tela 2
document.getElementById("tela2-continuar").addEventListener("click", function() {
  document.getElementById("tela2").style.display = "none";
  document.getElementById("tela3").style.display = "flex";
  mostrarClausula();
});

// Tela 3
const clausulas = [
`PEDIDO FORMAL DE ACORDO E RETRATAÇÃO\n\nAraão Ruclei Silva Miranda, Venho, por meio deste, apresentar pedido de acordo após compreender o motivo do teu silêncio e reconhecer a necessidade de tratar o ocorrido com a seriedade que ele merece.`,
`DOS FATOS\n\nEm conversa anterior, utilizei a palavra “menino” em tom de brincadeira. Reconheço que a expressão foi inadequada e atingiu um ponto sensível, ainda que sem qualquer intenção de desrespeito.`,
`DA RESPONSABILIDADE\n\nAssumo integralmente o erro na escolha da palavra e peço desculpas pelo impacto causado. Não houve ironia, deboche ou tentativa de diminuição — houve falha, e ela é minha.`,
`DO ESCLARECIMENTO NECESSÁRIO\n\nPara que não reste qualquer dúvida, registro que a forma como te vejo é incompatível com o termo utilizado. Pedi a Deus um homem e fui atendida.`,
`Vejo em você um homem com propósito, centrado, maduro no que quer e seguro de si — inclusive no silêncio.`,
`DO PEDIDO DE ACORDO\n\nDiante do exposto, solicito que este pedido de retratação seja considerado suficiente para encerrar o ocorrido e permitir que sigamos sem esse peso.`,
`DA CONCLUSÃO\n\nO silêncio passou. A certeza ficou. Você é o homem que eu escolhi.\n\nSem mais,\nGisely`
];
let indiceClausula = 0;
const clausulaDiv = document.getElementById("clausula");
const btnClausula = document.getElementById("tela3-continuar");
function mostrarClausula() { clausulaDiv.innerText = clausulas[indiceClausula]; }
btnClausula.addEventListener("click", function() {
  indiceClausula++;
  if(indiceClausula<clausulas.length) mostrarClausula();
  else {
    document.getElementById("tela3").style.display = "none";
    document.getElementById("tela4").style.display = "flex";
  }
});

// Tela 4
document.getElementById("tela4-sim").addEventListener("click", function() {
  document.getElementById("tela4").style.display = "none";
  document.getElementById("telaFinal").style.display = "flex";
});

// ===== Corações e explosão =====
function criarCorações() {
  for(let i=0;i<20;i++){
    let heart=document.createElement("div");
    heart.classList.add("heart");
    heart.style.left=Math.random()*100+"vw";
    heart.style.top=Math.random()*100+"vh";
    heart.style.color=`hsl(${Math.random()*360},70%,60%)`;
    heart.style.fontSize=(15+Math.random()*20)+"px";
    document.body.appendChild(heart);
  }
}
criarCorações();

document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",function(e){
    let explodeHeart=document.createElement("div");
    explodeHeart.classList.add("heart","explode");
    explodeHeart.style.left=(e.clientX-15)+"px";
    explodeHeart.style.top=(e.clientY-15)+"px";
    explodeHeart.style.color=`hsl(${Math.random()*360},70%,60%)`;
    document.body.appendChild(explodeHeart);
    setTimeout(()=>explodeHeart.remove(),500);

    document.querySelector(".tela").style.background="#ffc0cb"; // fundo rosa vermelho pastel
  });
});
function criarCoracaoCaindo() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.color = `hsl(${Math.random() * 30 + 330}, 70%, 60%)`; 
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// cria corações caindo o tempo todo
setInterval(criarCoracaoCaindo, 400);
