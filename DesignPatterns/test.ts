interface Vehicle {
  make: string;
  model: string;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  start(): void {
    console.log(`${this.make} ${this.model} started.`);
  }
}

const carObj = new Car('VW', 'TAIGUN');
carObj.start();
