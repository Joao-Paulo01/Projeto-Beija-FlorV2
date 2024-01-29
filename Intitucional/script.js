window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 400)
})

window.addEventListener("scroll", function(){
    let header = document.querySelector('#mobile')
    header.classList.toggle('rolagem', window.scrollY > 400)
})


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}