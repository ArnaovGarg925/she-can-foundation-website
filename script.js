// Alert Button

function showMessage(){
  alert("Thank you for supporting She Can Foundation!");
}

// Loader

window.addEventListener("load",()=>{
  document.getElementById("loader").style.display="none";
});

// Scroll Progress Bar

window.onscroll = function(){

  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrolled = (winScroll / height) * 100;

  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Top Button

  if(document.documentElement.scrollTop > 300){
    document.getElementById("topBtn").style.display = "block";
  }
  else{
    document.getElementById("topBtn").style.display = "none";
  }

}

// Scroll To Top

document.getElementById("topBtn").addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

// Reveal Animation

function reveal(){

  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      reveals[i].classList.add("active");
    }

  }

}

window.addEventListener("scroll", reveal);
reveal();
