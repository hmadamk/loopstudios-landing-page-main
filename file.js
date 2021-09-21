document.querySelector('.cont').onclick = function () {
    document.querySelector('header ul').classList.add('show')
}
document.querySelector('.close').onclick = function () {
    document.querySelector('header ul').classList.remove('show')
}