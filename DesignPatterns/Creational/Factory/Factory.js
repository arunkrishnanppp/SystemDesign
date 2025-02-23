//Product Interface
class Burger {
  constructor(incredients) {
    this.incredients = incredients;
  }
  print() {
    console.log(this);
  }
}

// Creator
class BurgerFactory {
  constructor() {
    console.log('BurgerFactory Init');
  }
  getNormalBurger() {
    const incredients = ['Bread', 'Meat'];
    return new Burger(incredients);
  }
  getCheeseBurger() {
    const incredients = ['Bread', 'Meat', 'Cheese'];
    return new Burger(incredients);
  }
}

//client code
const burgerFactory = new BurgerFactory();

burgerFactory.getNormalBurger().print();
