const toggleBtn = document.querySelector('.toggle-btn')
const rightNav = document.querySelector('.right-nav')

toggleBtn.addEventListener('click', ()=>{
    rightNav.classList.toggle('show-right-nav')
})

const anchorTags = document.querySelectorAll('.nav-ul li a')

let pathName = location.pathname.slice(1)

anchorTags.forEach((anchorTag)=>{
    if(pathName === anchorTag.id){
        anchorTag.classList.add('active')
    }
})
