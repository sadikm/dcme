let btn = document.getElementById("btn");

// function 1
btn.addEventListener("click", showMessage);

// function 2
btn.addEventListener("click", changeColor);

// function 3
btn.addEventListener("click", countClick);

let count = 0;

function showMessage(){
    document.getElementById("msg").innerHTML = "Button clicked";
}

function changeColor(){
    btn.style.backgroundColor = "lightgreen";
}

function countClick(){
    count++;
    document.getElementById("msg1").innerHTML =
        "Button clicked " + count + " times";
}
