document.getElementById('khampha').addEventListener('click', function(){
    if(document.getElementById('dropkhampha').style.display != "block"){
        document.getElementById('dropkhampha').style.display = "block";
        document.getElementById('icon_khampha').style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById('dropkhampha').style.display = "none";
        document.getElementById('icon_khampha').style.transform = "rotate(360deg)";
    }
})
document.getElementById('homnay').addEventListener('click', function(){
    if(document.getElementById('drophomnay').style.display != "block"){
        document.getElementById('drophomnay').style.display = "block";
        document.getElementById('icon_homnay').style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById('drophomnay').style.display = "none";
        document.getElementById('icon_homnay').style.transform = "rotate(360deg)";
    }
})

function Open_Page(page){
    window.location.href = page;
}