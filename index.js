/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const buttonEl = document.getElementById("button-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")



let feet = 3.281 
let gallon = 0.264 
let pound = 2.204 


buttonEl.addEventListener("click", () => {
    baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * feet).toFixed(3)} feets | ${baseValue} feets = ${(baseValue / feet).toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * gallon).toFixed(3)} gallons | ${baseValue} gallon = ${(baseValue / gallon).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * feet).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / feet).toFixed(3)} kilograms`
    
})

