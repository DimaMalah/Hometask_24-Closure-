// Сделайте функцию, каждый вызов который будет генерировать случайные
// числа от 1 до 100, но так, чтобы они не повторялись, пока не будут
// перебраны все числа из этого промежутка. Решите задачу через 
// замыкания - в замыкании должен хранится массив чисел, 
// которые уже были сгенерированы функцией.

function foo() {
	let a = [];
	return function foo2() {
		let b = Math.floor(Math.random() * 100) + 1
		if (a.includes(b) && a.length < 100) {
			return foo2()
		} else {
			a.push(b)
			return b
		}
	}

}

let sum = foo()

console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());
console.log(sum());