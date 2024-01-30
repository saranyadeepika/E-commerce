let nav=document.querySelector("#navbar")
let body=document.querySelector("body")
function displaymenu(){
nav.style.display="block"
}
nav.addEventListener('click',()=>{
    nav.style.display="none"
})