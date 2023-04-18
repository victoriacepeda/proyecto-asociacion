

const $verMasBtn = document.querySelectorAll('.mas-btn');
const $texto = document.querySelectorAll('.oculto');



document.querySelectorAll('.mas-btn').forEach(item => {
    item.addEventListener('click', event => {
      console.log(event.target)
      console.dir(event.target);
    })
  })

function toggle(){
    $texto.classList.toggle('mostrar');
}
