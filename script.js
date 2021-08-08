var t0 = performance.now()

var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function inputlength(){
    return input.value.length;
}


function createListElement(){
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value));
    ul.appendChild(list);
    input.value ="";

    list.setAttribute("class", "list");


    var del = document.createElement("button");
    del.appendChild(document.createTextNode("Delete"));
    var deleteBut = list.appendChild(del);
    deleteBut.setAttribute("class", "deleteButton");
}

function addAfterClick(){
    if (inputlength() > 0){
        createListElement();
        
    }
}

function deleteItem(e){
    if (e.target.className ==="deleteButton"){
        e.target.parentElement.remove();
    }
}
    

function ToggleClass(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function addAfterKeyPress(event) {
    if (inputlength() > 0 && event.keyCode === 13){
        createListElement();

    }

}

function handleUlClick (e) {
	ToggleClass(e);
	deleteItem(e);
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeyPress);
ul.addEventListener("click",handleUlClick);

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")