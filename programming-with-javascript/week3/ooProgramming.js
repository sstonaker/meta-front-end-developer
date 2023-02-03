// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  const intern = new Worker((name = "Bob"), (age = 21), (energy = 110));
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  const manager = new Worker(
    (name = "Alice"),
    (age = 30),
    (energy = 120),
    (hourlyWage = 30)
  );
  manager.doSomethingFun();
  return manager;
}
