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


let estado = true;
function abrirPesquisa() {
    if(estado === true) {
      document.getElementById('pesquisa1').style.width = "200px";
    } else {
      document.getElementById('pesquisa1').style.width = "0";
    }
    estado = !estado;

    let valorPesquisa = document.getElementById('pesquisa1').value;

    if (valorPesquisa === 'Banho' || valorPesquisa === 'banho' ) {
      let elemento1 = document.getElementById('tosa');
      elemento1.classList.add("d-none");
      let elemento2 = document.getElementById('acessorios');
      elemento2.classList.add("d-none");
      let elemento3 = document.getElementById('alimentacao');
      elemento3.classList.add("d-none");
      document.getElementById('pesquisa1').value = '';
    }

    if (valorPesquisa === 'Tosa' || valorPesquisa === 'tosa' ) {
      let elemento1 = document.getElementById('banho');
      elemento1.classList.add("d-none");
      let elemento2 = document.getElementById('acessorios');
      elemento2.classList.add("d-none");
      let elemento3 = document.getElementById('alimentacao');
      elemento3.classList.add("d-none");
      document.getElementById('pesquisa1').value = '';
    }

    if (valorPesquisa === 'Acessórios' || valorPesquisa === 'acessórios' ) {
      let elemento1 = document.getElementById('banho');
      elemento1.classList.add("d-none");
      let elemento2 = document.getElementById('tosa');
      elemento2.classList.add("d-none");
      let elemento3 = document.getElementById('alimentacao');
      elemento3.classList.add("d-none");
      document.getElementById('pesquisa1').value = '';
    }

    if (valorPesquisa === 'Alimentação' || valorPesquisa === 'alimentação' ) {
      let elemento1 = document.getElementById('banho');
      elemento1.classList.add("d-none");
      let elemento2 = document.getElementById('tosa');
      elemento2.classList.add("d-none");
      let elemento3 = document.getElementById('acessorios');
      elemento3.classList.add("d-none");
      document.getElementById('pesquisa1').value = '';
    }

}  