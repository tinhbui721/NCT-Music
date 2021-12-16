
/*open tab*/
function openTAB(evt, tabname) {
  var i, top100tabcontent, top100tablinks;

  top100tabcontent = document.getElementsByClassName("top100-tabcontent");
  for (i = 0; i < top100tabcontent.length; i++) {
    top100tabcontent[i].style.display = "none";
  }
  top100tablinks = document.getElementsByClassName("top100-tablinks");
  for (i = 0; i < top100tablinks.length; i++) {
    top100tablinks[i].className = top100tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";

  evt.currentTarget.className += " active";		
}

/*Open children tab*/
function openTABchild(evt, tabname) {
  var i, top100childtabscontent, top100childtablinks;

  top100childtabscontent = document.getElementsByClassName("top100-childtabcontent");
  for (i = 0; i < top100childtabscontent.length; i++) {
    top100childtabscontent[i].style.display = "none";
  }
  top100childtablinks = document.getElementsByClassName("top100tab-tablinks");
  for (i = 0; i < top100childtablinks.length; i++) {
    top100childtablinks[i].className = top100childtablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
		
}
/*Get date time*/
function GetTime() {
  const time = new Date();
  var date = document.getElementsByClassName("datetime");
  var i;
  for(i = 0; i < date.length; i++){date[i].innerHTML = time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();}
}
GetTime();

/*showmore button*/
var more = document.querySelectorAll(".fa-ellipsis-v");
for (var i = 0; i < more.length; i++) {
	more[i].addEventListener("click", (e) => {
		let moreSib = e.target.parentElement.nextElementSibling;//selecting main parent of more
		moreSib.classList.toggle("showmre");
	});
}

// Close the dropdown if clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.fa-ellipsis-v')) {
    var openMoreSelect = document.getElementsByClassName("moreoption-content");
    for (var i = 0; i < openMoreSelect.length; i++) {
      if (openMoreSelect[i].classList.contains('showmre')) {
        openMoreSelect[i].classList.remove('showmre');
      }
    }
  }
}

//onload function
window.onload = function(){
	openTAB(event, 'top100-vietnam'); 
	openTABchild(event, 'top100-nhactre');   
};
