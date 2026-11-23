let name = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("message")
let btn = document.getElementById("btn")
let mainImg = document.getElementById("mainImg")
let thumb = document.querySelectorAll(".thumb")
let form = document.querySelector('form')
let darkmode = document.getElementById("dark-mode")
let body = document.querySelector("body")

form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    if(name.value === '' || email.value === '' || message.value === ''){
        alert("Please fill all fields")
    }
    else if(!email.value.includes("@") || !email.value.includes(".")){
        alert("Please invalid email address (must contain @ and .)")
    }
    else{
        alert('Form subitted successfully')
    }
});


darkmode.addEventListener("click" , ()=>{
    body.classList.toggle("dark-mode")
    if(body.classList.contains("dark-mode")){
        darkmode.style.backgroundColor = 'white'
        darkmode.style.color = 'black'
        darkmode.textContent = 'Light Mode'
    }
    else{
        darkmode.style.backgroundColor = 'black'
        darkmode.style.color = 'white'
        darkmode.textContent = 'Dark Mode'
    }
})


for(let i=0; i<thumb.length; i++){
    thumb[i].addEventListener('click' , (e)=>{
        let imgSrc = e.target.getAttribute("src")
        mainImg.setAttribute("src" , imgSrc)
        console.log("Thumbnail clicked" , imgSrc);
        
    })
};