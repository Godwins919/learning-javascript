function sing() {
    console.log("ba la ba la")
}
sing()
function swim() {
    console.log("swim")
}
swim()
function dance() {
    console.log("dance")
}
dance()
// functions with perameters
function subtract(z, x) {
    console.log(z - x)
}
subtract(15, 5)
// addition
function add(a, b) {
    console.log(a + b)
}
add(10, 20)
// multiplication
function multiply(g, h) {
    console.log(g * h)
}
multiply(10, 20)
// division
function divide(i, j) {
    console.log(i / j)
}
divide(100, 10)
function convertkilogramstograms(kilograms) {
    let grams = kilograms * 10
    return grams

}
convertkilogramstograms(1)
console.log(convertkilogramstograms(1))
// function meters to meters squared


// function that calculates body mass index
function calculateBMI(weight, height) {
let bmi= weight / (height * height)
return bmi
}
let weight = 70 
let height = 1.75 
let bmi = calculateBMI(weight, height)
console.log("Your BMI is: " + bmi.toFixed(2)) 
// function that calculates fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9 
    return celsius
}
let fahrenheit = 100
console.log(fahrenheitToCelsius(100))
// function that calculates the area of a circle
function AreaofaCircle(radius){
    let area = Math.PI * radius * radius
    return area
}
console.log(AreaofaCircle(2))
// raduis in meters
function AreaofaCircle(radiusInMeters){
    let radiusInCentimeters = radiusInMeters * 100
    let area = Math.PI * (radiusInCentimeters * radiusInCentimeters)
    return area
}
console.log(AreaofaCircle(0.02))


