class Winner {
    checkWinner(selectedLines, rowArrayResult) {

        // Loop over each selected line
        for (let i = 0; i < selectedLines.length; i++) {
            let lineNumber = selectedLines[i]; // Get the selected line number
                console.log(rowArrayResult[lineNumber-1])
                console.log( this.checkWinLine(rowArrayResult))

            }
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


