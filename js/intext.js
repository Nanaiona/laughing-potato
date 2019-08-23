

/*var currentDate = new Date();

window.alert(currentDate);
console.log(currentDate);
*/

var favKittyNames = ["Kittina", "Mr. Purrito", "Meolf Kitler", "Purrstain"];

for(var i = 0; i < favKittyNames.length; i++) {
	document.write(favKittyNames[i]);
	document.write("<br>");
}

document.write("<br><br>");

var myFriends = [
	["Mr. Barr", "Camel", 1.5],
	["Madam Shark", "Shark", 0.3],
	["Mr. Spi Dee", "Spider", "Unknown"]
];
document.write(myFriends[2][2]);
document.write("<br><br>");

let animalFriend = {
	name: "Mr. Barr",
	age: 1.3,
	isCamel: true
};

console.log(animalFriend.isCamel);
console.log(animalFriend.age);
document.write(animalFriend.age);
console.log(animalFriend["isCamel"]);

let massiv = ['kittycat.jpg', 'doggydog.jpg', 'sharkyshark.png', 'camelycamel.png'];

console.log(massiv[2]);

//alert('Hello kitty!');
// let answer = confirm("Are you sure?");

// console.log(answer);

// let answer = prompt("Write your favourite color here", "");
// let answer = prompt("Are you sure", "Yes");
// console.log(answer);
console.log(typeof(animalFriend));
console.log(typeof(null));
console.log("animalFriend" + "is my friend");

let a = 459,
	b = 1568;

a ++;
console.log(a, b);

console.log(a % 5);

console.log("2" == 2);
console.log(a == 2);


console.log(typeof(a));
console.log(typeof(2));

console.log("2" === 2);

let c = true,
	d = false;

console.log(c && d);
console.log(c || d);
console.log(c && !d);

if(5*340 == 95) {
	console.log("Верно!")
} else {
	console.log("Не верно!")
}

/* let num = 4096;
if(num < 50) {
	console.log("This is false")
} else if(num > 560) {
	console.log("This is also false!")
} else {
	console.log("This is true")
}
*/

let y = 10;

switch(true) {
	case y < 67:
		console.log("Wrong!");
		break;
	case y > 1009:
		console.log("Also wrong!");
		break;
	case y < 567:
		console.log("Very much wrong!");
		break;
    case y < 9:
		console.log("Dog");
		break;
	// default:
		// console.log("Something went wrong!");
		// break;				
} 

var z = 6;
switch(true) {
	case z > 3: {
		console.log("Yes!");
		break;
	}
		
	case z < 5: {
		console.log("No!");
		break;
	}
	
}

let num = 6;
if(num > 3) {
	console.log("24")
} else if(num < 5) {
	console.log("42")
} else {
	console.log("No answer!")
}