let btn = document.querySelector(".add_btn");
let Delete = document.querySelectorAll(".delete_btn");

let inp = document.querySelector("input");
let Ul = document.querySelector("ul");
btn.addEventListener("click",function(){
    let  li = document.createElement('li');
    let  para = document.createElement('p');
    let  deleteBtn = document.createElement('button');
    Ul.appendChild(li);    
    li.appendChild(para);
    li.appendChild(deleteBtn);
    deleteBtn.innerText="Delete";
    let task = inp.value;
    para.innerText=task;
    inp.value="";
});
Ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let  Par = event.target.parentElement;
        Par.remove();
    }
});
