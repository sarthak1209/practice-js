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
   fetch(url(input)).then(res => res.json()).then(json => {
       console.log(json.contents.tranlated);
outputDiv.innerText = json.contents.tranlated;
   })


}


    submitbtn.addEventListener("click",onClickSubmitButton);

