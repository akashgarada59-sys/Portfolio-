// =============================
// Typing Animation
// =============================

const typing = document.getElementById("typing");

const words = [
"Mechanical Engineer",
"Electrical Technician",
"HVAC Technician",
"Fire Protection Learner",
"Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent = currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}

else{

typing.textContent = currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


// =============================
// Scroll Progress Bar
// =============================

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});


// =============================
// Scroll To Top Button
// =============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =============================
// Dark / Light Mode
// =============================

const toggle=document.querySelector(".toggle");

let dark=true;

toggle.addEventListener("click",()=>{

if(dark){

document.body.style.background="#f8fafc";

document.body.style.color="#111";

document.querySelectorAll(".card,.box,.skill,.project-card,.contact-box").forEach(el=>{

el.style.background="#ffffff";

el.style.color="#111";

});

toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

dark=false;

}

else{

document.body.style.background="#0b0f1c";

document.body.style.color="#fff";

document.querySelectorAll(".card,.box,.skill,.project-card,.contact-box").forEach(el=>{

el.style.background="#111827";

el.style.color="#fff";

});

toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

dark=true;

}

});


// =============================
// Navbar Active Link
// =============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =============================
// Fade Animation
// =============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.box,.skill,.project-card,.contact-box").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";

observer.observe(item);

});