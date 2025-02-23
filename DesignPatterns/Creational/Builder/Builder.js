/*

Product : Class in which the complex object to  be created, It often have nemours optional parameters
*/
class House {
  constructor() {
    this.floors = 0;
    this.windows = 0; 
    this.doors = 0;
    this.hasGarage = false;
    this.hasSwimmingPool = false;
    this.hasGarden = false;
  }
  showDetails() {
    console.log(`House Details:
      Number of floors : ${this.floors}
      Windows: ${this.windows}
      Doors: ${this.doors}
      Garage: ${this.hasGarage ? 'Yes' : 'No'}
      Swimming Pool: ${this.hasSwimmingPool ? 'Yes' : 'No'}
      Garden: ${this.hasGarden ? 'Yes' : 'No'}
      `);
  }
} 

// const house = new House();
// house.showDetails();

/*
Builder
This interface define the steps to construct the Product , each set represented by method in interface

ConcreteBuilder: Generally we will have implementation for the Builder interface , concreteBuilder
Director: This class orcastrate the process by involing the methods on builder


Client : Client Code is responsible for creating the director and configure with spciefic concreteBuilder to construct the product 

*/
class HouseBuilder {
  constructor() {
    this.house = new House();
  }
  setFloors(floors) {
    this.house.floors = floors;
    return this;
  }
  setWindows(windows) {
    this.house.windows = windows;
    return this;
  }
  setDoors(doors) {
    this.house.doors = doors;
    return this;
  }
  setHasGarden(hasGarden) {
    this.house.hasGarden = hasGarden;
    return this;
  }
  setHasGarage(hasGarage) {
    this.house.hasGarage = hasGarage;
    return this;
  }
  setHasSwimmingPool(hasSwimmingPool) {
    this.house.hasSwimmingPool = hasSwimmingPool;
    return this;
  }

  build() {
    return this.house;
  }
}

const houseBuilder = new HouseBuilder();
const house = houseBuilder.setFloors(1).setWindows(3).setDoors(2).build();
house.showDetails();
