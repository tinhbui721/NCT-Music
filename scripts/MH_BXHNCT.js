/*open tab*/
function openTAB1(evt, tabname) {
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
function openTABchild1(evt, tabname) {
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
    for (i = 0; i < date.length; i++) {
        date[i].innerHTML = time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();
    }
}
GetTime();

/*showmore button*/
var mores = document.querySelectorAll(".fa-ellipsis-v");
for (var i = 0; i < mores.length; i++) {
    mores[i].addEventListener("click", (e) => {
        let moreSibs = e.target.parentElement.nextElementSibling; //selecting main parent of more
        moreSibs.classList.toggle("showmre");
    });
}

// Close the dropdown if clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.fa-ellipsis-v')) {
        var openMoreSelects = document.getElementsByClassName("moreoption-content");
        for (var i = 0; i < openMoreSelects.length; i++) {
            if (openMoreSelects[i].classList.contains('showmre')) {
                openMoreSelects[i].classList.remove('showmre');
            }
        }
    }
}
window.onload = function () {
    openTAB1(event, 'bxh-tuan');
    openTABchild1(event, 'bxh-vn');
};


//Render Image
const top100 = [{
        id: 1,
        image: "images/pos1_top100list.jpg",
        title: "Đế Vương",
        singer: "Đình Dũng, ACV"
    },
    {
        id: 2,
        image: "images/pos2_top100list.jpg",
        title: "Bước Qua Nhau",
        singer: "Vũ"
    },
    {
        id: 3,
        image: "images/pos3_top100list.jpg",
        title: "Chuyện Tình Facebook",
        singer: "Thiên Vân"
    },
    {
        id: 4,
        image: "images/pos4_top100list.jpg",
        title: "Ái Nộ",
        singer: "Masew"
    },
    {
        id: 5,
        image: "images/pos5_top100list.jpg",
        title: "Người Thương Em Cả Đời Xua Đuổi",
        singer: "Như Việt"
    },
    {
        id: 6,
        image: "images/baihat_1.jpg",
        title: "Yêu Đậm Sâu Có Chắc Bền Lâu",
        singer: "Thiên Vũ"
    },
    {
        id: 7,
        image: "images/baihat_2.jpg",
        title: "Cánh Hồng Mỏng Manh",
        singer: "Bình"
    },
    {
        id: 8,
        image: "images/baihat_3.jpg",
        title: "Chắc Là Yêu Đấy",
        singer: "Thu Thảo"
    },
    {
        id: 9,
        image: "images/baihat_4.jpg",
        title: "Where You At",
        singer: "Danish Nguyễn"
    },
    {
        id: 10,
        image: "images/baihat_5.jpg",
        title: "Liệu Mình Còn Thương Nhau",
        singer: "SONN ft. NA"
    },
    {
        id: 11,
        image: "images/baihat_11.jpg",
        title: "Ánh Trăng Sáng",
        singer: "Mèo Nhỏ"
    },
    {
        id: 12,
        image: "images/baihat_12.jpg",
        title: "Yêu Thương Đậm Sâu",
        singer: "Bee Trần"
    },
    {
        id: 13,
        image: "images/baihat_13.jpg",
        title: "Mãi Mãi Bên Nhau",
        singer: "Khởi My"
    },
    {
        id: 14,
        image: "images/baihat_14.jpg",
        title: "Sang Giàu Vì Đâu",
        singer: "NA"
    },
    {
        id: 15,
        image: "images/baihat_15.jpg",
        title: "Buồn",
        singer: "Vi Hạ"
    },
    /*{id: 16, image: "images/tuyentap8.jpg", title: "Top NHẠC YÊU THÍCH THÁNG 11"},
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
    {id: 44, image: "images/tuyentap18.jpg", title: "Top NHẠC FUTURE"},*/
]

