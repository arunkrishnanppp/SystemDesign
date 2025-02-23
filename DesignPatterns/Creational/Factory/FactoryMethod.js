// Product Interface (Vehicle)
class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract class 'Vehicle' cannot be instantiated directly.");
    }
  }

  startEngine() {
    throw new Error("Abstract method 'startEngine' must be implemented.");
  }
}

// Concrete Products (Car and Bike)
class Car extends Vehicle {
  startEngine() {
    return 'Car engine started!';
  }
}

class Bike extends Vehicle {
  startEngine() {
    return 'Bike engine started!';
  }
}

class VehicleFactory {
  createVehicle(type) {
    let vehicle;

    if (type === 'car') {
      vehicle = new Car();
    } else if (type === 'bike') {
      vehicle = new Bike();
    } else {
      throw new Error('Vehicle type not supported');
    }

    return vehicle;
  }
}
// Client code
const factory = new VehicleFactory();

const car = factory.createVehicle('car');
console.log(car.startEngine()); // Output: Car engine started!

const bike = factory.createVehicle('bike');
console.log(bike.startEngine()); // Output: Bike engine started!
