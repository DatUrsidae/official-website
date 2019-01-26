document.querySelector("h1").addEventListener("click", hiddenAlert);

function hiddenAlert() {
    alert("Secret Message Found! PogU");
}



function openForm() {
    document.getElementById('form-wrapper').style.display = 'block'
}

function closeForm() {
    document.getElementById('form-wrapper').style.display = 'none'
}

function openBox() {
    document.getElementById("info-box").style.display = 'block'
}

function closeBox() {
    document.getElementById("info-box").style.display = 'none'
}


var info = document.getElementById('info-box');
var form = document.getElementById('form-wrapper');
window.onclick = function (event) {
    if (event.target == info) {
        info.style.display = "none";
    }
    if (event.target == form) {
        form.style.display = "none";
        
    }
}

