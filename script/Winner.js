class Winner {
    checkWinner(selectedLines, rowArrayResult, gameInstance) {
        for (let i = 0; i < selectedLines.length; i++) {
            let lineNumber = selectedLines[i];
            console.log(lineNumber + ' ---checkWinner lineNumber ');
            console.log(rowArrayResult[lineNumber - 1]);
        }

        const winResult = this.checkWinLine(rowArrayResult);
        console.log('Win result:', winResult);

        if (winResult == null) {
            console.log('You lose');
        } else {
            let anyLineWon = false;
            console.log(selectedLines + ' SELECTED LINES');

            selectedLines.forEach(selectedLine => {
                const winningItem = winResult.find(item => item.row === selectedLine - 1);
                console.log(`Checking line: ${selectedLine} against win result: ${JSON.stringify(winningItem)}`);

                if (winningItem) {
                    let betAmount = gameInstance.getBetAmount();
                    let calculateTotalWin = gameInstance.getCurrentBalance() + (betAmount * 2);
                    gameInstance.updateDisplay(calculateTotalWin);
                    console.log(`LINE WON: ${winningItem.row + 1}`);
                    anyLineWon = true;

                    // Trigger the winner animation
                    this.winnerResultEffect(selectedLine);
                }
            });

            if (!anyLineWon) {
                console.log('Your line didn’t win :(');
            }
        }
    }

    checkWinLine(rowArrayResult) {
        let winnerLine = [];

        for (let i = 0; i < rowArrayResult.length; i++) {
            let row = rowArrayResult[i];
            if (row.every(img => img === 'grape')) {
                winnerLine.push({ row: i, image: 'grape' });
            } else if (row.every(img => img === 'seven')) {
                winnerLine.push({ row: i, image: 'seven' });
            } else if (row.every(img => img === 'diamond')) {
                winnerLine.push({ row: i, image: 'diamond' });
            }
        }

        return winnerLine.length > 0 ? winnerLine : null;
    }

    winnerResultEffect(selectedLine) {
        // Highlight the winning line or show an animation
        console.log(`Triggering winner effect for line: ${selectedLine}`);

        const winningElement = document.getElementById(`line-${selectedLine}`);
        if (winningElement) {
            winningElement.classList.add('winner-flash');

            // Remove the effect after 3 seconds
            setTimeout(() => {
                winningElement.classList.remove('winner-flash');
            }, 3000);
        }
    }
}

export default Winner;
