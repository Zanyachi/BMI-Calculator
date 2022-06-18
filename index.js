// variables for the DOM
const result = document.querySelector('.result');
const btn = document.querySelector('#btn');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const stats = document.querySelector('.status');

// the event handlers
btn.addEventListener('click', function(){
    result.textContent = getResult(weight.value, height.value);
})

// functions
function getResult(wht, hgt){
    return parseFloat(wht / (hgt * 2)).toFixed(1);
}

// conditionals
if (result.textContent == 0) {
    result.style.color = 'black';
    stats.textContent = 'height must be in meters';
}
else if (result.textContent <= 18.4) {
    result.style.color = 'red';
    stats.textContent = 'underweight';
}
else if (result.textContent >= 25.0) {
    result.style.color = 'red';
    stats.textContent = 'overweight'
}
else {
    result.style.color = 'green';
    stats.textContent = 'normal';
}