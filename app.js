var inputText = document.querySelector("#txt-input");
//console.log(inputText.value);       
var submitbtn = document.querySelector("#btn-submit");
var outputDiv = document.querySelector("#div-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function url(input){
    return serverUrl+ "?text="+ input
}
function onClickSubmitButton(){
    console.log("The function is called!!");
    var input = inputText.value;
   fetch(url(input)).then(json => res.json()).then(json => {
outputDiv.innerText = json.contents;
   })


}

if(submitbtn){
    submitbtn.addEventListener("click",onClickSubmitButton);
}
