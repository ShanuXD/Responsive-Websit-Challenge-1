const menu_btn = document.querySelector("#menu-btn")
const header =document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

menu_btn.addEventListener('click',()=>{
    console.log('click')
    
    if(header.classList.contains('open-menu')){
        // close menu
        body.classList.remove('noscroll')
        header.classList.remove('open-menu')
        fadeElems.forEach((element)=>{
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        
    }
    else{
        // open menu
        body.classList.add('noscroll')
        header.classList.add('open-menu')
        fadeElems.forEach((element)=>{
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

        
    }
})

