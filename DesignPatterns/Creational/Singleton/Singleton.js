class Singleton {
  static instance;

  constructor() {
    this.loggedIn = false;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const ins1 = Singleton.getInstance();
console.log(ins1.loggedIn);

const ins2 = Singleton.getInstance();
console.log(ins2.loggedIn);

console.log(ins1 === ins2);

ins1.loggedIn = true;

console.log(ins2.loggedIn);
