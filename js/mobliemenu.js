var m_link0 = document.querySelector('.m_chinLOGO')
var m_link1 = document.querySelector('#m_link1')
var m_link2 = document.querySelector('#m_link2')
var m_link3 = document.querySelector('#m_link3')
var m_link4 = document.querySelector('#m_link4')
var m_link5 = document.querySelector('#m_link5')

var m_chin0 = document.querySelector('#m_chin0')/*票價*/
var m_chin1 = document.querySelector('#m_chin1')/*banner*/
var m_chin2 = document.querySelector('#m_chin2')/*vip*/
var m_hoot = document.querySelector('#m_hoot')/*空*/
var chin2 = document.querySelector('#chin_2')/*場次*/
var m_chin3 = document.querySelector('#m_chin3')/*標題選擇*/
var m_chin4 = document.querySelector('#m_chin4')/*活動專區*/
var m_chin5 = document.querySelector('#chin_4')/*電影介紹*/
var m_chin6 = document.querySelector('#m_chin6')/*關於親親*/
var m_chin7 = document.querySelector('#m_chin7')/*交通*/

m_link0.addEventListener('click', chin0Hendler)
m_link1.addEventListener('click', chin1Hendler)
m_link2.addEventListener('click', chin2Hendler)
m_link3.addEventListener('click', chin3Hendler)
m_link4.addEventListener('click', chin4Hendler)
m_link5.addEventListener('click', chin5Hendler)

if(document.documentElement.clientWidth >= 375&&document.documentElement.clientWidth <= 415){
    m_chin0.classList.remove('movie_none')
    m_chin1.classList.remove('movie_none')
    m_chin2.classList.remove('movie_none')
    m_chin5.classList.add('movie_none')
    chin_2.classList.add('movie_none')

}


function chin0Hendler() {
    m_chin0.classList.remove('movie_none')
    m_chin7.classList.add('movie_none')
    m_chin6.classList.add('movie_none')
    m_chin5.classList.add('movie_none')
    m_chin4.classList.add('movie_none')
    m_chin3.classList.add('movie_none')
    chin_2.classList.add('movie_none')
}
function chin1Hendler() {
    m_chin0.classList.add('movie_none')
    chin_2.classList.remove('movie_none')
    m_chin3.classList.remove('movie_none')
    m_chin4.classList.add('movie_none')
    m_chin5.classList.add('movie_none')
    m_chin6.classList.add('movie_none')
    m_chin7.classList.add('movie_none')
    
}
function chin2Hendler() {
    m_chin7.classList.add('movie_none')
    m_chin6.classList.add('movie_none')
    m_chin5.classList.add('movie_none')
    m_chin4.classList.remove('movie_none')
    m_chin3.classList.add('movie_none')
    chin_2.classList.add('movie_none')
    m_chin0.classList.add('movie_none')
}
function chin3Hendler() {
    m_chin7.classList.add('movie_none')
    m_chin6.classList.add('movie_none')
    m_chin5.classList.remove('movie_none')
    m_chin4.classList.add('movie_none')
    m_chin3.classList.add('movie_none')
    chin_2.classList.add('movie_none')
    m_chin0.classList.add('movie_none')
}
function chin4Hendler() {
    m_chin7.classList.add('movie_none')
    m_chin6.classList.remove('movie_none')
    m_chin5.classList.add('movie_none')
    m_chin4.classList.add('movie_none')
    m_chin3.classList.add('movie_none')
    chin_2.classList.add('movie_none')
    m_chin0.classList.add('movie_none')
}
function chin5Hendler() {
    m_chin7.classList.remove('movie_none')
    m_chin6.classList.add('movie_none')
    m_chin5.classList.add('movie_none')
    m_chin4.classList.add('movie_none')
    m_chin3.classList.add('movie_none')
    chin_2.classList.add('movie_none')
    m_chin0.classList.add('movie_none')
}

