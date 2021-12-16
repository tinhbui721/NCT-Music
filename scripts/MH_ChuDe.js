var _slideIndex = 1;
showSlidess(_slideIndex);
setInterval(function(){ showSlidess(++_slideIndex); }, 2500);

function plusSlides(n) {
  showSlidess(_slideIndex += n);
}
/**/
function currentSlide(n) {
  showSlidess(_slideIndex = n);
}

function showSlidess(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var circles = document.getElementsByClassName("circle");
  if (n > slides.length) {_slideIndex = 1}    
  if (n < 1) {_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[_slideIndex-1].style.display = "block";  
  circles[_slideIndex-1].className += " active";
}


//Render Image
const playlistss = [
	{id: 1, image: "images/merrychrismas.png", title: "Top NCT choice"},
	{id: 2, image: "images/tophit2021.jpg", title: "Top ALL STARS"},
	{id: 3, image: "images/workhome.jpg", title: "Top INDIE bình chọn"},
	{id: 4, image: "images/stayhome.jpg", title: "Top ACOUSTIC Hot"},
	{id: 5, image: "images/nhachan.jpg", title: "Top V-RAP"},
	{id: 6, image: "images/nhachoa.jpg", title: "Top V-POP"},
	{id: 7, image: "images/nhacnhat.jpg", title: "Top TRỮ TÌNH BOLERO"},
	{id: 8, image: "images/nhacdong.jpg", title: "Top NHẠC PHIM"},
	{id: 9, image: "images/tuyentap1.jpg", title: "Top NHẠC BOLERO"},
	{id: 10, image: "images/tuyentap2.jpg", title: "Top CHINESE SOUNDTRACKS"},
	{id: 11, image: "images/tuyentap3.jpg", title: "Top CPOP BEST VALUE"},
	{id: 12, image: "images/tuyentap4.jpg", title: "Top NHẠC ACOUSTIC US-UK"},
	{id: 13, image: "images/tuyentap5.jpg", title: "Top NHẠC COUNTRY"},
	{id: 14, image: "images/tuyentap6.jpg", title: "Top NHẠC FUTURE"},
	{id: 15, image: "images/tuyentap7.jpg", title: "Top NHẠC HOOLIGANS"},
	{id: 16, image: "images/tuyentap8.jpg", title: "Top NHẠC YÊU THÍCH THÁNG 11"},
	{id: 17, image: "images/tuyentap9.jpg", title: "NHẠC SĨ PHÚ QUANG"},
	{id: 18, image: "images/tuyentap10.jpg", title: "Top KPOP THÁNG 12/2021"},
	{id: 19, image: "images/tuyentap19.jpg", title: "Top ACOUSTIC Hot"},	
	{id: 20, image: "images/tuyentap18.jpg", title: "Top TRỮ TÌNH BOLERO"},
	{id: 21, image: "images/tuyentap11.jpg", title: "Top NHẠC GIÁNG SINH"},
	{id: 22, image: "images/tuyentap12.jpg", title: "Top INDIE GIÁNG SINH"},
	{id: 23, image: "images/tuyentap13.jpg", title: "Top HOT REMIX THÁNG 12"},
	{id: 24, image: "images/tuyentap14.jpg", title: "Top NHẠC GIÁNG SINH BUỒN"},
	{id: 25, image: "images/nhacdong.jpg", title: "Top NHẠC MÙA ĐÔNG"},
	{id: 26, image: "images/nhachan.jpg", title: "Top NHẠC HÀN"},
	{id: 27, image: "images/tuyentap15.jpg", title: "Top NHẠC ĐÊM KHUYA"},
	{id: 28, image: "images/tuyentap16.jpg", title: "Top NHẠC MIỄN PHÍ"},
	{id: 29, image: "images/tuyentap17.jpg", title: "Top NHẠC V-POP THÁNG 12"},
	{id: 30, image: "images/nhacdong.jpg", title: "Top NHẠC MÙA ĐÔNG"},
	{id: 31, image: "images/tuyentap18.jpg", title: "Top BEST DANCE SONGS"},
	{id: 32, image: "images/tuyentap19.jpg", title: "Top NHẠC CHO NGƯỜI CÔ ĐƠN"},
	{id: 33, image: "images/tuyentap20.jpg", title: "Top NHẠC RAP VIỆT"},
	{id: 34, image: "images/tuyentap17.jpg", title: "Top NHẠC MÙA ĐÔNG"},
	{id: 35, image: "images/tuyentap3.jpg", title: "Top NHẠC C-POP"},
	{id: 36, image: "images/tuyentap14.jpg", title: "Top NHẠC ACOUSTIC US-UK"},
	{id: 37, image: "images/tuyentap2.jpg", title: "Top THE BEST 2021"},
	{id: 38, image: "images/tuyentap16.jpg", title: "Top NHẠC FUTURE"},
	{id: 39, image: "images/tuyentap6.jpg", title: "Top NHẠC FUTURE"},
	{id: 40, image: "images/tuyentap20.jpg", title: "Top NHẠC FUTURE"},
	{id: 41, image: "images/tuyentap7.jpg", title: "Top NHẠC FUTURE"},
	{id: 42, image: "images/tuyentap9.jpg", title: "Top NHẠC FUTURE"},
	{id: 43, image: "images/tuyentap11.jpg", title: "Top NHẠC FUTURE"},
	{id: 44, image: "images/tuyentap18.jpg", title: "Top NHẠC FUTURE"},
]


function RenderImageTopic(){
	var html = '';
	const content = playlistss.map((item, index) => {
			html += '<div class="grid-bound zoom_img">';
			/*html += '<div class="layer1"></div><div class="layer2"></div>';*/
			html += '<a href="#">';
			html += '<img src=' + item.image + ' alt="1">';
			html += '<div class="for_hover"><i class="fas fa-ellipsis-v"></i><button class="play"><i class="fas fa-play"></i></button></div>';
			html += '</a>';
			html += '</div>';	
			return html;
	})
	document.getElementById("grid-container").innerHTML = html; 	
}
RenderImageTopic();