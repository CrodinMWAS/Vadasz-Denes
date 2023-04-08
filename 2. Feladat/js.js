let points = localStorage.getItem("points");
let check = localStorage.getItem(document.querySelector("h1").dataset.value);
if(points === null){
    points = 0;
}

function setPoint() {
    let par = parseInt(answer.dataset.value);
    if(empty.innerHTML != "A választ húzd ide!"){
        if(par == 1 && check === null){
            localStorage.setItem("points",parseInt(points) + 1);
            localStorage.setItem(document.querySelector("h1").dataset.value,1);
        }
        points = localStorage.getItem("points");
        check = localStorage.getItem(document.querySelector("h1").dataset.value);
    }
}


let empty = document.getElementsByClassName("empty")[0];
//valaszok 
let answer = document.getElementsByClassName("answer")[0];
//nagydiv
let answers = document.getElementsByClassName("answers")[0];
let answered = false;

document.querySelectorAll(".answer").forEach(item => {
    item.addEventListener("dragstart",setAnswer);
});

function setAnswer() {
    answer = this;
}

answer.addEventListener("dragstart",dragStart);
answer.addEventListener("dragend",dragEnd);

empty.addEventListener("dragover",dragOver);
empty.addEventListener("dragenter",dragEnter);
empty.addEventListener("dragleave",dragLeave);
empty.addEventListener("drop",dragDrop);

answers.addEventListener("drop",dropBack);
answers.addEventListener("dragover",dragOver);

function dragStart() {
    setTimeout(() => this.className = "invisible",0);
}
function dragEnd(){
    this.className = "answer";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    if(answered == false){
        this.innerHTML = "";
        this.append(answer);
    }
    answered = true;
}

function dropBack() {
    this.append(answer)
    answered = false;
}
function btn() {
    setPoint();
}