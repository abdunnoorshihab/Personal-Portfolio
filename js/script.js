AOS.init({
duration:900,
once:true
});

document.getElementById("year").textContent=new Date().getFullYear();

new Typed(".typing",{
strings:[
"Frontend Developer",
"IT Specialist",
"Web Designer",
"Problem Solver"
],
typeSpeed:60,
backSpeed:40,
loop:true
});

particlesJS("particles-js",{
particles:{
number:{value:60},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});

window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.querySelector(".progress-bar").style.width=progress+"%";

});
