function generatePyramid() {
    let n = parseInt(document.getElementById("rows").value);
    let outputElement = document.getElementById("output");
    let result = "";

    if (isNaN(n) || n <= 0) {
        outputElement.textContent = "Please enter a valid number!";
        return;
    }

    for (let i = 1; i <=n; i++) {
        let spaces = " ".repeat(n - i );
        let stars = "* ".repeat(i);
        result += spaces + stars + spaces + "\n";
    }

    outputElement.textContent = result;
}

function generateReversePyramid() {
    let n = parseInt(document.getElementById("rows").value);
    let outputElement = document.getElementById("output");
    let result = "";

    if (isNaN(n) || n <= 0) {
        outputElement.textContent = "Please enter a valid number!";
        return;
    }

    for (let i = n ; i >= 0; i--) {
        let spaces = " ".repeat(n - i );
        let stars = "* ".repeat(i);
        result += spaces + stars + spaces + "\n";
    }

    outputElement.textContent = result;
}

function fullPyramid() {
    let n = parseInt(document.getElementById("rows").value);
    let outputElement = document.getElementById("output");
    let result = "";

    if (isNaN(n) || n <= 0) {
        outputElement.textContent = "Please enter a valid number!";
        return;
    }

    for (let i = 1; i <=n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "* ".repeat(i);
        result += spaces + stars + spaces + "\n";
    }

    for (let i = n-1; i >0; i--) {
        let spaces = " ".repeat(n - i);
        let stars = "* ".repeat(i);
        result += spaces + stars + spaces + "\n";
    }

    outputElement.textContent = result;
}
