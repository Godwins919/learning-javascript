// function that called greetUser takes a name and returns a greeting
function greetUser(name) {
    return "hi," + name
}
console.log(greetUser("Godwins"))
// function that calculatesAreaofacircle that takes a radius and returns the area of a circle
function calculatesAreaofacircle(radius) {
    return Math.PI * radius * radius
}
console.log(calculatesAreaofacircle(2))
// function that is a Even or Odd Checker that takes a number and returns whether it is even and false if odd
function EvenorOddChecker(number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(EvenorOddChecker(4))
// function called findMax that takes three numbers and returns the largest number
function findMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2
    }
    else {
        return num3
    }
}
console.log(findMax(10, 20, 30))
// function called reverseString that takes a string and returns the reversed string
function reverseString(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString("interview"))
// function called StrongPassword that takes a passwordstring and checks if its at 8 characters, has one number , and one uppercase letter
function StrongPassword(password) {
    // check if password is at least 8 characters ,has one number, and one uppercase letter
    if (password.length < 8) {
        return false
    }
    if (!/[A-Z]/.test(password)) {
        return false
    }
    if (!/[0-9]/.test(password)) {
        return false
    }
    return true
}
console.log(StrongPassword("XGodwins2"))
// function called sumArray that takes an array of numbers and returns the sum
function sumArray(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5]))
// function capitalizeWords that takes a sentence and returns the same sentence with each word capitalized
function capitalizeWords(sentence) {
    return sentence.split('').map(word =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase())
        .join('');
}
const sentence ="hi godwins";
const capitalized = capitalizeWords(sentence);
console.log(capitalized);//
output: "Hi Godwins"


