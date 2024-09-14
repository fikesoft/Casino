class Winner {
    checkWinner(selectedLines, rowArrayResult, gameInstance) {

        // Log each selected line's result
        for (let i = 0; i < selectedLines.length; i++) {
            let lineNumber = selectedLines[i];
            console.log(lineNumber  + ' ---checkWinner lineNumber ') // Get the selected line number
            console.log(rowArrayResult[lineNumber - 1]);
        }
    
        const winResult = this.checkWinLine(rowArrayResult); // Store the result of checkWinLine
        console.log('Win result:', winResult);
    
        if (winResult == null) {
            console.log('You lose');
        } else {
            // Track if any lines won
            let anyLineWon = false;
            console.log(selectedLines + ' SELECTED LINES');
    
            // Check for each selected line if it's in the win result
            selectedLines.forEach(selectedLine => {
                const winningItem = winResult.find(item => item.row === selectedLine - 1); // Adjust for zero-based indexing
                console.log(`Checking line: ${selectedLine} against win result: ${JSON.stringify(winningItem)}`);
    
                if (winningItem) {
                    let betAmount = gameInstance.getBetAmount();
                    let calculateTotalWin = gameInstance.getCurrentBalance() + (betAmount * 2);
                    gameInstance.updateDisplay(calculateTotalWin);
                    console.log(`LINE WON: ${winningItem.row + 1}`);
                    anyLineWon = true;
                }
            });
    
            // If no lines won
            if (!anyLineWon) {
                console.log('Your line didn’t win :(');
            }
        }
        ;
    }
    
    checkWinLine(rowArrayResult) {
        let winnerLine = [];
    
        // Iterate over each row in the rowArrayResult
        for (let i = 0; i < rowArrayResult.length; i++) {
            let row = rowArrayResult[i];
            
            // Check if the row contains the same image for all columns
            if (row.every(img => img === 'grape')) {
                winnerLine.push({ row: i, image: 'grape' });
            } else if (row.every(img => img === 'seven')) {
                winnerLine.push({ row: i, image: 'seven' });
            } else if (row.every(img => img === 'diamond')) {
                winnerLine.push({ row: i, image: 'diamond' });
            }
        }
    
        // Return the winnerLine array, which will contain any winning rows
        return winnerLine.length > 0 ? winnerLine : null;
    }
    
}    
   
export default Winner;


