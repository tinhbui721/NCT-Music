
//Dropdown Side Bar
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
} 

//Close-Open Side Bar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
  if (sidebar.classList.toggle("close")){
    document.getElementById("page-content").style.marginLeft = "90px";
    document.getElementById("page-content").style.width = "calc(100% - 490px)";
    document.getElementById("footer").style.width = "calc(100%-490px)";    
  }
  else {
    document.getElementById("page-content").style.marginLeft = "260px";
    document.getElementById("page-content").style.width = "calc(100% - 660px)";    
    document.getElementById("footer").style.width = "calc(100%)";
  }
});


//Modal LoginForm


