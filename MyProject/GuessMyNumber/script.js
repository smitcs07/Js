'use script';
/*
// console.log(document.querySelector('.message')); poora message show karega with tag 

console.log(document.querySelector('.message').textContent); // only content show karega andar ka

// Dom Document object model 

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

const x = function(){
    console.log(23);
}

document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); // String but have to typecast so use Number function()
    if(!guess){ //ye ! operator esliye hai taaki wo zero ko false n samjhe 
        console.log(document.querySelector('.message').textContent = "😢 No number");
    }
    else if(guess == secretNumber ){
        document.querySelector('.message').textContent = '🎉Correct Number';

        document.querySelector('.body').Style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
    }
});