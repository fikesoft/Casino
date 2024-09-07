class Overlay{
    constructor(gameInstance){
        this.overlayElement = document.querySelector('.start-content'); 
        this.inputElement = document.querySelector('.enter-balance');
        this.startButton = document.querySelector('.start-button');
        this.game = gameInstance ;
        
        this.startButton.addEventListener('click',()=> this.handleStart())
    }

    handleStart(){
        const depositAmount = parseFloat(this.inputElement.value)
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert('Please enter a valid deposit amount');
        } else {
            this.game.setDeposit(depositAmount);
            this.overlayElement.style.display = 'none'; // Hide the overlay
        }
    }
}
export default Overlay;