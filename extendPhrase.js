const numberExtendPhrase = function () {
	phraseToCalculate += this.textContent;
	calcInput.value = phraseToCalculate;
};

const operatorExtendPhrase = function () {
	if (phraseToCalculate.at(-1) !== " " && phraseToCalculate !== "") {
		if (this.classList[0] === "btn-addition") {
			phraseToCalculate += " + ";
		}
		if (this.classList[0] === "btn-subtraction") {
			phraseToCalculate += " - ";
		}
		if (this.classList[0] === "btn-multiplication") {
			phraseToCalculate += " * ";
		}
		if (this.classList[0] === "btn-division") {
			phraseToCalculate += " / ";
		}
		calcInput.value = phraseToCalculate;
	}
};

export { numberExtendPhrase, operatorExtendPhrase };
