var number1 = document.getElementById("num1");
var outputelement = document.getElementById("output");
function PrintPyramid() {
    var a = parseInt(number1.value);
    var result = '';
    for (var i = 1; i <= a; i++) {
        var spaces = " ".repeat(a - i);
        var stars = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    outputelement.textContent = result;
}
function PrintReversePyramid() {
    var a = parseInt(number1.value);
    var result = "";
    for (var i = a; i > 0; i--) {
        var spaces = " ".repeat(a - i);
        var stars = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    outputelement.textContent = result;
}
function PrintFullPyramid() {
    var a = parseInt(number1.value);
    var result = "";
    for (var i = 1; i <= a; i++) {
        var spaces = " ".repeat(a - i);
        var stars = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    for (var i = a - 1; i > 0; i--) {
        var spaces = " ".repeat(a - i);
        var stars = "* ".repeat(i);
        result += spaces + stars + "\n";
    }
    outputelement.textContent = result;
}
