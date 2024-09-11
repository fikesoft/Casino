class Randomizer {
    constructor(){
            this.columnResult = [[], [], []];
            this.rowsResult = [[],[],[]]
    }

    // Method to randomize images in each reel for a specified duration
    randomizeImages(listImgElements, duration) {
        const interval = setInterval(() => {
            //console.log(listImgElements)
            for (let i = 0; i < listImgElements.length; i++) {
                for (let x = 0; x < listImgElements[i].length; x++) {
                    //Here is a array of list [[0,3,6][1,4,7][2,5,8]]
                    const img = listImgElements[i][x];
                    var randomImg = this.getRandomImage();
                    img.src = `/img/${randomImg}.svg`;
                    
                    // Ensure columnResult[i] is initialized
                    if (!this.columnResult[i]) {
                        this.columnResult[i] = [];
                    }
                    // Set the random image in columnResult
                    this.columnResult[i][x] = randomImg;
                    
                }
            }
            
        }, 500); // Change image every 500ms for a spinning effect
        
        setTimeout(() => {
            clearInterval(interval); // Stop after duration ends
            this.getRowsFromColumns(this.columnResult)
        }, duration);
    }
    
    getRowsFromColumns(columnResultList) {
        // Outer loop to iterate over each "row" in rowsResult
        for (let row = 0; row < this.rowsResult.length; row++) {
            // Inner loop to iterate over each "column" in columnResultList
            for (let col = 0; col < columnResultList.length; col++) {
                this.rowsResult[row].push(columnResultList[col][row]); // Push values from columns to rows
            }
        }

        console.log(this.rowsResult);
    }
 

    // Returns a random image name
    getRandomImage() {
        const imageNames = ['grape', 'seven', 'diamond']; 
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }
}

export default Randomizer;