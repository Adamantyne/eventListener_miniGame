let posicaoXCenario=600;
let posicaoXPorta=850;
let posicaoXquarto=0;
let portaFechada = true;
let divPersonagem = document.querySelector(".personagem");
let escalaDaImagem = ``;
let personagem = document.querySelector(".personagem img");
const porta = document.querySelector(".porta img");
const quarto = document.querySelector(".quarto img");
const cenario = document.querySelector(".cenario img");

document.addEventListener("keypress", event=>{
    personagem.scrollIntoView({behavior:"instant", inline:"center", block:"center"});
    let tecla = event.keyCode;
    if(tecla===97){
        escalaDaImagem=`scaleX(-1)`
        posicaoXCenario-=10;
        posicaoXPorta-=10
        posicaoXquarto-=10
        //if(posicaox<160){
        //    posicaox =160;
        //}
        divPersonagem.innerHTML=`<img class="personagem" src="assets/animação_andando.gif" alt="">`;
        personagem = document.querySelector(".personagem img");
        personagem.style.height=`230px`;
        personagem.style.width=`110px`;
        personagem.style.transform=`${escalaDaImagem}`
        personagem.style.top=`350px`
        quarto.style.left=`${posicaoXCenario}px`;
        cenario.style.left=`${posicaoXPorta}px`;
        porta.style.left=`${posicaoXquarto}px`;
    }
    else if(tecla===100){
        escalaDaImagem = `scaleX(1)`
        posicaoXCenario+=10;
        posicaoXPorta+=10
        posicaoXquarto+=10
        //if(portaFechada && posicaox>800){
         //   posicaox=800;
        //}
        divPersonagem.innerHTML=`<img class="personagem" src="assets/animação_andando.gif" alt="">`;
        personagem = document.querySelector(".personagem img");
        personagem.style.height=`230px`;
        personagem.style.width=`110px`;
        personagem.style.top=`350px`;
        personagem.style.transform=`${escalaDaImagem}`
        quarto.style.left=`${posicaoXCenario}px`;
        cenario.style.left=`${posicaoXPorta}px`;
        porta.style.left=`${posicaoXquarto}px`;
    }
})
document.addEventListener("keyup", event=>{
    divPersonagem.innerHTML=`<img class="personagem" src="assets/animação_parada.gif" alt="">`;
    let personagem = document.querySelector(".personagem img");
    quarto.style.left=`${posicaoXCenario}px`;
        cenario.style.left=`${posicaoXPorta}px`;
        porta.style.left=`${posicaoXquarto}px`;
    personagem.style.transform=`${escalaDaImagem}`
})
porta.addEventListener("click",()=>{
    quarto.innerHTML=`<img src="assets/animação_porta_aberta.gif" alt="">`;
    portaFechada=false;
    personagem.scrollIntoView({behavior:"smooth", inline:"center", block:"center"});
})
