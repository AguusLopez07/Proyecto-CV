document.querySelector('.checkbtn').addEventListener('click', () => {
 document.querySelector('.contenedor-principal-header').classList.toggle('show');

});

const menuLinks = document.querySelectorAll('#categorias a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const icon = document.querySelector(`#categorias a[href="#${id}"] i `);
        const span = document.querySelector(`#categorias a[href="#${id}"] span `);

        if(entry.isIntersecting){
        
            icon.classList.add('activo');
            span.classList.add('activo');
            
           
        } else{
            icon.classList.remove('activo');
            span.classList.remove('activo');
        }
    })
}, {rootMargin: "-30% 0px -70% 0px" } 
);

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function(){
        document.querySelector('.contenedor-principal-header').classList.remove('show');
    });

    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
    
});

const masInfo = document.querySelector('#info-adicional-py');
document.querySelectorAll('.gallery-item .item img').forEach( elemento => {
    elemento.addEventListener('click', () => {
        const ruta =  elemento.getAttribute('src');
        

        const titulo = elemento.parentNode.dataset.titulo;
        const descripcion = elemento.parentNode.dataset.descripcion;

        masInfo.classList.add('activarinfo');

        document.querySelector('#info-adicional-py img').src = ruta;
        document.querySelector('#info-adicional-py h3').innerHTML = titulo;
        document.querySelector('#info-adicional-py p').innerHTML = descripcion;

    });
    
});


document.getElementById('ocultar').addEventListener('click', () => {
    document.querySelector('.info-adicional-py').classList.remove('activarinfo');
});

const formulario = document.querySelector('#formulario');
const botonEmail = document.querySelector('#mailto');

formulario.addEventListener('submit', manejarSubmit);

function manejarSubmit(evento){
    evento.preventDefault();
    form = new FormData(this);
    botonEmail.setAttribute('href', `mailto:aguustinlopez07@gmail.com?subject= De parte de: ${form.get('nombre')}. Asunto: ${form.get('asunto')}&body=Mi numero de telefono: ${form.get('telefono')} ${form.get('mensaje')}`);
    botonEmail.click();
    alert('Su mensaje se esta cargando!')
}










