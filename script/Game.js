    import Overlay from "./Overlay.js";
    import SlotMachine from "./SlotMachine.js";
    import Randomizer from "./Randomazier.js";
    import Winner from "./Winner.js";
    //Start js
    class Game {
        constructor() {
            this.balance = 0;
            this.betAmount = 0;
            this.totalBet = 0;
            this.lineBets = [0, 0, 0];
            this.selectedLines = [];
    
            this.winner = new Winner(this);
            this.overlay = new Overlay(this);
            this.randomizer = new Randomizer(this);
            this.slotMachine = new SlotMachine(this.randomizer);
        }
    
        setDeposit(amount) {
            console.log(`Initial deposit: ${amount}`);
            this.balance = amount;
            this.updateDisplay(amount);
        }
    
        updateDisplay(amount) {
            const balanceElement = document.querySelector('.balance');
            balanceElement.textContent = amount;
            console.log(`UPDATE-DISPLAY: Display updated with balance ${amount}`);
        }
    
        getCurrentBalance() {
            const balanceElement = document.querySelector('.balance');
            var currentBalance = balanceElement.textContent;
            return parseInt(currentBalance, 10); // Ensure we're getting a valid number
        }
    
        getBetAmount() {
            const betAmountField = document.querySelector('#bet-amount');
            const betAmount = parseInt(betAmountField.value, 10);
            console.log(`getBetAmount: Bet amount field value: ${betAmount}`);
    
            if (isNaN(betAmount) || betAmount <= 0) {
                console.warn('Invalid bet amount. Returning 0.');
                return 0;
            }
    
            return betAmount;
        }
    
        placeBet(lineBetIndex) {
            console.log(`placeBet: Placing bet on line ${lineBetIndex}`);
            let betAmount = this.getBetAmount();
    
            if (betAmount === 0) {
                alert('Bet something!');
                console.log('Bet amount is invalid, resetting bets.');
                this.resetSelectedLineBet();
                return;
            }
    
            // Check if line is already selected
            if (!this.selectedLines.includes(lineBetIndex)) {
                this.selectedLines.push(lineBetIndex);
            }
    
            // Update the line bet
            this.lineBets[lineBetIndex - 1] = betAmount;
            console.log(`placeBet: Updated lineBets: ${this.lineBets}`);
    
            this.calculateTotalBet();
            console.log(`placeBet: TOTAL BET CALCULATED: ${this.totalBet}`);
        }
    
        calculateTotalBet() {
            this.totalBet = this.lineBets.reduce((acc, betAmount) => acc + betAmount, 0);
            console.log(`calculateTotalBet: Total bet calculated: ${this.totalBet}`);
        }
    
        resetSelectedLineBet() {
            console.log('resetSelectedLineBet: Clearing selected line bets.');
            document.getElementById('bet1').classList.remove('selected');
            document.getElementById('bet2').classList.remove('selected');
            document.getElementById('bet3').classList.remove('selected');
            this.lineBets = [0, 0, 0];
            this.totalBet = 0;
            this.selectedLines = [];
            console.log('resetSelectedLineBet: Line bets cleared.');
        }
    
        spin() {
            console.log(`spin: Current balance: ${this.balance}, total bet: ${this.totalBet}`);
    
            if (this.totalBet > this.balance) {
                alert('Insufficient funds!');
                console.error(`spin: Not enough balance! Current balance: ${this.balance}, total bet: ${this.totalBet}`);
                this.resetSelectedLineBet();
                return;
            }
    
            this.balance -= this.totalBet; // Deduct total bet from balance
            console.log(`spin: Deducted ${this.totalBet} from balance. New balance: ${this.balance}`);
    
            this.slotMachine.spinReels(this.selectedLines, this.winner, this);
            this.updateDisplay(this.balance);
            this.resetSelectedLineBet();
        }
    }
    
    export default Game;
    