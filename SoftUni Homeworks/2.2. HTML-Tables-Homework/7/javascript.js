function addDigit (x) {
	document.getElementById("calc-area").defaultValue += x;
}
function reset () {
	alert("test");
	document.getElementById("calc-area").defaultValue = '';
}
function calculate () {
	document.getElementById("calc-area").defaultValue = eval(document.getElementById("calc-area").defaultValue);
}