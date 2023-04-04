const pimg = document.querySelector(".overlay");


const check = () => {
    if(window.innerHeight > window.innerWidth){
        pimg.style.display = "block";
    }else{
        pimg.style.display = "none";
    }
}

setInterval(check, 500)
