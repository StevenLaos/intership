function fizzBuzz(numbers){
	let arrayChanged = []
	for(let i = 0; i < numbers.length; i++){
		const number = numbers[i]
		if(number % 3 === 0 && number % 5 === 0 ){
			arrayChanged.push("FizzBuzz")
		}else if(number % 5 === 0){
			arrayChanged.push("Buzz")
		}else if(number % 3 === 0){
			arrayChanged.push("Fizz")
		}else{
			arrayChanged.push(number)
		}
	}
	return arrayChanged
}



function fizzBuzz2(number){
	if(number % 3 === 0 && number % 5 === 0 ){
		return "FizzBuzz"
	}else if(number % 5 === 0){
		return "Buzz"
	}else if(number % 3 === 0){
		return "Fizz"
	}else{
		return number
	}
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let array = numbers.map(fizzBuzz2)



function numbers(elementideArv){
	let array = []
	for(let i = 1; i <= elementideArv; i++){
		array.push(i)
	}
	return array
}



function numbers2(count){
	let array = []
	let i = 1
	do{
		array.push(i)
		i++
	}
	while (i <= count)
	return array
	
}



function numbers3(count){
	let array = []
	let i = 1
	while(i <= count){
		array.push(i)
		i++
	}
	return array	
}
// mida ma teha soovin
// ma soovin saada vastuseks array, mis on muudetud nii, et 3ga jaguvad on fizz, 
// 5ga jaguvad on buzz ja 5 kui ka 3ga jaguvad tuleb FizzBuzz, muul juhul 
// lihtsalt number. Tagastatud on array kujul.