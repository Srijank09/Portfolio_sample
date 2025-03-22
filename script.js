const barEle = document.querySelector(".bar")
const hiddenEle = document.querySelector(".hidden")
const closeEle = document.querySelector(".close")
barEle.addEventListener("click",()=>{
    hiddenEle.style.display = "block"

})

closeEle.addEventListener("click", ()=>{
    hiddenEle.style.display = "none"

})