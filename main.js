// let obj = {
//     name: "Shafiq",
//     location: "Seattle",
//     job: "frontend developer"
// }

// obj.name = "Abu"

// console.log(obj.name);
// console.log(obj["name"]);

// function fullNameWithArgs (firstname, lastname = "Akiya") {
//     return firstname + " " + lastname;

// }

// let start = 0
// let completed = 0

// if (start && completed) {
//     console.log("Both are true")
// }
// else if (!start && !completed) {
//     console.log("Nothing started");
// }
// else {
//     console.log("somewhere not true");
// }

// let grade = "A";

//if else can be too tedious
// if (grade == "A") {
//     console.log("90 - 100");
// }
// else if (grade == "B") {
//     console.log("70-89");
// }

// //use switch statement
// switch (grade) {
//     case "A" :
//         console.log("90 - 100");
//         break;

//     case "B" :
//         console.log("70 - 89");
//         break;

//     case "C" :
//         console.log("50 - 69");
//         break;
    
//     case "D" :
//         console.log("40 - 49");
//         break;

//     default :
//         console.log("not in grade list");
// }

// let sentence = "I am buying";

// // console.log(sentence.startsWith("I"));
// // console.log(sentence.endtsWith("g"));

// console.log(sentence.charAt(0) == "I");
// console.log(sentence.charAt(sentence.length - 1) == "g");

// console.log(sentence.length);

/**
 * Prompt the user for a number, then console.log its ordinal version. 
 * For example, if the user inputs 1, the result should be "1st". 
 * If the user inputs 10, the result should be "10th". 
 * If the user inputs 421, the result should be "421st". 
 * Hint: There is a function that can return the character at a specified position 
 * in a string. 
 * Search Google / MDN for 'javascript string methods' if you need to.
 */

// let inputNumber = prompt("Please enter any number")

// if (inputNumber .charAt(inputNumber.length - 1) == "1") {
//     alert(inputNumber + "st")
// }
// else if (inputNumber .charAt(inputNumber.length - 1) == "2") {
//     alert(inputNumber + "nd")
// }
// else if (inputNumber .charAt(inputNumber.length - 1) == "3") {
//     alert(inputNumber + "rd")
// }

// console.log(inputNumber.length - 1);

// inputNumber.endsWith(2)

/**
 * Write an if statement that works with a noun and a number. 
 * Make the noun plural if necessary!! Make this as accurate as possible 
 * (e.g. use the rules described here) http://blog.writeathome.com/index.php/2011/12/how-to-make-nouns-plural/
 */


// let word = "apple"
// let noun = prompt("Enter any of these words below (apple, casinos, ability")
// let number = 3

// if (noun === "apple" || noun === "casino") {
//     noun = noun.concat("s");
//     console.log(noun);
// }
// else if (noun == "ability"){
//     noun.replaceAt(6, "ies")
// }


//Another exercise
// let userInput = "s    "
// let trimmed = userInput.trim()
// console.log(trimmed);

// if (!trimmed.length) {
//     console.log("Fine, be that way!");
// }

//Loops in JS
// 1) if else
//2) for of
//3) for in
//3) for each
//4) maps
//5) filter
//6) find
//7) findindex

// EX #1
// let arr = ["Abu", "Bakar", "Azpili", "Cunha"]
// // arr[5] = "Salah"

// arr.push("Salah") //adds new value in an array

// arr.shift() //removes the first value in array

// arr.unshift("Jota") //add the first value in array

// arr.pop() //removes the last value in array

// arr.slice(2, 1) // 2 is the starting position, 1 is how many you want to remove

// arr.slice(2, 0, "Mane", "Bobby") // 2 is the starting position, 0 is not removing but wanting to add

// for (let x = arr.length; x >= 0; x--) {
//     console.log(arr[x]);
// }

//Exercise LOop / modulus

// for (let x = 1; x <= 20; x++) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
// }

// ==============================================

// Get DOM object city-form ID, which is on the form element


  // True form submissions go to a backend service, but we want to handle things in the front-end. How can we do this?

  // Get the text input fields values with .value on the input - but how exactly?

  // You always want to scan and clean data when you get it from the browser, think about .trim and .toLowerCase - this will make your conditional detection more consistent


// This about conditional logic. We want to check through each possible input a user gives us to make this work properly. Think about conditional statements, going through the list of possible city options.

// If a user gives us 'Austin' versus 'austin' - how can we make those point to the same background? 

// We know we want to change the background on the page by switching classes. But how do we replace one class with another using JS???

let places = {
    tokyo : "https://stillmed.olympics.com/media/Images/OlympicOrg/News/2021/03/11/2020-03-11-Session-Tokyo-thumbnail.jpg",
    sydney : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/sydney.jpg",
    nyc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/nyc.jpg",
    sf : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/sf.jpg",
    la: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/la.jpg",
    austin: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/austin.jpg"
}



document.querySelector("#submit-btn").addEventListener("click", function() {
    // console.log(e.target.value)

    let userInput = document.querySelector("#city-type").value;
    userInput = userInput.trim()

    // console.log(userInput);

    if (userInput == "tokyo" || userInput == "Tokyo" || userInput == "TOKYO" ) {
        document.querySelector("body").style.backgroundImage = "url(" + places.tokyo + ")";
    }
    else if (userInput == "sydney" || userInput == "Sydney" || userInput == "SYDNEY" ) {
        document.querySelector("body").style.backgroundImage = "url(" + places.sydney + ")";
    }
    else if (userInput == "new york" || userInput == "New York" || userInput == "NEWYORK" || userInput === "nyc" || userInput === "NYC" || userInput === "NY" ) {
        document.querySelector("body").style.backgroundImage = "url(" + places.nyc + ")";
    }
    else if (userInput === "san francisco" || userInput === "San Francisco" || userInput === "SANFRANCISCO" || userInput === "sfc" || userInput === "sf" || userInput === "san fc" ) {
        document.querySelector("body").style.backgroundImage = "url(" + places.sf + ")";
    }
    else if (userInput === "los angeles" || userInput === "Los Angeles" || userInput === "LA" || userInput === "la" || userInput === "las" || userInput === "Las" ) {
        document.querySelector("body").style.backgroundImage = "url(" + places.la + ")";
    }
    else if (userInput === "austin" || userInput === "Austin" || userInput === "AUSTIN") {
        document.querySelector("body").style.backgroundImage = "url(" + places.austin + ")";
    }
})