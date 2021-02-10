var inputTxt = document.querySelector('#txt-input');
var btnClick = document.querySelector('#btn-trans');
var outputDiv = document.querySelector('#div-output');


function clickEventListener() {

    var printText = "Hi " + inputTxt.value + " How are you ??"
    outputDiv.innerHTML = printText;
}

if (btnClick) {
    btnClick.addEventListener("click", clickEventListener);
}