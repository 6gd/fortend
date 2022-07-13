let tollo = document.getElementById('ulx');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let wqa = document.getElementById('wqa');
let HomePhoto = document.getElementById('HomePhoto');
function Mahdi(){
    tollo.classList.toggle("close")
    tollo.classList.toggle("active");
    wqa.classList.toggle("active")
    line1.classList.toggle("lnieActive1")
    line2.classList.toggle("lnieActive2")
    line3.classList.toggle("lnieActive3")
}

function change(img){
    HomePhoto.src = img.src
}