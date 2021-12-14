
//animation for slideshow pri
var slideIndex = 0;
var bnt_click = false;
var slideIndex_behind = 0;
var slideIndex_next = 0;
var stop = false;

showSlides_behind();
showSlides_next();
showSlides();
showSlides_bnt(slideIndex);

function back(n) {
    stop = true;
    showSlides_bnt(slideIndex += n, slideIndex_behind += n, slideIndex_next += n );
    setTimeout(() => {
        stop = false;
    }, 5000);
}

function showSlides_bnt(n, m, k) {
    
    var i;
    var x = document.getElementsByClassName("my_slide");
    var dots = document.getElementsByClassName("shape");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" changeshape", "");
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " changeshape";

    //for behind
    var j;
    var y = document.getElementsByClassName("my_slide_behind");
    if (m > y.length) {slideIndex_behind = 1}
    if (m < 1) {slideIndex_behind = y.length}
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";  
    }
    y[slideIndex_behind-1].style.display = "block";  

     //for next
     var z;
     var a = document.getElementsByClassName("my_slide_next");
     if (k > a.length) {slideIndex_next = 1}
     if (k < 1) {slideIndex_next = a.length}
     for (z = 0; z < a.length; z++) {
         a[z].style.display = "none";  
     }
     a[slideIndex_next-1].style.display = "block"; 

}

function showSlides() {
    if(stop == false){
        var i;
        var slides = document.getElementsByClassName("my_slide");
        var dots = document.getElementsByClassName("shape");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" changeshape", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " changeshape";
    }
    
    setTimeout(showSlides, 3000);
}


function showButton(){
    var bnt = document.getElementsByClassName("bnt_slideshow");
    bnt[0].style.display = "block";
    bnt[1].style.display = "block";
}
function hideButton(){
    var bnt = document.getElementsByClassName("bnt_slideshow");
    bnt[0].style.display = "none";
    bnt[1].style.display = "none";
}

//animation for slideshow behind
function showSlides_behind() {
    if(stop == false){
        var i;
        var slides = document.getElementsByClassName("my_slide_behind");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex_behind++;
        if (slideIndex_behind > slides.length) {slideIndex_behind = 1}    
        slides[slideIndex_behind-1].style.display = "block";
    }
      
    setTimeout(showSlides_behind, 3000);
}

//animation for slideshow next
function showSlides_next() {
    if(stop == false){
        var i;
        var slides = document.getElementsByClassName("my_slide_next");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex_next++;
        if (slideIndex_next > slides.length) {slideIndex_next = 1}    
        slides[slideIndex_next-1].style.display = "block";  
    }
    setTimeout(showSlides_next, 3000);
}


function nghidenmatuc(){
    document.getElementById('image_new').src = './images/nghimatuc.jpg';
    document.getElementById('TenBaiHat').innerText = 'Nghĩ đến mà tức';
    document.getElementById('TenCaSi').innerText = 'Phạm Hồng Phước';
    document.getElementById('circle_image').src = './images/phamhongphuoc.jpg';
}


function coaikhiyeu(){
    document.getElementById('image_new').src = './images/coaikhiyeu.jpg';
    document.getElementById('TenBaiHat').innerText = 'Có ai khi yêu';
    document.getElementById('TenCaSi').innerText = 'Kiều Phạm';
    document.getElementById('circle_image').src = './images/kieupham.jpg';
}

function nhumoihomqua(){
    document.getElementById('image_new').src = './images/nhumoihomqua.jpg';
    document.getElementById('TenBaiHat').innerText = 'Như mới hôm qua';
    document.getElementById('TenCaSi').innerText = 'Gemini Band';
    document.getElementById('circle_image').src = './images/GeminiBand.jpg';
}

function iamdiva(){
    document.getElementById('image_new').src = './images/iamdiva.jpg';
    document.getElementById('TenBaiHat').innerText = 'I am DIVA';
    document.getElementById('TenCaSi').innerText = 'Thu Minh';
    document.getElementById('circle_image').src = './images/thuminh.jpg';
}

