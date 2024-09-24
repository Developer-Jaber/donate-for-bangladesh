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
function navigateSecttion(){
    
}



// // This function for result after updateing ballance
// function newUpdatedBallance(previusBallance,newDonateBallance){
    
//     const newAvailavleBallance  = previusBallance + newDonateBallance;
//     return newAvailavleBallance;
// }


// // Tis function for showing my balllance after donating
// function myBallanceAfterDonating(myBallance,myDonateAmount){

//     const newAvailavleBallanceAfterDonate = myBallance - myDonateAmount;
//     return newAvailavleBallanceAfterDonate;
// }