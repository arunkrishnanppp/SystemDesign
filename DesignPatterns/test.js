var Car = /** @class */ (function () {
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  return Car;
})();
Car.prototype.start = function () {
  console.log(''.concat(this.make, ' ').concat(this.model, ' started.'));
};
var car = new Car('VW', 'TAIGUN');
car.start();
