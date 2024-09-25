document.getElementById('blog-button').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = './blog.html';
})

// // event Handeller for Home Button
// document.getElementById('home-button').addEventListener('click',function(){
//     window.location.href = 'index.html';
// })












// Declear an event handeller for Donation Page

//Event for Card:-----1
document.getElementById('donate-btn-1').addEventListener('click',function(){
    // get the donate ballance input value frome card 1
    const newDonateAmountCard1 = getInputValueById('donate-value-card1');

    // get my current balllance
    const myCurrentBallance = getInnerTextValue('my-current-ballence');

    
        if(isNaN(newDonateAmountCard1)){
            alert('The donate amount is not valid!');
            return
        }else if(newDonateAmountCard1 > myCurrentBallance){
            alert("You don't have enugh ballance!!!");
        }else if(newDonateAmountCard1 < 0){
            alert('The donate amount is not valid!!')
        }else if(newDonateAmountCard1 === 0){
            alert('The donate amount is not valid!!')
        }else{
            // get new ballance after donate
        const myNewBallance = myCurrentBallance - newDonateAmountCard1;

        document.getElementById('my-current-ballence').innerText = myNewBallance;

        // get the current ballance of card 1
        const currentBallanceOfCard1 = getInnerTextValue('donate-ballance-card1');

        document.getElementById('donate-ballance-card1').innerText = currentBallanceOfCard1 + newDonateAmountCard1;

            // added transection 
            const historySection = document.getElementById('history-section');
            const p = document.createElement('p');
            p.innerHTML = `
            <div class="border-2 rounded-xl border-gray-100 my-4 py-5 px-8">
                <h1 class="text-lg font-bold">${newDonateAmountCard1} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                <p>Date: ${Date()}</p>
            </div>
            `
            historySection.appendChild(p);

            // call the modal
            my_modal_5.showModal()

        };


    })






// //Event for Card:-----2
    document.getElementById('donate-btn-2').addEventListener('click',function(){
      // get the donate ballance input value frome card 2
    const newDonateAmountCard2 = getInputValueById('donate-value-card2');

    // get my current balllance 
    const myCurrentBallance = getInnerTextValue('my-current-ballence');

    
        if(isNaN(newDonateAmountCard2)){
            alert('The donate amount is not valid!');
            return
        }else if(newDonateAmountCard2 > myCurrentBallance){
            alert("You don't have enugh ballance!!!");
        }else if(newDonateAmountCard2 < 0){
            alert('The donate amount is not valid!!');
        }else if(newDonateAmountCard2 === 0){
            alert('The donate amount is not valid!!');
        }else{
            // get new ballance after donate card 2
        const myNewBallance = myCurrentBallance - newDonateAmountCard2;

        document.getElementById('my-current-ballence').innerText = myNewBallance;

        // get the current ballance of card 2
        const currentBallanceOfCard2 = getInnerTextValue('donate-ballance-card2');

        document.getElementById('donate-ballance-card2').innerText = currentBallanceOfCard2 + newDonateAmountCard2;

                 // added transection 
            const historySection = document.getElementById('history-section');
            const p = document.createElement('p');
            p.innerHTML = `
            <div class="border-2 rounded-xl border-gray-100 my-4 py-5 px-8">
                <h1 class="text-lg font-bold">${newDonateAmountCard2} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
                <p>Date: ${Date()}</p>
            </div>
            `
            historySection.appendChild(p);



            // call the modal
            my_modal_5.showModal()
        };

    });




    // //Event for Card:-----3
    document.getElementById('donate-btn-3').addEventListener('click',function(){
        // get the donate ballance input value frome card 2
        const newDonateAmountCard3 = getInputValueById('donate-value-card3');

        // get my current balllance 
        const myCurrentBallance = getInnerTextValue('my-current-ballence');

        
            if(isNaN(newDonateAmountCard3)){
                alert('The donate amount is not valid!');
                return
            }else if(newDonateAmountCard3 > myCurrentBallance){
                alert("You don't have enugh ballance!!!");
            }else if(newDonateAmountCard3 < 0){
                alert('The donate amount is not valid!!');
            }else if(newDonateAmountCard3 === 0){
                alert('The donate amount is not valid!!');
            }else{
                // get new ballance after donate card 2
            const myNewBallance = myCurrentBallance - newDonateAmountCard3;

            document.getElementById('my-current-ballence').innerText = myNewBallance;

            // get the current ballance of card 2
            const currentBallanceOfCard3 = getInnerTextValue('donate-ballance-card3');

            document.getElementById('donate-ballance-card3').innerText = currentBallanceOfCard3 + newDonateAmountCard3;



                        // added transection 
                    const historySection = document.getElementById('history-section');
                    const p = document.createElement('p');
                    p.innerHTML = `
                    <div class="border-2 rounded-xl border-gray-100 my-4 py-5 px-8">
                        <h1 class="text-lg font-bold">${newDonateAmountCard3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                        <p>Date: ${Date()}</p>
                    </div>
                    `
                    historySection.appendChild(p);


                    // call the modal
                    my_modal_5.showModal()

            };

    });





