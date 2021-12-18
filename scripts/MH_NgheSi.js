function changeHeading(id){
    document.getElementById('hot').classList.remove('heading_here');
    document.getElementById('vietnam').classList.remove('heading_here');
    document.getElementById('aumy').classList.remove('heading_here');
    document.getElementById('hanquoc').classList.remove('heading_here');


    document.getElementById(id).classList.add('heading_here');
}

function changemales(id){
    document.getElementById('nam').classList.remove('chose');
    document.getElementById('nu').classList.remove('chose');
    document.getElementById('nhomnhac').classList.remove('chose');

    document.getElementById(id).classList.add('chose');
}

function changeFooter(id){
    document.getElementById('1').classList.remove('here_page');
    document.getElementById('2').classList.remove('here_page');
    document.getElementById('3').classList.remove('here_page');
    document.getElementById('4').classList.remove('here_page');
    document.getElementById('5').classList.remove('here_page');
    document.getElementById('6').classList.remove('here_page');

    document.getElementById(id).classList.add('here_page');
}