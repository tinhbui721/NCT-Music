//Render PlaylistImage
const playlists = [
	{id: 1, image: "images/tuyentap6.jpg", title: "Top NCT choice"},
	{id: 2, image: "images/tuyentap5.jpg", title: "Top ALL STARS"},
	{id: 3, image: "images/tuyentap4.jpg", title: "Top INDIE bình chọn"},
	{id: 4, image: "images/tuyentap3.jpg", title: "Top ACOUSTIC Hot"},
	{id: 5, image: "images/tuyentap20.jpg", title: "Top V-RAP"},
	{id: 6, image: "images/tuyentap19.jpg", title: "Top V-POP"},
	{id: 7, image: "images/tuyentap18.jpg", title: "Top TRỮ TÌNH BOLERO"},
	{id: 8, image: "images/tuyentap17.jpg", title: "Top NHẠC PHIM"},
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
	{id: 29, image: "images/nhacdong.jpg", title: "Top NHẠC V-POP THÁNG 12"},
	{id: 30, image: "images/nhacdong.jpg", title: "Top NHẠC MÙA ĐÔNG"},
	{id: 31, image: "images/nhacnhat.jpg", title: "Top BEST DANCE SONGS"},
	{id: 32, image: "images/nhachoa.jpg", title: "Top NHẠC CHO NGƯỜI CÔ ĐƠN"},
	{id: 33, image: "images/nhachan.jpg", title: "Top NHẠC RAP VIỆT"},
	{id: 34, image: "images/nhacdong.jpg", title: "Top NHẠC MÙA ĐÔNG"},
	{id: 35, image: "images/stayhome.jpg", title: "Top NHẠC C-POP"},
	{id: 36, image: "images/workhome.jpg", title: "Top NHẠC ACOUSTIC US-UK"},
	{id: 37, image: "images/tophit2021.jpg", title: "Top THE BEST 2021"},
	{id: 38, image: "images/merrychrismas.png", title: "Top NHẠC FUTURE"},
	
]
// Pagination Working
let perPage = 16;
let currentpage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(playlists.length/perPage);
const btnNextPage = document.querySelector('.btn-nextpage'); 
const btnPrevPage = document.querySelector('.btn-prevpage'); 

function getCurrentPage(currentpage){
	start = (currentpage - 1)*perPage;
	end = currentpage * perPage;
}
function RenderImagePlaylist(){
	var html = '';
	const content = playlists.map((item, index) => {
		if (index >= start && index < end){
			html += '<div class="tuyentap-gridbound zoom_img">';
			html += '<div class="layer1"></div><div class="layer2"></div>';
			html += '<a href="#">';
			html += '<img src=' + item.image + ' alt="1">';
			html += '<div class="for_hover"><i class="fas fa-ellipsis-v"></i><button class="play"><i class="fas fa-play"></i></button></div>';
			html += '</a>';
			html += '<p>' + item.title + '</p>';
			html += '</div>';	
			return html;
		}
	})
	document.getElementById('tuyentap-grid').innerHTML = html; 	
}
RenderImagePlaylist();
/*
function RenderListPage(){
	let html = '';
	html += `<li class="activelist"><a>${1}</a></li>`;
	for(let i = 2; i <= totalPages; i++){
		html += `<li><a>${i}</a></li>`
	}
	document.getElementById('pagination').innerHTML = html;
}
RenderListPage();*/
function ChangePage(){
	const currentPages = document.querySelectorAll('.pagination li');
	for(let i=0;i<currentPages.length;i++){
		currentPages[i].addEventListener("click", ()=>{
			let value = i + 1;
			currentpage = value;
			getCurrentPage(currentpage);
 		})
	}
}
ChangePage();	

btnNextPage.addEventListener("click", ()=>{
	currentpage++; 
	if (totalPages > totalPages) {
		currentpage = totalPages;
	}
	/*if (currentpage === totalPages){
	     document.getElementsByClassName("btn-nextpage").className = document.getElementsByClassName("btn-nextpage").className.replace(" btn-active", " btn-active");
	}
	document.getElementsByClassName("btn-prevpage").className = document.getElementsByClassName("btn-prevpage").className.replace(" btn-active", "");*/
	getCurrentPage(currentpage);
	RenderImagePlaylist();

})
btnPrevPage.addEventListener("click", ()=>{
	currentpage--; 
	if (currentpage <= 1) {
		currentpage = 1;
	}
	/*if (currentpage === 1){
     document.getElementsByClassName("btn-prevpage").className = document.getElementsByClassName("btn-prevpage").className.replace(" btn-active", " btn-active");
	}
	document.getElementsByClassName("btn-nextpage").className = document.getElementsByClassName("btn-nextpage").className.replace(" btn-active", "");*/
	getCurrentPage(currentpage);	
	RenderImagePlaylist();

})

/*Pagination Another
var Pagination = {
    code: '',
    // --------------------
    // Sử dụng
    // --------------------

    // Khởi tạo giá trị page number
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // thêm trang bởi số trang (từ trang [s] tới [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // thêm trang cuối ngăn cách bới ...
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // thêm trang đầu ngăn cách bới ...
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },

    // --------------------
    // Xử lý
    // --------------------

    // Đổi trang
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // Trang trước
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // Trang sau
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },
    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },

    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // Tạo dấu chuyển lùi/tới trang
    Create: function(e) {
        var html = [
            '<a>&#8249;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#8250;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



//Initialization

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size: 100, // pages size
        page: 1,  // selected page
        step: 2   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);

*/