function fizzBuzz(arrayNumber){
	let arraySorted = []
	for(let i = 0; i < arrayNumber.length; i++){
		if(typeof arrayNumber === "number"){
			if(arrayNumber / 3 === 1){
				`Fizz`
			}else if(arrayNumber / 5 === 1){
				`Buzz`
			}else if(arrayNumber /3 === 1 && arrayNumber /5 === 1){
				`FizzBuzz`
			}else{
				arrayNumber
			}
		}
		arraySorted.push(arrayNumber[i])
	}
	return arraySorted
}

// mida ma teha soovin
// ma soovin saada vastuseks array, mis on muudetud nii, et 3ga jaguvad on fizz, 
// 5ga jaguvad on buzz ja 5 kui ka 3ga jaguvad tuleb FizzBuzz, muul juhul 
// lihtsalt number. Tagastatud on array kujul.