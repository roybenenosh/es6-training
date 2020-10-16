class LightBulbChild  {
  constructor(parent, child) {
    this.child = child;
    parent.appendChild(this.child);
    this.child.style.height = '25%';
    this.originalBackground = parent.style.backgroundColor;
    this.onBulbClick = this.onBulbClick.bind(this);
  
    this.child.addEventListener('click', this.onBulbClick);
  }

  onBulbClick() {
    if (this.child.style.backgroundColor === 'yellow') {
      this.off();
    } else {
      this.on();
    }
  }

  on() {
    this.child.style.backgroundColor = 'yellow';
  }

  off() {
    this.child.style.backgroundColor = this.originalBackground;
  }
}

let children = [];

for (let index = 0; index < 4; index++) {
  let parent = document.querySelector('.bulb');
  let child = document.createElement('div');
  child.id = index;
  children.push(new LightBulbChild(parent, child));
}
