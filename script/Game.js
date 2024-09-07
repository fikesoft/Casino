import Overlay from "./Overlay.js";
//Start js

class Game{
    constructor(){
        this.balance = 0 ;
        this.betAmount = 0;
        this.totalBet = 0;
        this.lineBet = [0,0,0];
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

    
}

export default Game;




