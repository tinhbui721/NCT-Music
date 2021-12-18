function changeHeading(id){
    document.getElementById('new_hot').classList.remove('heading_here');
    document.getElementById('vietnam').classList.remove('heading_here');
    document.getElementById('aumy').classList.remove('heading_here');
    document.getElementById('chaua').classList.remove('heading_here');
    document.getElementById('khac').classList.remove('heading_here');

    document.getElementById(id).classList.add('heading_here');

    document.getElementById('title').innerText = document.getElementById(id).innerText

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