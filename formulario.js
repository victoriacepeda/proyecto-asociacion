const btn = document.querySelector("#btn-form");
const contenedorMensaje = document.querySelector('#mensaje-form-enviado');



btn.onclick = function(event){
    borrarMensaje();
    const $div = document.createElement('div');
    $div.className = 'mensaje-envio';

    const $p = document.createElement('p');
    $p.textContent= ('Felicitaciones enviaste tu formulario correctamente. Pronto estaremos en contacto. ¡Gracias y que el amor traspase!').toUpperCase();

    $div.appendChild($p);
    contenedorMensaje.appendChild($div);
    
    event.preventDefault();
    
};

function borrarMensaje(){
    const $divContenedor = document.querySelectorAll('.mensaje-envio');
    for(let i=0; i<$divContenedor.length; i++){
        $divContenedor[i].remove();
    }
}
