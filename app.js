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
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
   
}

window.onload = () => {
    window.scrollTo({
        top: window.innerHeight/3,
        behavior: "smooth"
    });
    document.querySelector(".preload-wrap").style.display = "none";
}
