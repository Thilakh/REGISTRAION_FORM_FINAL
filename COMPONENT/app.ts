const number1 = document.getElementById("num1") as HTMLInputElement;
const outputelement = document.getElementById("output") as HTMLPreElement;

function PrintPyramid() {
    let a = parseInt(number1.value);
    let result: string = '';
    for (let i = 1; i <= a; i++) {
        let spaces: string = " ".repeat(a - i);
        let stars: string = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    outputelement.textContent = result;
}

function PrintReversePyramid() {
    let a = parseInt(number1.value);
    let result: string = "";
    for (let i = a; i > 0; i--) {
        let spaces: string = " ".repeat(a - i);
        let stars: string = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    outputelement.textContent = result;
}

function PrintFullPyramid() {
    let a = parseInt(number1.value);
    let result: string = "";

    
    for (let i = 1; i <= a; i++) {
        let spaces: string = " ".repeat(a - i);
        let stars: string = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    for (let i = a - 1; i > 0; i--) {
        let spaces: string = " ".repeat(a - i);
        let stars: string = "* ".repeat(i);
        result += spaces + stars + "\n";
    }

    outputelement.textContent = result;
}
