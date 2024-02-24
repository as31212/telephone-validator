const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');


const telephoneValidator = (str)=>{
    if(str === ''){
        alert('Please provide a phone number');
        return;
    }
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
if(regex.test(str)){
    userInput.value = ''
    return result.innerText = `Valid US number: ${str}`;
}
else{
    userInput.value = ''
    return result.innerText = `Invalid US number: ${str}`
}
}

checkButton.addEventListener('click',()=>{
    telephoneValidator(userInput.value);
})


clearButton.addEventListener('click',()=>{
    result.innerText = '';
})