//XỬ lý logo
var colo = ["#0daded", "blue", "red", "dark", "white", "green", "pink", "orange"];
var currentColo = 0;
var lix = document.getElementById("logo-NCT-gt");

function changeBorderColor() {
  --currentColo;
  if (currentColo < 0) currentColo = colo.length - 1;
  for (var i = 0; i < 8; i++) {
    lix.style.border = colo[(currentColo + i) % colo.length] + " 1px solid";
    lix.parentElement.style.backgroundColor = colo[(currentColo + i) % colo.length];
  }
}

setInterval(changeBorderColor, 500);

//Xử lý text đổi màu
var colors = ["blue", "yellow", "red", "black", "white", "green", "pink", "orange"];
var currentColor = 0;
var lis = document.querySelectorAll(".description p");

function changeColor() {
  --currentColor;
  if (currentColor < 0) currentColor = colors.length -1;;
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}

setInterval(changeColor, 500);

// if hover -> display txt
function displayTxt(evt) {
    evt.currentTarget.parentNode.querySelector( '.achieveinfo' ).classList.remove( 'hide' );
    evt.currentTarget.parentNode.querySelector( '.achieveinfo' ).style.color = "yellow"
}
// if leave -> hide txt
function removeTxt(evt) {
    evt.currentTarget.parentNode.querySelector( '.achieveinfo' ).classList.add( 'hide' );
}

/* mouseover and mouseout events to `.wrapper` element */
var wrapper = document.querySelector('.design-member1');
wrapper.addEventListener( 'mouseover', displayTxt );
wrapper.addEventListener( 'mouseout', removeTxt );
var wrapper = document.querySelector('.design-member2');
wrapper.addEventListener( 'mouseover', displayTxt );
wrapper.addEventListener( 'mouseout', removeTxt );


//Xử lý form liên hệ
function PrintNotification() {
    document.getElementById("lblnotif").innerHTML = "<p>Bạn đã gửi phản hồi cho chúng tôi, xin cảm ơn!!!</p>";
}

function ValidControl(control, message) {
    if (control.value == "" || control.value == null){
        alert(message);
        control.focus();
        return false;
    }
    return true;
}
function ValidForm() {
    var kq = ValidControl(hotenph, "Bạn chưa nhập Họ và Tên!");
    if (kq == true) kq = ValidControl(sdt, "Bạn chưa nhập Điện Thoại!");
    if (kq == true) kq = ValidControl(email, "Bạn chưa nhập Email!");
    if (kq == true) kq = ValidControl(address, "Bạn chưa nhập Địa Chỉ!");
    if (kq == true) 
    //Submit form
    //return true
    //In thông báo đăng ký thành công
    PrintNotification();
}


