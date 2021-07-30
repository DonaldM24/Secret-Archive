const header = document.querySelector('.header-container')
window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 200){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}