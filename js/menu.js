
// função responsavel pela abertura e fechamento do menu lateral
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

// funções responsaveis para o background "preto" quando o menu lateral é aberto
function bgmenu() {
  document.getElementById('bg-menu').style.height = '100vh'
}

function bgmenuClose() {
  document.getElementById('bg-menu').style.height = '0vh'
}  


// função pesquisa >


// função que esconde os elementos (é chamada dentro da função abrirPesquisa)
function escondeElementos() {
    document.getElementById('banho').classList.add("d-none");
    document.getElementById('tosa').classList.add("d-none");
    document.getElementById('acessorios').classList.add("d-none");
    document.getElementById('alimentacao').classList.add("d-none");
    document.getElementById('ultimos-pedidos').classList.add("d-none");
    document.getElementById('seus-dados').classList.add("d-none");
    document.getElementById('dog-dados').classList.add("d-none");
}

//função abrir pesquisa

//estabeleci uma variavel estado com o valor true, para que quando clicado no botão de pesquisar
//ele recolhe novamente, por conta da inversão do true > false, caindo no else (no qual esconde a barra)
let estado = true;
function abrirPesquisa() {
    if(estado === true) {
      
      document.getElementById('pesquisa1').style.width = "170px";
    } else {
      document.getElementById('pesquisa1').style.width = "0";
    }
    estado = !estado;

    let valorPesquisa = document.getElementById('pesquisa1').value;
    valorPesquisa = valorPesquisa.toLowerCase();

    
    // para cada valor de pesquisa, ele compara com as palavras correspondidas
    // então estabelece o filtro de exibição
    // deixei o escondeElementos() para que os elementos só sumam quando é executado a pesquisa
    if (valorPesquisa === 'banho') { 
      escondeElementos()
      document.getElementById('banho').classList.remove("d-none");
      }
    if (valorPesquisa === 'tosa') {
      escondeElementos()
      document.getElementById('tosa').classList.remove("d-none");
      }
    if (valorPesquisa === 'acessórios' || valorPesquisa === 'acessorios') {
      escondeElementos()
      document.getElementById('acessorios').classList.remove("d-none");
      }
    if (valorPesquisa === 'alimentação' || valorPesquisa === 'alimentacao') {
      escondeElementos()
      document.getElementById('alimentacao').classList.remove("d-none");
      }
    if (valorPesquisa === 'pedidos' || valorPesquisa === 'ultimos pedidos') {
      escondeElementos()
      document.getElementById('ultimos-pedidos').classList.remove("d-none");
      }
    if (valorPesquisa === 'meu dados' || valorPesquisa === 'dados') {
      escondeElementos()
      document.getElementById('seus-dados').classList.remove("d-none");
      }
    if (valorPesquisa === 'dados do dog' || valorPesquisa === 'dog') {
      escondeElementos()
      document.getElementById('dog-dados').classList.remove("d-none");
      }              
    // depois de feito o filtro, limpa o valor para null
    document.getElementById('pesquisa1').value ='';

}
