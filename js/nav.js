// JavaScript File
let icon= document.getElementById("icon");
let nav= document.getElementById("myNavbar");

icon.addEventListener("click",() =>{
  if (!nav.classList.contains("responsive")){
    nav.classList.add("responsive");
  } else{
    nav.classList.remove("responsive");
  }

});