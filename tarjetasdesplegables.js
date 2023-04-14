

const $verMasBtn = document.querySelectorAll('.mas-btn');
const $texto = document.querySelectorAll('.oculto');

//$verMasBtn.addEventListener('click', toggle);

document.querySelectorAll('.mas-btn').forEach(item => {
    item.addEventListener('click', event => {
      toggle()
    })
  })

function toggle(){
    $texto.classList.toggle('mostrar');
}

