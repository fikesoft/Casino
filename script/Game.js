import Overlay from "./Overlay.js";
//Start js

class Game{
    constructor(){
        this.balance = 0 ;
        this.betAmount = 0;
        this.totalBet = 0;
        this.lineBets = [0,0,0];
        this.overlay = new Overlay(this);
    }

    setDeposit(amount){
        this.balance = amount;
        //Update display
        this.updateDisplay(amount);
    }

    updateDisplay(amount){
        const balanceElement = document.querySelector('.balance')
        balanceElement.textContent = amount;
    }

    placeBet(lineBetIndex){
        const betAmountField = document.querySelector('#bet-amount');
        console.log('Bet amount value:', betAmountField.value); // Check if this is correct
    
        var betAmount = parseInt(betAmountField.value, 10);
        if (isNaN(betAmount)) {
            console.log('Bet amount is NaN, defaulting to 0');
            betAmount = 0; // Optional: Default to 0 if the input is invalid
        }      
        this.lineBets[lineBetIndex-1] = betAmount
        this.calculateTotalBet()
        console.log(this.totalBet)
    }

    calculateTotalBet(){
        this.totalBet = this.lineBets.reduce((acc, betAmount) => acc + betAmount, 0);
    }   

    
}

export default Game;




