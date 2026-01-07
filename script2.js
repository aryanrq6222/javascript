function changeText() {
    const paragraph = document.querySelector(".message");
    paragraph.innerText = "Paragraph text changed using querySelector!";
}

function changeHeadingColor() {
    document.getElementById("heading").style.color = "crimson";
}

function changeDivColor() {
    document.getElementById("colorBox").style.backgroundColor = "lightgreen";
}

function displayInput() {
    const inputValue = document.getElementById("userInput").value;
    document.getElementById("outputText").innerText =
        "You entered: " + inputValue;
}

function toggleParagraph() {
    const para = document.getElementById("togglePara");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}