function dunggoianhlacontrai(){
    document.getElementById('image_new').src = './images/damvinhhung.jpg';
    document.getElementById('TenBaiHat').innerText = 'Đừng gọi anh là con trai';
    document.getElementById('TenCaSi').innerText = 'Đàm Vĩnh Hưng';
    document.getElementById('circle_image').src = './images/damvinhhung_1.jpg';
}

document.getElementById('next').onclick = function(){
    document.getElementById('replace_img1').src = './images/rapviet_1.jpg';
    document.getElementById('replace_name1').innerText = 'Rap Việt Season 2 - Tập 1';

    document.getElementById('replace_img2').src = './images/rapviet_1.jpg';
    document.getElementById('replace_name2').innerText = 'Rap Việt Season 2 - Tập 2';

    document.getElementById('replace_img3').src = './images/rapviet_1.jpg';
    document.getElementById('replace_name3').innerText = 'Rap Việt Season 2 - Tập 3';

    document.getElementById('replace_img4').src = './images/rapviet_1.jpg';
    document.getElementById('replace_name4').innerText = 'Rap Việt Season 2 - Tập 4';

    document.getElementById('next').style.color = '#757B83';
    document.getElementById('back').style.color = '#c0c7d1';
}

document.getElementById('back').onclick = function(){
    document.getElementById('replace_img1').src = './images/NangTho.jpg';
    document.getElementById('replace_name1').innerText = 'Nàng Thơ K-POP';

    document.getElementById('replace_img2').src = './images/TopSong.jpg';
    document.getElementById('replace_name2').innerText = 'Những bài nhạc BTS hay';

    document.getElementById('replace_img3').src = './images/ToDay.jpg';
    document.getElementById('replace_name3').innerText = "US-UK Today's Top Hits";

    document.getElementById('replace_img4').src = './images/Release.jpg';
    document.getElementById('replace_name4').innerText = 'Nhạc mới nhất 2021';

    document.getElementById('next').style.color = '#c0c7d1';
    document.getElementById('back').style.color = '#757B83';
}

document.getElementById('next2').onclick = function(){
    document.getElementById('replace_img5').src = './images/bolero_1.jpg';
    document.getElementById('replace_name5').innerText = 'Mây nhịp cầu tre';

    document.getElementById('replace_img6').src = './images/bolero_2.jpg';
    document.getElementById('replace_name6').innerText = 'Yêu bolero';

    document.getElementById('replace_img7').src = './images/bolero_3.jpg';
    document.getElementById('replace_name7').innerText = 'Bolero';

    document.getElementById('replace_img8').src = './images/bolero_4.jpg';
    document.getElementById('replace_name8').innerText = 'Nhịp thở';

    document.getElementById('next2').style.color = '#757B83';
    document.getElementById('back2').style.color = '#c0c7d1';
}

document.getElementById('back2').onclick = function(){
    document.getElementById('replace_img5').src = './images/ThuDoThi.jpg';
    document.getElementById('replace_name5').innerText = 'Thư Đô Thị';

    document.getElementById('replace_img6').src = './images/TruTinh.jpg';
    document.getElementById('replace_name6').innerText = 'Nhạc Hải Ngoại';

    document.getElementById('replace_img7').src = './images/TuyenChon.jpg';
    document.getElementById('replace_name7').innerText = 'Tuyệt Phẩm Bolero';

    document.getElementById('replace_img8').src = './images/ThuDoThi.jpg';
    document.getElementById('replace_name8').innerText = 'Chuyến Đò Không Em';

    document.getElementById('next2').style.color = '#c0c7d1';
    document.getElementById('back2').style.color = '#757B83';
}

document.getElementById('next3').onclick = function(){
    document.getElementById('replace_img9').src = './images/khauvi_1.jpg';
    document.getElementById('replace_name9').innerText = 'Perfect Xmas Bop';

    document.getElementById('replace_img10').src = './images/khauvi_2.jpg';
    document.getElementById('replace_name10').innerText = 'I all want for Christmas';

    document.getElementById('replace_img11').src = './images/khauvi_3.jpg';
    document.getElementById('replace_name11').innerText = 'Cool kids Christmas party';

    document.getElementById('replace_img12').src = './images/khauvi_4.jpg';
    document.getElementById('replace_name12').innerText = 'Forgotten Christmas';

    document.getElementById('next3').style.color = '#757B83';
    document.getElementById('back3').style.color = '#c0c7d1';
}

