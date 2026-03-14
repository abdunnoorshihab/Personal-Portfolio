new Typed(".typing",{
strings:[
"Software Engineer",
"Frontend Developer",
"IT Specialist",
"Tech Enthusiast"
],
typeSpeed:60,
backSpeed:40,
loop:true
});

document.getElementById("year").textContent=new Date().getFullYear();

const contactForm=document.getElementById("contactForm");

if(contactForm){
contactForm.addEventListener("submit",function(event){
event.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const subject=document.getElementById("subject").value.trim();
const message=document.getElementById("message").value.trim();

const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
const mailtoLink=`mailto:abdunnoorshihab@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.location.href=mailtoLink;
});
}
