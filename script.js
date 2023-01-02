"use strict";

const calcInput = document.querySelector(".calc-input");
const result = document.querySelector(".result");
const btnEqual = document.querySelector(".btn-equal");
const mainContainer = document.querySelector(".main-container");
const btnClear = document.querySelector(".btn-clear");
const btnDot = document.querySelector(".dot");
const operators = document.querySelectorAll(".operator");
const btnBack = document.querySelector(".btn-back");

if (localStorage.inputs === undefined) {
	localStorage.setItem(
		"inputs",
		JSON.stringify({
			res: "0",
			calc: "",
		})
	);
}
calcInput.value = JSON.parse(localStorage.inputs).calc;
result.value = JSON.parse(localStorage.inputs).res;

let phraseToCalculate = `${calcInput.value}`;

mainContainer.addEventListener("click", async function (e) {
	const extendObj = await import("./extendPhrase.js");
	if (e.target.classList.contains("number"))
		extendObj.numberExtendPhrase.call(e.target);
	if (e.target.classList.contains("operator"))
		extendObj.operatorExtendPhrase.call(e.target);
	let obj = {
		res: result.value,
		calc: calcInput.value,
	};
	localStorage.setItem("inputs", JSON.stringify(obj));
	e.target.blur();
});

btnEqual.addEventListener("click", async function () {
	if (phraseToCalculate.at(-1) !== " " && phraseToCalculate !== "") {
		const calcObj = await import("./calculations.js");
		result.value = calcObj.calculation(phraseToCalculate);
		let obj = {
			res: result.value,
			calc: calcInput.value,
		};
		// console.log(obj);
		localStorage.setItem("inputs", JSON.stringify(obj));
	}
});

btnClear.addEventListener("click", function () {
	calcInput.value = "";
	result.value = "0";
	phraseToCalculate = "";
	let obj = {
		res: result.value,
		calc: calcInput.value,
	};
	localStorage.setItem("inputs", JSON.stringify(obj));
});

btnBack.addEventListener("click", back);

document.addEventListener("keydown", function (e) {
	if (!isNaN(Number(e.key)) && e.key !== " ") {
		document.querySelector(`.btn-${e.key}`).click();
	}
	if (e.key === "Escape") btnClear.click();
	if (e.key === "Enter") btnEqual.click();
	if (e.key === ".") btnDot.click();
	if (e.key === "/") operators[0].click();
	if (e.key === "*") operators[1].click();
	if (e.key === "-") operators[2].click();
	if (e.key === "+") operators[3].click();
	if (e.key === "Backspace") {
		if (phraseToCalculate !== "") {
			back();
		}
	}
	// console.log(e.key);
});

function back() {
	if (phraseToCalculate.at(-1) === " ") {
		phraseToCalculate = phraseToCalculate.substring(
			0,
			phraseToCalculate.length - 3
		);
	} else {
		phraseToCalculate = phraseToCalculate.substring(
			0,
			phraseToCalculate.length - 1
		);
	}
	calcInput.value = phraseToCalculate;
	let obj = {
		res: result.value,
		calc: calcInput.value,
	};
	localStorage.setItem("inputs", JSON.stringify(obj));
}

// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);
