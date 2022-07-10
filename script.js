var tags= [];

var input = document.getElementById("taginput");
var list = document.getElementById("taglist");
var removeTag = document.getElementById("removeTag");


input.addEventListener("keyup", addTag);
removeTag.addEventListener("click", removeTags);

function addTag(e){
    if(e.key == "Enter"){
        var listItem = document.createElement("li");
        var tag = listItem.appendChild(document.createTextNode(input.value+' <i class="fa-solid fa-circle-xmark"></i>'));
        console.log(tag);
        var litag = '<li class="tags"> '+input.value+' <i class="fa-solid fa-circle-xmark"></i></li>';
        list.insertAdjacentHTML("afterbegin", litag);
    }
}

function removeTags(e){
    list.innerHTML = '';
}