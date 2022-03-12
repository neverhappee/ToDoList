let input = document.getElementById("userInput");
let button = document.getElementById("addButton");
let ul= document.querySelector("ul");




function createListElement() {
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.    
        value)); 
        ul.appendChild(li);
        input.value ="";
        let deleteButton = document.createElement 
        ("button");
        deleteButton.innerHTML = "delete";
        li.appendChild(deleteButton);
        deleteButton.addEventListener ("click" , removeButton);
        function removeButton() {
        li.parentNode.removeChild(li);}
        
}
  
  
button.addEventListener ("click" , function() { 
    if (input.value.length > 0 ) { createListElement(); 
         
    } 

}) 

input.addEventListener ("keydown" , function(event) {
    if (input.value.length > 0 && event.key === "Enter") {
        createListElement();
        
    } 
}) 


var list = document.getElementsByTagName("li");
for (var i = 0 ; i <list.length ; i++) {

 list[i].addEventListener("click", liClick);
 }

function liClick(){
  this.classList.toggle("done");
}



