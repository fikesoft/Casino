import Overlay from "./Overlay.js";
import SlotMachine from "./SlotMachine.js";
import Randomizer from "./Randomazier.js";
//Start js

class Game{
    constructor(){
        this.balance = 0 ;
        this.betAmount = 0;
        this.totalBet = 0;
        this.lineBets =  [0,0,0];
        this.overlay = new Overlay(this);
        this.randomizer = new Randomizer(this) ;
        this.slotMachine = new SlotMachine(this.randomizer);
    }

    setDeposit(amount){
        this.balance = amount;
        //Update display
        this.updateDisplay(amount);
    }

    updateDisplay(amount){
        const balanceElement = document.querySelector('.balance')
        balanceElement.textContent = amount;
        console.log('UPDATE-DISPLAY display updated with the ' + amount )

    }

    placeBet(lineBetIndex){
        const betAmountField = document.querySelector('#bet-amount');
        console.log('Bet amount value:', betAmountField.value); // Check if this is correct
    
        var betAmount = parseInt(betAmountField.value, 10);
        if (isNaN(betAmount)) {
            alert('Bet something')
            console.log('Bet amount is NaN, defaulting to 0');
            betAmount = 0; // Optional: Default to 0 if the input is invalid
            this.resetSelectedLineBet()
        }      
        this.lineBets[lineBetIndex-1] = betAmount
        this.calculateTotalBet()
        console.log(this.totalBet + ' TOTAL BET CALCULATED')
    }

    calculateTotalBet(){
        this.totalBet = this.lineBets.reduce((acc, betAmount) => acc + betAmount, 0);
    }   

    resetSelectedLineBet(){
        document.getElementById('bet1').classList.remove('selected')
        document.getElementById('bet2').classList.remove('selected')
        document.getElementById('bet3').classList.remove('selected')
        this.lineBets = [ 0 , 0 , 0 ]
        this.totalBet = 0;
        console.log(' RESET-SELECTED Line bets cleared')
    }

    spin() {
        if (this.totalBet <= this.balance) {
            this.balance -= this.totalBet; // Deduct total bet from balance
            this.slotMachine.spinReels();
            this.updateDisplay(this.balance);
            //Resets the line bets 
            this.resetSelectedLineBet();

        } else {
            alert("Insufficient funds!");
            this.resetSelectedLineBet();

        }
    }
}
    


export default Game;




