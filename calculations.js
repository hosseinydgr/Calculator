const firstPriority = function (str) {
	let arr = str.split(" ");
	for (let i = 1; i < arr.length - 1; i += 2) {
		if (arr[i] === "*") {
			arr[i + 1] = `${Number(arr[i - 1]) * Number(arr[i + 1])}`;
			arr[i] = "";
			arr[i - 1] = "";
		}
		if (arr[i] === "/") {
			arr[i + 1] = `${Number(arr[i - 1]) / Number(arr[i + 1])}`;
			arr[i] = "";
			arr[i - 1] = "";
		}
	}
	return arr.join("");
};

const secondPriority = function (str) {
	let arr = str.split(" ");
	for (let i = 1; i < arr.length - 1; i += 2) {
		if (arr[i] === "+") {
			arr[i + 1] = `${Number(arr[i - 1]) + Number(arr[i + 1])}`;
			arr[i] = "";
			arr[i - 1] = "";
		}
		if (arr[i] === "-") {
			arr[i + 1] = `${Number(arr[i - 1]) - Number(arr[i + 1])}`;
			arr[i] = "";
			arr[i - 1] = "";
		}
	}
	return arr.join("");
};

export const calculation = function (str) {
	let newStr = firstPriority(str);
	let newer = "";
	for (let i = 0; i < newStr.length; i++) {
		if (newStr.charAt(i) === "+" || newStr.charAt(i) === "-") {
			newer = newer + " " + newStr.charAt(i) + " ";
		} else {
			newer = newer + newStr.charAt(i);
		}
	}
	return secondPriority(newer);
};
