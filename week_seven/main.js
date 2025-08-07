let total = 0;
//initially the total is empty
console.log(total);
function simpleCalc(num1, num2) {
	//we can use plus,minus, times or divide
	let sum = num1 + num2;
	total += sum; // appending the value of sum to the total
	return sum;
}

//getting the result
let result = simpleCalc(20, 40);
console.log(result);
console.log(total);

//flip card
const card = document.querySelector('.card');
card.addEventListener('click', () => {
	card.classList.toggle('is-flipped');
});
