const divPersonagem = document.querySelector(".personagem");
const divQuarto = document.querySelector(".quarto");
const porta = document.querySelector(".porta");
const pagina = document.querySelector(".pagina");
const texto = document.querySelector(".texto");
const informacoes = document.querySelector(".informacoes");
let escalaDaImagem = '';
let personagem = document.querySelector(".personagem img");
let quarto = document.querySelector(".quarto img");
let cenario = document.querySelector(".cenario img");
let posicao = 0;
let portaFechada = true;
let contador =0;
let intervalo = null;
let numeroDoTexto=1;


//textos
let textoContinuar = `<strong>  *Pressione enter para continuar</strong>*`;
let texto1 ="Bem vindo! Você acabou de entrar em um mundo construindo a partir do addEventListener, então eu vou começar o apresentando a você. Neste momento, você está visualizando o quarto de Zaely (é o que eu espero '-'), nossa amiga que, gentilmente, acordou cedo pra te mostrar como tudo funciona ... como você pode notar, ela é uma garota feliz que gosta de usar roupas bem compridas (não foi por que o designer ficou com preguiça de desenhar os pés/mãos dela, confia)";
let texto2 ="Enfim, indo direto ao assunto, existem várias ações que podem ser executadas por você, usuário, como clicar uma tecla no seu teclado, clicar com o mouse em algum elemento da tela e etc. Porém, para que esse evento execute alguma ação, ele deve ser registrado. Para isso, precisamos associar esse evento a um “event handler”, ou melhor, uma manipulador de eventos, sendo ele um bloco de código (geralmente uma função JavaScript definida pelo programador). Essa associação poderá ser feita pela propriedade do próprio objeto direcionando para a ação executada ou pelo método eventListener.";
let texto3 = "Por exemplo, vamos supor que você queira criar uma div que, ao ser clicada, ela mude sua cor. A primeira coisa a se fazer é capturar essa div no js (com o querySelector, por exemplo). Caso você queira fazer com a propriedade do próprio objeto, basta você registrar essa propriedade nele. Nesse nosso exemplo da div, utilizaríamos o “onclick” (objeto.onclick= “event handler” ) sendo o event handler a função a ser executada, alterando a cor da div.";
let texto4 ="Caso você queira fazer isso com o método addEventListener(), você deverá associa-lo ao objeto e, a priori, passar dois parâmetros. Você precisará indicar o evento e também a função a ser executada (nesse caso, trabalha como uma função de call-back).Voltando ao exemplo da div que muda de cor, ficaria: objeto.addEventListener(“click”, função());, sendo a função passada como parâmetro responsável por alterar a cor da div.";
let texto5 ="Agora vamos ver isso tudo ocorrendo na prática! Neste momento, Zaely está esperando você dizer o que fazer para ela. Para isso, o eventListener ira avisa-la sobre a sua decisão. Tendo o DOM como objeto, está registrado no eventListener o evento de pressionar para duas teclas: “A”/”D”.(document. addEventListener('keypress',função())). Digite “A” para zaely andar para a esquerda e “D” para direita.";
let texto6 = "Para explorar o lado de fora, você precisará primeiro abrir a porta. Sendo a porta o objeto desta vez, o eventListener registrou o evento de click, acionando a função que abre a porta (porta. addEventListener(“click”, função()). Clique na porta para abri-la.";
let texto7 ="Bom, é isso. Espero que Zaely tenha te ajudado a explorar um pouco desse maravilhoso mundo dos eventos(caso não tenha, foi culpa dela em ...). Mas não pare por aqui, ainda tem muito mais a ser explorado! Boa sorte em seus estudos XD.";
let textoExibido =[];

function exibindoInformacoes(numeracaoDoTexto){
    conferindoNumeroDoTexto(numeracaoDoTexto);
    if(textoExibido!=="fim"){
        intervalo = setInterval(()=>{
            texto.innerHTML+=textoExibido[contador];
            contador++;
            if(contador===textoExibido.length){
                finalizandoMensagem();
            }
        },20);
    }
}
function conferindoNumeroDoTexto(numeracaoDoTexto){
    if(numeracaoDoTexto===1){
        textoExibido= texto1.split("");
        return textoExibido;
    }
    else if(numeracaoDoTexto ===2){
        textoExibido= texto2.split("");
        return textoExibido;
    }
    else if(numeracaoDoTexto ===3){
        textoExibido= texto3.split("");
        return textoExibido;
    }
    else if(numeracaoDoTexto ===4){
        textoExibido= texto4.split("");
        return textoExibido;
    }
    else if(numeracaoDoTexto ===5){
        textoExibido= texto5.split("");
        adicionandoEventoAndar();
        return textoExibido;
    }
    else if(numeracaoDoTexto ===6){
        textoExibido= texto6.split("");
        adicionandoEventoAbrirPorta();
        return textoExibido;
    }
    else if(numeracaoDoTexto ===7){
        textoExibido= texto7.split("");
        return textoExibido;
    }
    else if(numeracaoDoTexto ===8){
        textoExibido= "fim";
        console.log("fim");
        informacoes.classList.add("escondido");
        return textoExibido;
    }
}
function finalizandoMensagem(){
    texto.innerHTML+=`${textoContinuar}`;
            clearInterval(intervalo);
            document.addEventListener("keypress", function enter(event){
                let tecla = event.keyCode;
                if(tecla===13){
                    numeroDoTexto++;
                    contador=0;
                    texto.innerHTML="";
                    document.removeEventListener("keypress",enter);
                    exibindoInformacoes(numeroDoTexto);
                }
            })
}
function adicionandoEventoAndar(){
    document.addEventListener("keypress", event=>{
        let tecla = event.keyCode;
        if(tecla===97){
            escalaDaImagem=`scaleX(-1)`;
            personagemAndando();
            movendoMapa(10);
        }
        else if(tecla===100){
            escalaDaImagem=`scaleX(1)`;
            personagemAndando();
            movendoMapa(-10);
        }
    })
}
function adicionandoEventoAbrirPorta(){
    porta.addEventListener("click",()=>{
        divQuarto.innerHTML=`<img src="assets/animação_porta_aberta.gif" alt="quarto">`;
        portaFechada=false;
        quarto = document.querySelector(".quarto img");
        quarto.style.left=`${posicao}px`;
        pagina.style.backgroundColor=`white`;
    })
}
document.addEventListener("keyup", ()=>{
    divPersonagem.innerHTML=`<img class="personagem" src="assets/animação_parada.gif" alt="personagem">`;
    personagem = document.querySelector(".personagem img");
    personagem.style.transform=`${escalaDaImagem}`;
})

function personagemAndando(){
    personagem.scrollIntoView({behavior:"smooth", block:"center"});
    divPersonagem.innerHTML=`<img class="personagem" src="assets/animação_andando.gif" alt="personagem">`;
    personagem = document.querySelector(".personagem img");
    personagem.style.height=`230px`;
    personagem.style.width=`110px`;
    personagem.style.top=`350px`;
    personagem.style.transform=`${escalaDaImagem}`;
}
function movendoMapa(valor){
    posicao+=valor;
    bloqueandoPassagem(posicao);
    quarto.style.left=`${posicao}px`;
    porta.style.left=`${posicao+850}px`;
    cenario.style.left=`${posicao+973}px`
    console.log(posicao);
}

function bloqueandoPassagem(posicaoBloqueada){
    if(posicaoBloqueada>10){
        posicao=10;
    }
    else if(posicaoBloqueada<-630 && portaFechada){
        posicao=-630;
    }
}
exibindoInformacoes(numeroDoTexto);