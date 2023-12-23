// Navbar
let navBar = document.querySelector('nav')
let links = document.querySelectorAll('nav a')
links.forEach(link =>{
    link.addEventListener('click', ()=>{
        let active = document.querySelector('.active')
        active?.classList.remove('active')
        link.classList.add('active')
    })
})

// 