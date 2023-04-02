const fart = new Fart();
const popupContainer = document.querySelector(".popup");
const popupContent = document.querySelector(".popup .content");
const bgm = document.querySelector("#bgm");

const sounds = [
    "toot",
    "ripper",
    "plop",
    "squit",
    "squat",
    "raspberry",
    "tuppence",
    "liftoff",
    "trumpet",
    "fizzler",
    "windy",
    "eine",
    "fartception",
    "fartpoint1"
];

const enterFunc = () => {
    document.querySelector("body").style.overflowY = "scroll";
    fart.play(sounds[1])
    if(window.innerWidth < 1024){
        window.scrollTo({
            top: 500,
            behavior: "smooth"
        });
    }else{
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }
}

const playFart = (num) => {
    fart.play(sounds[Math.floor(Math.random() * 13)]);
    showpopup(num);
}

const showpopup = async (num) => {
    bgm.play();
    if(typeof num === 'number'){
        popupContainer.style.display = "flex"
        popupContent.classList.add("content-animate");
        popupContent.querySelector("img").src = num + 1 + '.png'
    }
}

const hidepopup = () => {
    popupContainer.style.display = "none"
    popupContent.classList.remove("content-animate");
}

popupContainer.addEventListener("click", hidepopup);

window.onload = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
   setTimeout(()=> {
    document.querySelector(".preload-wrap").style.display = "none";
   },300)
}
