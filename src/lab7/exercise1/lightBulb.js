class LightBulb {
  constructor(div) {
    this.div = div;
    this.div.style.backgroundColor = 'white';
  }
}

const lightBulb = new LightBulb(document.querySelector('.bulb'));
