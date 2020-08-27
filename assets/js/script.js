

// start when the whole document is loaded

window.addEventListener('DOMContentLoaded',()=>{
    // Initialize varables

let navigation,nav_links,typed,hamburger;


setTimeout(()=>{
    document.getElementById('loader').style.display="none"
},2000)

//Typed js

typed= new Typed('.type',{
    strings:['Eatery', 'Cafe','Resturant'],
    typeSpeed:100,
    backSpeed: 60,
    loop:true
});
if(window.innerWidth > 845){
    //add styles to nav onscroll

function scrollFunction(){
  
    
    if(window.innerWidth > 845 && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    
    //   style nav when window scroll is greater than 80
    
       let navBar= document.querySelector('nav')
       let navLogo= document.querySelector('.navigation .logo')
       navLogo.style.fontSize="20px"
       let Links= document.querySelectorAll('.nav-links li a');
      Links.forEach(link=>{
       link.style.color="var(--dark)"
    })
       let bars= document.querySelectorAll('.hamburger div')
        bars.forEach(bar=>{
            bar.style.background="var(--dark)"
        })
        navLogo.style.color="var(--dark)"
       navBar.style.background="var(--white)"
       navBar.style.boxShadow="0px 0px 20px var(--dark)"
       let call= document.querySelector('.navigation .callUs')
       call.style.color="var(--dark)"
    }
    else{ 
        let navBar= document.querySelector('nav')
        let navLogo= document.querySelector('.navigation .logo')
        navLogo.style.fontSize="25px"
        navLogo.style.color="var(--white)"
        navBar.style.background="transparent"
        navBar.style.boxShadow="0px 0px 20px transparent"
        let bars= document.querySelectorAll('.hamburger div')
        bars.forEach(bar=>{
            bar.style.background="var(--white)"
        })
        let Links= document.querySelectorAll('.nav-links li a');
        Links.forEach(link=>{
         link.style.color="var(--white)"
      })
      let call= document.querySelector('.navigation .callUs')
       call.style.color="var(--white)"
   
    }
}



window.onscroll=()=>{
scrollFunction()
}

}






/* ----------------------------
-------------------------------
Custom nav toggle
-----------------------------
------------------------
*/

hamburger=document.querySelector('.hamburger');
nav_links=document.querySelector('.nav-links')
links=document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click',()=>{
nav_links.classList.toggle('nav_active');
for(let link of links){
    link.style.opacity="1"
}
})

links.forEach(lin=>{
    lin.addEventListener('click',()=>{
        nav_links.classList.toggle('nav_active')
    })
})




})



/* ---------------
--------
Slider
-------
-----------*/



let slideIndex=0;
showSlides(slideIndex);


function Slider(n){
    showSlides(slideIndex +=n)
}

function showSlides(n){
    let i;
    let slides=document.querySelectorAll(".banner-slide");
    if(n > slides.length){slideIndex=1}
    if(n < 1){slideIndex = slides.length}

    for(i=0; i<slides.length; i++){
        slides[i].style.display="none" ;
        slides[slideIndex-1].style.display="block"
    }
}



function openModal(){
    document.querySelector('#modal').style.display="block"
    document.querySelector('#overlay').style.display="block"
}


function closeModal(){
    document.querySelector('#modal').style.display="none"
    document.querySelector('#overlay').style.display="none"
}

slideIndex=0;
showModalSlide(slideIndex);
function curentSlide(n){
    showModalSlide(slideIndex = n)
}

function plusModalSlide(n){
    showModalSlide(slideIndex +=n)
}

function showModalSlide(n){
    let i=0;
    let modalslide=document.querySelectorAll('.modalSlide');
    let dots=document.querySelectorAll('.dots div');
    if(n > modalslide.length){slideIndex=1}
    if(n < 1){slideIndex=modalslide.length}
    for(i=0;i< modalslide.length;i++){
        modalslide[i].style.display="none"
    }
    for(i=0;i< dots.length;i++){
        dots[i].className=
        dots[i].className.replace('active','')
    }
    modalslide[slideIndex-1].style.display="block"
    dots[slideIndex-1].className +=" active"
}




// tesimonial


function TSlider(n){
    showtesimonials(slideIndex +=n)
}

function showtesimonials(n){
    let i;
    let slides=document.querySelectorAll(".TSlide");
    if(n > slides.length){slideIndex=1}
    if(n < 1){slideIndex = slides.length}

    for(i=0; i<slides.length; i++){
        slides[i].style.display="none" ;
        slides[slideIndex-1].style.display="block"
    }
}



document.getElementById('year').innerHTML=new Date().getFullYear()





// SMOOTH SCROLL

let scroll=new SmoothScroll('a[href*="#"]')
