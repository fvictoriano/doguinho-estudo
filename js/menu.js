/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  var teste2 = 'AAAAAAA'
  var teste2 = teste2.toLowerCase()
  



  
let estado = true;
function abrirPesquisa() {
    if(estado === true) {
      document.getElementById('pesquisa1').style.width = "200px";
    } else {
      document.getElementById('pesquisa1').style.width = "0";
    }
    estado = !estado;

    let valorPesquisa = document.getElementById('pesquisa1').value;
    valorPesquisa = valorPesquisa.toLowerCase();

    document.getElementById('banho').classList.add("d-none");
    document.getElementById('tosa').classList.add("d-none");
    document.getElementById('acessorios').classList.add("d-none");
    document.getElementById('alimentacao').classList.add("d-none");

    if (valorPesquisa === 'banho') { document.getElementById('banho').classList.remove("d-none"); }
    if (valorPesquisa === 'tosa') { document.getElementById('tosa').classList.remove("d-none");}
    if (valorPesquisa === 'acessórios' || valorPesquisa === 'acessorios') { document.getElementById('acessorios').classList.remove("d-none"); }
    if (valorPesquisa === 'alimentação' || valorPesquisa === 'alimentacao') { document.getElementById('alimentacao').classList.remove("d-none"); }

    document.getElementById('pesquisa1').value ='';

}


function bgmenu() {
  document.getElementById('bg-menu').style.height = '100vh'
}

function bgmenuClose() {
  document.getElementById('bg-menu').style.height = '0vh'
}