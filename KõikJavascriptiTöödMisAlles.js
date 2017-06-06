/*function trip(road, kmNumber){
		const cityTravel = 8/100
		const highwayTravel = 4.5/100
        
	if((road === 'highway' )){
	return(`Highway gas spent is ${highwayTravel * kmNumber}l`)
    }
  	else if((road === 'city')){
   	return(`City gas spent is ${cityTravel * kmNumber}l`)
    }
  	else{
    return `You didnt enter cityTravel or highwayTravel to calculate the result`
    }
}
console.log(trip('highway')) */



//funktsioon, mis võtab argumendina aastaaja (string)
// ja tagastab selle aastaja kuud
// nt kasutaja sisestab suve ja tagastatakse lause 
// "Suve kuud on ..."
/*const fullYear = (season) => { 
    switch (season.toLowerCase()){
      	case  'autumn':
        case  'sügis' :
  		console.log(`Sügise kuud on september, oktoober ja november`)
  			break;
      	case  'summer':
        case  'suvi'  :
  		console.log(`Suve kuud on juuni, juuli ja August`)
  			break;
      	case 'spring':
        case 'kevad' :
  		console.log(`Kevade kuud on mai, aprill ja märts`)
  			break;
      	case 'winter':
        case 'talv'  :
  		console.log(`Talve kuud on detsember, jaanuar ja veebruar`)
  			break;
        default:
  		console.log(`Kahjuks see sõna ei ole aastaaeg.`)
	}
}
fullYear('autumn') */



/*const nt = 'sõna'
const newNt = nt.toUpperCase()
console.log(nt.toUpperCase())

const testWord = 'word'
testWord.charAt(1)
console.log(testWord.charAt(0))

const wordTest1= 'rusky'
const number = 123
console.log(number)

let testObject= {id: 5, name: 'Kati'}
console.log(testObject.name)

const friendNoFriend = {id: 1,name: {firstName: 'Steven',lastName: 'Laos' }}
console.log(friendNoFriend.name.lastName)

const randomArrayForTest = [1, 4, 6]
console.log(randomArrayForTest[2])

const againNewArray = [[1,4,6],[1,4,6],[1,4,6]]
console.log(againNewArray[1][2])

const objectTestRun = {array: [1,4,6]}
console.log(objectTestRun.array[2])

const forTeacher = 'testrun'
forTeacher.toUpperCase().charAt()
console.log(forTeacher.toUpperCase().charAt(0))



//Tee funktsioon, mis võtab argumendiks stringi 
//ja tagastab selle stringi tagurpidi. 
//Kasutan loop for-i selle ülesande jaoks. 
//Tagastaks väikeste tähtedega stringi ehk .toLowerCase
function rewerseWord(word){
  	let rewersedWord = ' '
  	word.toLowerCase
	for(let i=word.length - 1; i >= 0; i--){
    rewersedWord = rewersedWord + word[i]
    }
  	return rewersedWord
}
console.log(rewerseWord('sõna'))*/



//funktsioon, mis võtab argumendiks array[], 
//numbritest ja tagastab uue array[] üle ühe numbritega
// seda funktsiooni saab luua foriga
/*function numberArray(allNumberArray){
    let numbersOverOneArray = []
    for(let i=0;i < allNumberArray.length;i= i+2){
	numbersOverOneArray.push(allNumberArray[i])       
    }
  	return numbersOverOneArray
}
console.log(numberArray([1,2,3,4,5,6,7,8,9]))
const a = 'üks string'
const arrayNew = []
const newObject = {}
const b = 'veel korra'
const objectNew = {property: [1, 2, 3, 4, 5]}
console.log(objectNew.property[4]) */



//funktsioon. mis võtab argumendiks suvaline täis arv ja tagastab array, 
//kus on paaritud arvud 1 kuni arv mille kasutaja sisestas
/* function newArray(number){
	let overOneNumberArray = [] 
    for(let i = 1; i <= number; i = i+2){
    overOneNumberArray.push(i)
    }
  	return overOneNumberArray
}
console.log(newArray(12)) */



//funktsioon, mis võtab endale argumendiks objecti 
//omab 4 propertyit {id: , fName: , lName: , favPet: }
//tagastab info eraldi ridadele
/*let obj = {id: 1, fName: "Mari", lName: "Mets", favPet: "koer"}
function testWorkWith(object){
    for(let prop in object){
    console.log(`${prop} = ${object[prop]}`)
    }
}
testWorkWith(obj) */



//sama mis eelmine aga array's
/*let obj = {id: 1, fName: "Mari", lName: "Mets", favPet: "koer"}
function testWorkWith(object){
	let array = []
  	for(let prop in object){
    array.push(object[prop])
    }
	return array
}
console.log(testWorkWith(obj)) */



//Tee funktsioon, mis tagastab array paaris arvud. 
//Argumendiks saab kasutaja poolt täis arvu
//LISA : Tee arrow funktsiooniks.
/*function integer(overOneInteger){
	let allOverOneInteger = []
    let i = 0
	while(i < overOneInteger){
	i = i+2;
    allOverOneInteger.push(i)
    }
  	return allOverOneInteger
}
console.log(integer(16)) */



