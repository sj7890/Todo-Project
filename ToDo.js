let btn=document.querySelector("button")
let ul=document.querySelector("ul")
let inp=document.querySelector("input")

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value
    let DelBtn=document.createElement("button")
    DelBtn.innerText="delete";
    DelBtn.classList.add("delete")
    item.appendChild(DelBtn)
    ul.appendChild(item)
 console.log(inp.value);
 inp.value=""

});

ul.addEventListener("click" , function (event) {
   let items= event.target.parentElement;
    items.remove()
    console.log("Delete It");
})

