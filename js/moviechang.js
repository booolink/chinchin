var chin2_ch1 = document.querySelector('#chin2_text1')
var movie_all1 = document.querySelector('.movie_all1')
// var chin2_ch2 = document.querySelector('#chin2_text2')
var movie_all2 = document.querySelector('.movie_all2')

chin2_ch1.addEventListener('click', ch1Handler)
// chin2_ch2.addEventListener('click', ch2Handler)

function ch1Handler() {
    if (movie_all1.classList.display = 'movie_none') {
        movie_all1.classList.remove('movie_none')
        movie_all2.classList.add('movie_none')
        chin2_ch1.classList.add('movietxtcolor')
        // chin2_ch2.classList.remove('movietxtcolor')
       
    }
}
function ch2Handler() {
    if (movie_all2.classList.display = 'movie_none') {
        movie_all2.classList.remove('movie_none')
        movie_all1.classList.add('movie_none')
        chin2_ch1.classList.remove('movietxtcolor')
        // chin2_ch2.classList.add('movietxtcolor')
      
    }
}