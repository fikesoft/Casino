class BetButton{
    constructor(buttonElement,gameInstace,lineIndex){
        this.buttonElement = buttonElement;
        this.lineIndex = lineIndex;
        this.gameInstace = gameInstace;
        this.buttonElement.addEventListener('click',()=>this.toggleBet())
    }
    toggleBet(){
        
            this.buttonElement.classList.toggle('selected')
            if(this.buttonElement.classList.contains('selected')){
                console.log('button is selected')
                this.gameInstace.placeBet(this.lineIndex)
            }  
    }

   
}

export default BetButton    