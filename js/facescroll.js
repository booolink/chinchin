var totop = document.querySelector('.totop')
var facebook = document.querySelector('.facebook')
var halalogo = document.querySelector('.halalogo')

window.addEventListener('scroll', scroll1)
window.addEventListener('scroll', scroll2)

function scroll1() {
    if (document.documentElement.scrollTop >= 700) {
        totop.classList.remove('movie_none')
    } else {
        totop.classList.add('movie_none')
    }
}
function scroll2() {
    if (document.documentElement.scrollTop >= 2000) {
        facebook.classList.add('movie_none')
        halalogo.classList.add('movie_none')
    } else {
        facebook.classList.remove('movie_none')
        halalogo.classList.remove('movie_none')
    }
}