function RenderTop100() {
    var html = '';
    const content = top100.map((item, index) => {
        html += '<div class="toplistitem">';
        /*html += '<div class="layer1"></div><div class="layer2"></div>';*/
        html += '<span class="stt">' + item.id + '</span>';
        html += '<img src=' + item.image + ' alt="" width="50" height="50">';
        html += '<div class="topsonginfo">';
        html += '<div class="top-songname">' + item.title + '</div>';
        html += '<div class="top-songsinger">' + item.singer + '</div>';
        html += '</div>';
        html += '<div class="top100-option"><i class="fas fa-ellipsis-v"></i></div>';
		html += '<div class="moreoption moreoption-content">';
        html += '<a href="#"><i class="fas fa-plus"></i>Thêm vào chờ phát</a>';
		html += '<a href="#"><i class="fas fa-link"></i>Sao chép link</a>';
        html += '<a href="#"><i class="fab fa-itunes-note"></i>Đi đến bài hát</a>';
		html += '</div>';
        if (item.id == 1 || item.id == 6 || item.id == 11) html += '<p><i class="fas fa-sort-up"></i>1</p>';
        html += '</div>';
        return html;
    })

    var x = document.getElementsByClassName("topbxhlist");
	for (let i = 0; i < x.length;i++){
		x[i].innerHTML = html;
	}
}
RenderTop100();
function ChartRun() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
		animationDuration: 2000,
		backgroundColor: "#79d4f8",
		zoomEnabled:true,
		width: 980,
		
        title: {
            text: "NCT Realtime Chart"
        },
        axisX: {
            valueFormatString: "DD/MMM/YY"
        },
        axisY: {
            title: "Lượt nghe (K)",
            suffix: " K"
        },
        legend: {
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries,	
		},
        toolTip: {
            shared: true,
        },
        data: [{
                name: "Top 1",
                type: "spline",
                yValueFormatString: "#0.## K",
                showInLegend: true,
                dataPoints: [{
                        x: new Date(2021, 11, 21),
                        y: 68
                    },
                    {
                        x: new Date(2021, 11, 20),
                        y: 62
                    },
                    {
                        x: new Date(2021, 11, 19),
                        y: 64
                    },
                    {
                        x: new Date(2021, 11, 18),
                        y: 67
                    },
                    {
                        x: new Date(2021, 11, 17),
                        y: 60
                    },
                    {
                        x: new Date(2021, 11, 16),
                        y: 62
                    },
                    {
                        x: new Date(2021, 11, 15),
                        y: 70
                    },
                    {
                        x: new Date(2021, 11, 14),
                        y: 74
                    },
                    {
                        x: new Date(2021, 11, 13),
                        y: 68
                    },
                    {
                        x: new Date(2021, 11, 12),
                        y: 62
                    },
                    {
                        x: new Date(2021, 11, 11),
                        y: 61
                    },
                    {
                        x: new Date(2021, 11, 10),
                        y: 59
                    },
                    {
                        x: new Date(2021, 11, 9),
                        y: 63
                    },
                    {
                        x: new Date(2021, 11, 8),
                        y: 66
                    },
                    {
                        x: new Date(2021, 11, 7),
                        y: 74
                    },
                    {
                        x: new Date(2021, 11, 6),
                        y: 68
                    },
                    {
                        x: new Date(2021, 11, 5),
                        y: 62
                    },
                    {
                        x: new Date(2021, 11, 4),
                        y: 61
                    },
                    {
                        x: new Date(2021, 11, 3),
                        y: 59
                    },
                    {
                        x: new Date(2021, 11, 2),
                        y: 63
                    },
                    {
                        x: new Date(2021, 11, 1),
                        y: 66
                    }
                ]
            },
            {
                name: "Top 2",
                type: "spline",
                yValueFormatString: "#0.## K",
                showInLegend: true,
                dataPoints: [{
                        x: new Date(2021, 11, 21),
                        y: 45
                    },
                    {
                        x: new Date(2021, 11, 20),
                        y: 48
                    },
                    {
                        x: new Date(2021, 11, 19),
                        y: 43
                    },
                    {
                        x: new Date(2021, 11, 18),
                        y: 44
                    },
                    {
                        x: new Date(2021, 11, 17),
                        y: 40
                    },
                    {
                        x: new Date(2021, 11, 16),
                        y: 29
                    },
                    {
                        x: new Date(2021, 11, 15),
                        y: 25
                    },
                    {
                        x: new Date(2021, 11, 14),
                        y: 28
                    },
                    {
                        x: new Date(2021, 11, 13),
                        y: 30
                    },
                    {
                        x: new Date(2021, 11, 12),
                        y: 36
                    },
                    {
                        x: new Date(2021, 11, 11),
                        y: 33
                    },
                    {
                        x: new Date(2021, 11, 10),
                        y: 38
                    },
                    {
                        x: new Date(2021, 11, 9),
                        y: 40
                    },
                    {
                        x: new Date(2021, 11, 8),
                        y: 38
                    },
                    {
                        x: new Date(2021, 11, 7),
                        y: 28
                    },
                    {
                        x: new Date(2021, 11, 6),
                        y: 30
                    },
                    {
                        x: new Date(2021, 11, 5),
                        y: 36
                    },
                    {
                        x: new Date(2021, 11, 4),
                        y: 33
                    },
                    {
                        x: new Date(2021, 11, 3),
                        y: 38
                    },
                    {
                        x: new Date(2021, 11, 2),
                        y: 40
                    },
                    {
                        x: new Date(2021, 11, 1),
                        y: 38
                    }
                ]
            },
            {
                name: "Top 3",
                type: "spline",
                yValueFormatString: "#0.## K",
                showInLegend: true,
                dataPoints: [{
                        x: new Date(2021, 11, 21),
                        y: 40
                    },
                    {
                        x: new Date(2021, 11, 20),
                        y: 45
                    },
                    {
                        x: new Date(2021, 11, 19),
                        y: 40
                    },
                    {
                        x: new Date(2021, 11, 18),
                        y: 35
                    },
                    {
                        x: new Date(2021, 11, 17),
                        y: 33
                    },
                    {
                        x: new Date(2021, 11, 16),
                        y: 25
                    },
                    {
                        x: new Date(2021, 11, 15),
                        y: 19
                    },
                    {
                        x: new Date(2021, 11, 14),
                        y: 20
                    },
                    {
                        x: new Date(2021, 11, 13),
                        y: 22
                    },
                    {
                        x: new Date(2021, 11, 12),
                        y: 21
                    },
                    {
                        x: new Date(2021, 11, 11),
                        y: 22
                    },
                    {
                        x: new Date(2021, 11, 10),
                        y: 18
                    },
                    {
                        x: new Date(2021, 11, 9),
                        y: 17
                    },
                    {
                        x: new Date(2021, 11, 8),
                        y: 16
                    },
                    {
                        x: new Date(2021, 11, 7),
                        y: 20
                    },
                    {
                        x: new Date(2021, 11, 6),
                        y: 22
                    },
                    {
                        x: new Date(2021, 11, 5),
                        y: 21
                    },
                    {
                        x: new Date(2021, 11, 4),
                        y: 22
                    },
                    {
                        x: new Date(2021, 11, 3),
                        y: 18
                    },
                    {
                        x: new Date(2021, 11, 2),
                        y: 17
                    },
                    {
                        x: new Date(2021, 11, 1),
                        y: 16
                    }
                ]
            }
        ]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}
ChartRun();
