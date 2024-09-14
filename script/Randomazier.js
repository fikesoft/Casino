class Randomizer {
    constructor() {
        this.columnResult = [[], [], []];
        this.rowsResult = [[], [], []];
    }

    // Method to randomize images in each reel for a specified duration
    randomizeImages(listImgElements, duration) {
        return new Promise ((resolve)=>{
            let intervalCount = 0; // To track when the interval has run enough times
        const maxIntervals = duration / 500; // Calculate the number of intervals

        const interval = setInterval(() => {
            intervalCount++; // Increment on each interval

            for (let i = 0; i < listImgElements.length; i++) {
                for (let x = 0; x < listImgElements[i].length; x++) {
                    const img = listImgElements[i][x];
                    var randomImg = this.getRandomImage();
                    img.src = `/img/${randomImg}.svg`;
                }
            }

            // If the final interval has been reached, update columnResult and stop the interval
            if (intervalCount >= maxIntervals) {
                clearInterval(interval); // Stop the interval
                
                // Update columnResult with the final set of images
                for (let i = 0; i < listImgElements.length; i++) {
                    for (let x = 0; x < listImgElements[i].length; x++) {
                        const img = listImgElements[i][x];
                        this.columnResult[i][x] = img.src.split('/').pop().split('.').shift(); // Extract image name from URL
                    }
                }

                // Now calculate rowsResult based on the final columnResult
                resolve(this.columnResult)
            }

        }, 500);
        })
    }

    getRowsFromColumns(columnResultList) {
        // Ensure rowsResult is reset for every spin
        this.rowsResult = [[], [], []];

        // Outer loop to iterate over each "row" in rowsResult
        for (let row = 0; row < this.rowsResult.length; row++) {
            // Inner loop to iterate over each "column" in columnResultList
            for (let col = 0; col < columnResultList.length; col++) {
                this.rowsResult[row].push(columnResultList[col][row]); // Push values from columns to rows
            }
        }

        return this.rowsResult; // Return the rowsResult

    }

    // Returns a random image name
    getRandomImage() {
        const imageNames = ['grape','seven', 'diamond']; 
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }
}

export default Randomizer;
