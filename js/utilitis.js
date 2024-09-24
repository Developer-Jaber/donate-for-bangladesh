//This Function for get input Valu for Donation card
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);

    return inputValueNumber;
}


//This function for get valu for title number for donation card
function getInnerTextValue(id){
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerTextValue);

    return innerTextNumber;
}


// This function is for navigate donate section to History section
function navigateSecttion(id){
    // set section class
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');


    const showSection = document.getElementById(id).classList.remove('hidden');

    return showSection;
}





