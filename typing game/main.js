const start = document.getElementById("start");
const points = document.getElementById("points")
const word = document.getElementById("word");
const input = document.getElementById("wordValue");
const reset = document.getElementById("reset");

//words
wordArray = ["impossible", "vegetable", "initial", "exotic", "female", "wonderful", "mobile", "meek", "major", "car", "conscious", "hard", "crooked", "brainy"];

//variable
let toggle = false;
let nr = 0;
let time = 15;
let plusTime = 2;

//app settings
start.addEventListener("click", () => {
    if (document.getElementById("difficulty").value === "easy") {
        plusTime = 3;
    }
    if (document.getElementById("difficulty").value === "medium") {
        plusTime = 2;
    }
    if (document.getElementById("difficulty").value === "hard") {
        plusTime = 1;
    }

    toggle = true;
    let timer = setInterval(myTimer, 1000);
    setInterval(() => {
        if (time == 0) {
            clearInterval(timer);
            word.innerText = "You lose";
            document.getElementById("finalScore").innerText = `Your score is ${nr}`;
            input.style.visibility = "hidden";
            reset.style.visibility = "visible";
            start.style.visibility = "hidden";
        }
    }, 1000)

    setInterval(() => {
        if (nr == wordArray.length) {
            clearInterval(timer);
            word.innerText = "You win";
            document.getElementById("finalScore").innerText = `Your score is ${nr}`;
            input.style.visibility = "hidden";
            reset.style.visibility = "visible";
            start.style.visibility = "hidden";
        }
    }, 1)

    word.innerText = wordArray[0];
})

//word check
input.addEventListener("input", () => {
    const wordValue = document.getElementById("wordValue").value.trim()
    if (wordValue == word.textContent) {
        nr++;
        points.textContent = nr;
        document.getElementById("wordValue").value = "";
        word.innerText = wordArray[nr];
        time += plusTime;
    }
})

//reset but
reset.addEventListener("click", ()=>{
    toggle = false;
    nr = 0;
    time = 15;
    plusTime = 2;
    input.style.visibility = "visible";
    document.getElementById("finalScore").innerText = "";
    word.innerText = "Press Start";
    reset.style.visibility = "hidden";
    start.style.visibility = "visible";
    document.getElementById("time").innerText = time;
    points.textContent = nr;
})

function myTimer() {
    time--;
    document.getElementById("time").innerText = time;
}

//nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
let inOut = true;

navToggle.addEventListener("click" , ()=>{
    if(inOut == true){
        nav.style.transform = "translateY(-120%)";
        inOut = false;
    } else if(inOut == false){
        nav.style.transform = "translateY(0%)";
        inOut = true;
    }
})