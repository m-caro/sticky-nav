const navBar = document.getElementById('main');
const topNav = navBar.offsetTop;

function fixNav() {
    if(window.scrollY >= topNav) {
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', fixNav);