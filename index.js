const typeplace = document.getElementById("typeplace");

function appendToDisplay(input) {
    typeplace.value += input;
}

function clearDisplay() {
    typeplace.value = "";
}

function calculate() {
    try {
        typeplace.value = eval(typeplace.value);
    }
    catch (Error) {
        typeplace.value = "Error";
    }
}

function deleteOne() {
    typeplace.value = typeplace.value.slice(0, -1);
}



let name = prompt("What is your name?");

alert("Welcome, " + name + "!");