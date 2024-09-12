class SlotMachine {
    constructor(randomizerInstance) {
        this.columnContent = document.querySelectorAll('.column-content');
        this.randomizerInstance = randomizerInstance;
        this.columnsImgList = [[], [], []];
    }

    spinReels(selectedLines,winnerInstance,gameInstace) {
        // Iterate over each columnContent element
        this.columnContent.forEach((columnContentElement, columnIndex) => {
            // Get all img elements within the current columnContent element
            const columnImg = columnContentElement.querySelectorAll('img');

            // Iterate over each img element
            columnImg.forEach((img) => {
                // Categorize the img element based on columnIndex
                if (columnIndex % 3 === 0) {
                    this.columnsImgList[0].push(img);
                } else if (columnIndex % 3 === 1) {
                    this.columnsImgList[1].push(img);
                } else if (columnIndex % 3 === 2) {
                    this.columnsImgList[2].push(img);
                }
            });

        });

        //Randomize
        // Call randomizeImages and wait for columnResult to be returned
        this.randomizerInstance.randomizeImages(this.columnsImgList, 2000)
        .then(columnResult => {
            // You can now use columnResult here and call getRowsFromColumns
            var rowsResult = this.randomizerInstance.getRowsFromColumns(columnResult);
            console.log(rowsResult)
            //Winner
            winnerInstance.checkWinner(selectedLines,rowsResult,gameInstace);
        });    
    }
}

export default SlotMachine;
