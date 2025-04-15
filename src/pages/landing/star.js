class Star {
    constructor(size) {
        this.size = size;
  
        // Create and append the star
        this.starElement = document.createElement('span');
        this.starElement.textContent = '✦';
        this.starElement.id = 'star';
        this.starElement.style.display = 'inline-block';
        this.starElement.style.fontSize = `${this.size}px`;
        this.starElement.style.transition = 'font-size 0.2s ease';
        document.body.appendChild(this.starElement);
    }
  
    drawTinkleStar() {
        this.starElement.style.fontSize = `${this.size}px`;
    }
  }
  
    // Create the star
    const star = new Star(50);
    star.drawTinkleStar();
  
    // Resize on scroll
    document.addEventListener('scroll', () => {
        const newSize = Math.max(20, window.scrollY % 100);
        star.size = newSize;
        star.drawTinkleStar();

    document.addEventListener('click', () => {
        star.style.transform = "rotate(30deg)";
        star.drawTinkleStar();
    })
  });
  