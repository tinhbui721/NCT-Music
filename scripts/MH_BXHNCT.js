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
        title: "????? V????ng",
        singer: "????nh D??ng, ACV"
    },
    {
        id: 2,
        image: "images/pos2_top100list.jpg",
        title: "B?????c Qua Nhau",
        singer: "V??"
    },
    {
        id: 3,
        image: "images/pos3_top100list.jpg",
        title: "Chuy???n T??nh Facebook",
        singer: "Thi??n V??n"
    },
    {
        id: 4,
        image: "images/pos4_top100list.jpg",
        title: "??i N???",
        singer: "Masew"
    },
    {
        id: 5,
        image: "images/pos5_top100list.jpg",
        title: "Ng?????i Th????ng Em C??? ?????i Xua ??u???i",
        singer: "Nh?? Vi???t"
    },
    {
        id: 6,
        image: "images/baihat_1.jpg",
        title: "Y??u ?????m S??u C?? Ch???c B???n L??u",
        singer: "Thi??n V??"
    },
    {
        id: 7,
        image: "images/baihat_2.jpg",
        title: "C??nh H???ng M???ng Manh",
        singer: "B??nh"
    },
    {
        id: 8,
        image: "images/baihat_3.jpg",
        title: "Ch???c L?? Y??u ?????y",
        singer: "Thu Th???o"
    },
    {
        id: 9,
        image: "images/baihat_4.jpg",
        title: "Where You At",
        singer: "Danish Nguy???n"
    },
    {
        id: 10,
        image: "images/baihat_5.jpg",
        title: "Li???u M??nh C??n Th????ng Nhau",
        singer: "SONN ft. NA"
    },
    {
        id: 11,
        image: "images/baihat_11.jpg",
        title: "??nh Tr??ng S??ng",
        singer: "M??o Nh???"
    },
    {
        id: 12,
        image: "images/baihat_12.jpg",
        title: "Y??u Th????ng ?????m S??u",
        singer: "Bee Tr???n"
    },
    {
        id: 13,
        image: "images/baihat_13.jpg",
        title: "M??i M??i B??n Nhau",
        singer: "Kh???i My"
    },
    {
        id: 14,
        image: "images/baihat_14.jpg",
        title: "Sang Gi??u V?? ????u",
        singer: "NA"
    },
    {
        id: 15,
        image: "images/baihat_15.jpg",
        title: "Bu???n",
        singer: "Vi H???"
    },
    /*{id: 16, image: "images/tuyentap8.jpg", title: "Top NH???C Y??U TH??CH TH??NG 11"},
    {id: 17, image: "images/tuyentap9.jpg", title: "NH???C S?? PH?? QUANG"},
    {id: 18, image: "images/tuyentap10.jpg", title: "Top KPOP TH??NG 12/2021"},
    {id: 19, image: "images/tuyentap19.jpg", title: "Top ACOUSTIC Hot"},	
    {id: 20, image: "images/tuyentap18.jpg", title: "Top TR??? T??NH BOLERO"},
    {id: 21, image: "images/tuyentap11.jpg", title: "Top NH???C GI??NG SINH"},
    {id: 22, image: "images/tuyentap12.jpg", title: "Top INDIE GI??NG SINH"},
    {id: 23, image: "images/tuyentap13.jpg", title: "Top HOT REMIX TH??NG 12"},
    {id: 24, image: "images/tuyentap14.jpg", title: "Top NH???C GI??NG SINH BU???N"},
    {id: 25, image: "images/nhacdong.jpg", title: "Top NH???C M??A ????NG"},
    {id: 26, image: "images/nhachan.jpg", title: "Top NH???C H??N"},
    {id: 27, image: "images/tuyentap15.jpg", title: "Top NH???C ????M KHUYA"},
    {id: 28, image: "images/tuyentap16.jpg", title: "Top NH???C MI???N PH??"},
    {id: 29, image: "images/tuyentap17.jpg", title: "Top NH???C V-POP TH??NG 12"},
    {id: 30, image: "images/nhacdong.jpg", title: "Top NH???C M??A ????NG"},
    {id: 31, image: "images/tuyentap18.jpg", title: "Top BEST DANCE SONGS"},
    {id: 32, image: "images/tuyentap19.jpg", title: "Top NH???C CHO NG?????I C?? ????N"},
    {id: 33, image: "images/tuyentap20.jpg", title: "Top NH???C RAP VI???T"},
    {id: 34, image: "images/tuyentap17.jpg", title: "Top NH???C M??A ????NG"},
    {id: 35, image: "images/tuyentap3.jpg", title: "Top NH???C C-POP"},
    {id: 36, image: "images/tuyentap14.jpg", title: "Top NH???C ACOUSTIC US-UK"},
    {id: 37, image: "images/tuyentap2.jpg", title: "Top THE BEST 2021"},
    {id: 38, image: "images/tuyentap16.jpg", title: "Top NH???C FUTURE"},
    {id: 39, image: "images/tuyentap6.jpg", title: "Top NH???C FUTURE"},
    {id: 40, image: "images/tuyentap20.jpg", title: "Top NH???C FUTURE"},
    {id: 41, image: "images/tuyentap7.jpg", title: "Top NH???C FUTURE"},
    {id: 42, image: "images/tuyentap9.jpg", title: "Top NH???C FUTURE"},
    {id: 43, image: "images/tuyentap11.jpg", title: "Top NH???C FUTURE"},
    {id: 44, image: "images/tuyentap18.jpg", title: "Top NH???C FUTURE"},*/
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
        html += '<a href="#"><i class="fas fa-plus"></i>Th??m v??o ch??? ph??t</a>';
		html += '<a href="#"><i class="fas fa-link"></i>Sao ch??p link</a>';
        html += '<a href="#"><i class="fab fa-itunes-note"></i>??i ?????n b??i h??t</a>';
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
            title: "L?????t nghe (K)",
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
