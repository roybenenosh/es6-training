class Car {
  constructor(color, score) {
    this.color = color;
    this.score = score;
  }
}

class Race {
  constructor(...cars) {
    this.cars = cars;
    this.winner = this.cars.sort((c1, c2) => {
      return c1.score < c2.score;
    })[0];
  }

  getWinner() {
    return this.winner.color;
  }

  add(car) {
    this.cars.push(car);
    this.winner = this.cars.sort((c1, c2) => {
      return c1.score - c2.score;
    })[0];
  }
}

const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

console.log(race.getWinner());
