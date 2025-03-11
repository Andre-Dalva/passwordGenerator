const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "@#$%&~!-=_*"

function generate(elements, size){
    let password = "";
    const max = elements.length;
    let element;

    for(let i = 0; i < size; i++){
        element = elements[Math.floor(Math.random()*max)];
        password += element;
    }

    result.textContent = `"${password}"`;
}

function checkRequirements(){
    const hasLowerCase = document.getElementById("lowerCase");
    const hasUpperCase = document.getElementById("upperCase");
    const hasNumbers = document.getElementById("numbers");
    const hasSymbols = document.getElementById("symbols");
    const result = document.getElementById("result");
    const size = Number(document.getElementById("size").value);

    const elements = [];

    if(hasSymbols.checked) elements.push(...symbols);
    if(hasUpperCase.checked) elements.push(...(letters.toUpperCase()));
    if(hasNumbers.checked) elements.push(...numbers);
    if(hasLowerCase.checked) elements.push(...letters);

    //In case we select nothing or the size is too large.
    if(!(hasLowerCase.checked) && !(hasNumbers.checked) && !(hasUpperCase.checked) && !(hasSymbols.checked)){
        result.textContent = "Select an option.";
        return 0;
    }
    if(7>size || size>23){
        result.textContent = "Size between 8-23";
        return 0;
    }
    
    generate(elements, size);
}