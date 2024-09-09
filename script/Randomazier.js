class Randomizer {
    // Method to randomize images in each reel for a specified duration
    randomizeImages(listImgElements, duration) {
        const interval = setInterval(() => {
            listImgElements[0].forEach(img => {
                img.src = `/img/${this.getRandomImage()}.svg`;
            });
            listImgElements[1].forEach(img => {
                img.src = `/img/${this.getRandomImage()}.svg`;
            });
            listImgElements[2].forEach(img => {
                img.src = `/img/${this.getRandomImage()}.svg`;
            });
        }, 500); // Change image every 100ms for a spinning effect
        
        setTimeout(() => {
            clearInterval(interval); // Stop after duration ends
        }, duration);
    }

    // Returns a random image name
    getRandomImage() {
        const imageNames = ['grape', 'seven', 'diamant']; 
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }
}
export default Randomizer;