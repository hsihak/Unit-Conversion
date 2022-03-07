let userInput = document.querySelector('#user-input');

let lengthConversion = document.querySelector('#length-conversion');
let volumeConversion = document.querySelector('#volume-conversion');
let massConversion = document.querySelector('#mass-conversion');

let errorInput = document.querySelector('#error-input');

userInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' && userInput.value > 0) {
        
        // Length (Meter / Feet)
        lengthConversion.textContent = `${userInput.value} meters = ${(userInput.value * 3.28084).toFixed(3)} feet | ${userInput.value} feet = ${(userInput.value * 0.3048).toFixed(3)} meters`;

        // Volume (Liters / Gallons)
        volumeConversion.textContent = `${userInput.value} liters = ${(userInput.value * 0.264172).toFixed(3)} gallons | ${userInput.value} gallons = ${(userInput.value * 3.78541).toFixed(3)} liters`;

        // Mass (Kilograms / Pounds)
        massConversion.textContent = `${userInput.value} kilos = ${(userInput.value * 2.20462).toFixed(3)} pounds | ${userInput.value} pounds = ${(userInput.value * 0.453592).toFixed(3)} kilos`;
        resetMessage();

    } else {
        errorInput.textContent = 'Please enter a Number ! :)'
    }
});

let resetMessage = ('reset', ()=> {
    errorInput.textContent = "";
});