class Car {
  constructor(color, score) {
    this.color = color;
    this.score = score;
  }
}

class Race {
  constructor(car1, car2) {
    this.car1 = car1;
    this.car2 = car2;
    this.winner = car1.score > car2.score ? car1 : car2;
  }

  getWinner() {
    return this.winner.color;
  }

  add(car) {
    // some logic here
  }
}

const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

console.log(race.getWinner());
