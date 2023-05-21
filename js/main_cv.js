
/* === MOSTRAMOS MENU === */
/* SI DAMOS CLICK EN EL MENU, SE ABRIRA*/
const mostrarMenu = (togleId, navId) => {
    const togle = document.getElementById(togleId),
    nav = document.getElementById(navId)

    // Validamos las variables
    if(togle && nav){
        togle.addEventListener('click', () => {
            nav.classList.toggle('mostrar-menu')
        })
    }
}
mostrarMenu('nav-togle','menu')


/* === CERRAMOS EL MENU CUANDO SELECCIONAMOS UNA SECCION */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('menu')
    // Cuando hacemos clic en cada enlace de navegación, cerramos el menu
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== LE AGREFAMOS COLOR A LAS SECCIONES =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== MOSTRAR EL SCROLL  ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('mostrar-scroll'); else scrollTop.classList.remove('mostrar-scroll')
}
window.addEventListener('scroll', scrollTop)

/* TAMAÑO A4*/
function tamaño_L(){
    document.body.classList.add('tamaño-l')
}

function removeTamaño(){
    document.body.classList.remove('tamaño-l')
}

let areaCv = document.getElementById('area-cv');
let cvBoton = document.getElementById('cv-boton');

let opt = {
    margin: 0,
    filename : 'mycv.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 4},
    jsPDF: {format: 'a4', orientation: 'portrait'}
}

function generarCv(){
    html2pdf(areaCv, opt)
}

cvBoton.addEventListener('click', () =>{
    tamaño_L()
    generarCv()
    setTimeout(removeTamaño, 5000)
})