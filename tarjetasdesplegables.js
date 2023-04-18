

const $verMasBtn = document.querySelectorAll('.mas-btn');

  $verMasBtn.forEach(item => {
    item.addEventListener('click', event => {

      const mostrarTexto = event.target.parentNode.firstElementChild.nextElementSibling;
      //mostrarTexto.style.display ='block';
      mostrarTexto.classList = 'mostrar'

     
    })
  })