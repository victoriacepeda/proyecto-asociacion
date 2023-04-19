

const $verMasBtn = document.querySelectorAll('.mas-btn');

  $verMasBtn.forEach(item => {
    item.addEventListener('click', event => {

      const mostrarTexto = event.target.parentNode.firstElementChild.nextElementSibling;
      if (mostrarTexto.classList.contains ('oculto')){
        mostrarTexto.classList.remove('oculto');
      } else {
        mostrarTexto.classList.add('oculto');
      }
    })
  })