document.getElementById('back3').onclick = function(){
    document.getElementById('replace_img9').src = './images/Keo.jpg';
    document.getElementById('replace_name9').innerText = 'K-Candy';

    document.getElementById('replace_img10').src = './images/Jam.jpg';
    document.getElementById('replace_name10').innerText = 'J-Jams';

    document.getElementById('replace_img11').src = './images/Pop.jpg';
    document.getElementById('replace_name11').innerText = 'Power Pop';

    document.getElementById('replace_img12').src = './images/Pizza.jpg';
    document.getElementById('replace_name12').innerText = 'V-Pop Pizza';

    document.getElementById('next3').style.color = '#c0c7d1';
    document.getElementById('back3').style.color = '#757B83';
}


document.getElementById('next4').onclick = function(){
    document.getElementById('replace_img13').src = './images/top100_5.jpg';
    document.getElementById('replace_img14').src = './images/top100_6.jpg';
    document.getElementById('replace_img15').src = './images/top100_7.jpg';
    document.getElementById('replace_img16').src = './images/top100_8.jpg';

    document.getElementById('next4').style.color = '#757B83';
    document.getElementById('back4').style.color = '#c0c7d1';
}

document.getElementById('back4').onclick = function(){
    document.getElementById('replace_img13').src = './images/top100_1.jpg';
    document.getElementById('replace_img14').src = './images/top100_2.jpg';
    document.getElementById('replace_img15').src = './images/top100_3.jpg';
    document.getElementById('replace_img16').src = './images/top100_4.jpg';

    document.getElementById('next4').style.color = '#c0c7d1';
    document.getElementById('back4').style.color = '#757B83';
}


function aino(){

    document.getElementById('tenbaihat_vn').innerText = 'Ai nộ';
    document.getElementById('tencasi_vn').innerText = 'Masew, Khôi Vũ';
    document.getElementById('rank_vn').innerText = '#2';
}

function cauhuachuaventron(){

    document.getElementById('tenbaihat_vn').innerText = 'Câu hứa chưa vẹn tròn';
    document.getElementById('tencasi_vn').innerText = 'Phát Huy T4';
    document.getElementById('rank_vn').innerText = '#3';
}
function buocquanhau(){

    document.getElementById('tenbaihat_vn').innerText = 'Bước qua nhau';
    document.getElementById('tencasi_vn').innerText = 'Vũ';
    document.getElementById('rank_vn').innerText = '#1';
}



function stay(){

    document.getElementById('tenbaihat_AM').innerText = 'Stay';
    document.getElementById('tencasi_AM').innerText = 'The Kid LAOROI';
    document.getElementById('rank_AM').innerText = '#1';
}

function thunder(){

    document.getElementById('tenbaihat_AM').innerText = 'Thunder';
    document.getElementById('tencasi_AM').innerText = 'Gabbty Ponte';
    document.getElementById('rank_AM').innerText = '#2';
}
function easyonme(){

    document.getElementById('tenbaihat_AM').innerText = 'Easy on me';
    document.getElementById('tencasi_AM').innerText = 'Adele';
    document.getElementById('rank_AM').innerText = '#3';
}


function money(){

    document.getElementById('tenbaihat_HQ').innerText = 'Money';
    document.getElementById('tencasi_HQ').innerText = 'Lisa';
    document.getElementById('rank_HQ').innerText = '#1';
}

function only(){

    document.getElementById('tenbaihat_HQ').innerText = 'Only';
    document.getElementById('tencasi_HQ').innerText = 'Lee Hi';
    document.getElementById('rank_HQ').innerText = '#2';
}
function lalisa(){

    document.getElementById('tenbaihat_HQ').innerText = 'Lalisa';
    document.getElementById('tencasi_HQ').innerText = 'Lisa';
    document.getElementById('rank_HQ').innerText = '#3';
}