/*let integer = (overOneInteger) =>{
	let allOverOneInteger = []
    let i = 0
	while(i < overOneInteger){
	i = i+2;
    allOverOneInteger.push(i)
    }
  	return allOverOneInteger
}
console.log(integer(20)) */



//array 1-10 ja tagastab tagurpidi 10-1
//for array.
/*function rNumber(rewNumber){
  	let rewersedNumber = [] 
  	for(let i = rewNumber.length-1; i >= 0; i--){
	rewersedNumber.push(rewNumber[i])
	}
	return rewersedNumber
}
console.log(rNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) */



/*function rNumber(rewNumber){
  	let rewersedNumber = []
    let i = rewNumber.length-1
    do{
    rewersedNumber.push(rewNumber[i])
    i--
    }while(i >= 0)
   return rewersedNumber
}
console.log(rNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) */



//Mõtle välja ülessane kus sa saad seda rakendada.
//school 7 < age < 18
/* function ageForSchool(age){
	age < 7 || age > 18 ? (
    alert `Oled liiga vana`
  ) : (alert `Oled kooli ealine`)

}
console.log(ageForSchool(9)) */
// 1 < 2 ? a = 1 : a = 2



//https://developer.mozilla.org/en-US/docs/Archive/Web/Scope_Cheatsheet
/*const exObj = {}
const exArray = [{array: []}, 2]
console.log(exArray[1])
const objectFun = {objectInObject:{arrayInObjectInObject: ["victim",]}}
console.log(objectFun.objectInObject.arrayInObjectInObject[0])*/



// htmliga teen kasti kuhu saab teksti lisada (input)
// Kui sinna tekst lisada tekib kasti alla kiri,
//et "sisestasid teksti või midagi muud"
//notepad ++ ja html-iga
//numbers and string array. Teha funktsioon, 
//mis tagastab stringid ja numbrid eraldi?
/*let mixedArrayWithStringsAndNumbers = [1, "boy", 4, "mate", "girl", 25, "buddy", 2111, 22, "friend"]
function arrayString(mixedArrayWithStringsAndNumbers){
    let arrayString = []
    let arrayNumber = []
    for(let i= 0;i < mixedArrayWithStringsAndNumbers.length; i++){     	
  	if((typeof mixedArrayWithStringsAndNumbers[i] === 'string')){
        arrayString.push(mixedArrayWithStringsAndNumbers[i])
  	}else if((typeof mixedArrayWithStringsAndNumbers[i] === 'number')){
        arrayNumber.push(mixedArrayWithStringsAndNumbers[i])
        }
	}
  	return `First array is string and its value is: ${arrayString}
 			Second array is numbers and its value is: ${arrayNumber}`
}
console.log(arrayString(mixedArrayWithStringsAndNumbers)) */



/*const numberControl = (number) => {
 	if(typeof number === "number"){
        if(number % 2 !== 0){
            return alert `Paaritu number`
        }
        else if(number/number === 1 ){
            return alert `Paaris number`   
        }
	}
    return alert `Astusid ämbri otsa või ajasid midagi sassi` 
}
numberControl(-8)*/



//Implementeerida queue ja stack. Mõlemale 3 funktsiooni.
// queuele - dequeue; enqueue ; peek
// stackile - push; peek; pop
// stack
/*function Stack(){
 	this.stack = new Array()
 	this.pop = function(){
  		return this.stack.pop()
 	}
 	this.push = function(item){
  		this.stack.push(item)
 	}
}
let stack = new Stack()
stack.push("2")
stack.push("4")
stack.push("6")
alert(stack.pop())
alert(stack.pop())
alert(stack.pop())



//queue 
function Queue(){ 
 	this.queue = new Array()
 	this.dequeue = function(){
  		return this.queue.pop() 
 	} 
 	this.enqueue = function(item){
  		this.queue.unshift(item)
 	}
}
let Q = new Queue()
Q.enqueue("1")
Q.enqueue("2")
Q.enqueue("3")
alert(Q.dequeue())
alert(Q.dequeue())
alert(Q.dequeue()) */



// dequeue 
/*function Dequeue(){
	this.queue = new Array()
   	this.popback = function(){
    	return this.queue.pop()
   	}
   	this.pushback = function(item){
    	this.queue.push(item)
   	}
   	this.popfront = function(){
    	return this.queue.shift()
   	}
   	this.pushfront = function(item){
    	this.queue.unshift(item)
   	}
}
let dequeue = new Dequeue()
dequeue.pushfront("6")
dequeue.pushfront("9")
dequeue.pushback("12")
alert(dequeue.popfront())
alert(dequeue.popback()) */



//stack peek vol 1 ja fail 
/*function Stack() {
	this.stack = new Array()
	this.size 
}
Stack.peek = function() {
  	return this.size > 0 ? this.stack[this.size-1] : undefined; } */



