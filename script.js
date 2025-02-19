const input_box = document.getElementById("input_box")

const list_container = document.getElementById("list_container")



function addTask (){
    if(input_box.value === ""){
        alert("you have to write something")
    }
    else{
        let li = document.createElement("li");
       li.innerHTML = input_box.value;
       list_container.appendChild(li)
       let span= document.createElement("span")
       span.innerHTML = "\u00d7";
       li.appendChild(span)
       
    }
    input_box.value = " ";
    savedata();
}


list_container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheaked");
        savedata()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setitem("data",list_container.innerHTML)
}

function showtask(){
    localStorage.innerHTML= localStorage.getItem("data")
}
showtask();