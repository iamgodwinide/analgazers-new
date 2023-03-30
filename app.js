fart = new Fart();

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
]

const playFart = () => {
    fart.play(sounds[Math.floor(Math.random() * 13)])
}

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

window.onload = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
   setTimeout(()=> {
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".preload-wrap").style.display = "none";
   },300)
}