//queue peek vol 1 ja fail
/*function Queue() {
	this.queue = new Array()
	this.first
	this.size
}
Queue.peek = function() { 
	return this.size > 0 ? this.queue[this.first] : undefined; } */



//stack peek vol2
/*function stack(newString) {                  
    this.stackPeek = function stack(newString) {
    newString[newString.length - 1]
    }
    return newString
} */



//Queue peek vol 2
/*function queue(number) {
    this.peek = function queue(){
    	number[0]                 
    }
    return number
} */



//stack kõik koos prototypega
/*function Stack() {
	this.stack = []
}
	Stack.prototype.push = function(value) {
  		return this.stack.push(value)
}
	Stack.prototype.pop = function() {
  		return this.stack.pop()
}
	Stack.prototype.peek = function() {
  		return this.stack[this.stack.length - 1]
}
	Stack.prototype.print = function() {
  		return this.stack.join(" ")
}
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
//nt console.log
console.log(stack.peek()) */



//Queue kõik koos prototypega
/*function Queue() {
	this.queue = []
}
	Queue.prototype.enqueue = function(value) {
  		return this.queue.push(value)
}
	Queue.prototype.dequeue = function() {
  		return this.queue.shift()
}
	Queue.prototype.peek = function() {
  		return this.queue[0]
}
	Queue.prototype.print = function() {
  		return this.queue.join(" ")
}
let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
//nt console.log
console.log(queue.dequeue()) */



//Stack kõik koos classiga
/*class Stack{
	constructor(){
    	return this.stack = []
    }
  	push(value){
    	return this.stack.push(value)
    }
    pop(){
    	return this.stack.pop()
    }
    peek(){
     	return this.stack[this.stack.length - 1]
    }
    print(){
    	return this.stack.join(" ")
    }
}
let stack = new Stack() */



//Queue kõik koos classiga
/*class Queue{
	constructor(){
    	this.queue = []
    }
	enQueue(value){
    	return this.queue.push(value)	
    }
  	deQueue(){
    	return this.queue.shift()
    }
  	peek(){
    	return this.queue[0]
    }
  	print(){
    	return this.queue.join(" ")	
    }
}
let queue = new Queue() */



//Stack class funktsioon, mis kontrollib, et array pole tühi
/*class Stack{
	constructor(){
    	this.stack = []
    }
    push(value){
    	return this.stack.push(value)
    }
    pop(){
    	return this.stack.pop()
    }
    peek(){
     	return this.stack[this.stack.length - 1]
    }
    print(){
    	if(stack.length > 0 && stack != 'undefined'){
        	 return this.stack.join(" ")
        }
    return `Stack is EMPTY.`
    }
  	isEmpty(){
   		return this.stack == 0 
    }
}
let stack = new Stack() */



//Queue class funktsioon ei ole tühi
/*class Queue{
	constructor(){
    	this.queue = []
    }
	enQueue(value){
    	return this.queue.push(value)	
    }
  	deQueue(){
    	return this.queue.shift()
    }
  	peek(){
    	return this.queue[0]
    }
  	print(){
    	if(queue.length > 0 && queue != 'undefined'){
        	 return this.queue.join(" ")
        }
    return `Queue is EMPTY.`	
    }
    isEmpty(){
   		return this.queue == 0 
    }
}
let queue = new Queue() */



//Stack funktsioon classis tekitada olukord, 
//kus kasutaja ei saa sisestada tühjust
/*class Stack{
	constructor(){
    	this.stack = []
    }
    push(value){
    	if(value !== 'undefined'){
    		return this.stack.push(value)
    	}
    return `Sa pole Arrayle midagi lisanud.`
    }
    pop(){
    	return this.stack.pop()
    }
    peek(){
     	return this.stack[this.stack.length - 1]
    }
    print(){
    	if(stack.length > 0 && stack != 'undefined'){
        	 return this.stack.join(" ")
        }
    return `Stack is EMPTY.`
    }
  	isEmpty(){
   		return this.stack == 0 
    }
}
let stack = new Stack() */



//Queue funktsioon classis tekitada olukord, 
//kus kasutaja ei saa sisestada tühjust
/*class Queue{
	constructor(){
    	this.queue = []
    }
	enQueue(value){
      	if(value !== 'undefined'){
    		return this.queue.push(value)
        }
    return `Sa pole Arrayle midagi lisanud`
    }
  	deQueue(){
    	return this.queue.shift()
    }
  	peek(){
    	return this.queue[0]
    }
  	print(){
    	if(queue.length > 0 && queue != 'undefined'){
        	 return this.queue.join(" ")
        }
    return `Queue is EMPTY.`	
    }
    isEmpty(){
   		return this.queue == 0 
    }
}
let queue = new Queue() */


//function sisendiks arrayNumbritega ja 
// jagub kolmega - prindib Fizz
// jagub viiega - prindib Buzz
// jagub kolme ja viiega - prindib FizzBuzz
// muul juhul prindib numbri ise

// array loomine - funktsioon - elementide arv sisendiks
// for
// while