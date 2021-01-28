const menu_btn = document.querySelector("#menu-btn")
const header =document.querySelector('.header')
const overlay = document.querySelector('.overlay')

menu_btn.addEventListener('click',()=>{
    console.log('click')
    
    if(header.classList.contains('open-menu')){
        // close menu
        header.classList.remove('open-menu')
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else{
        // open menu
        header.classList.add('open-menu')
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})

