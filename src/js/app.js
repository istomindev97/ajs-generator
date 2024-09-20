class Char {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor() {
    this.members = [];
  }

  addMember(...members) {
    this.members.push(...members);
  }

  * generator() {
    for (let index = 0; index < this.members.length; index++) {
      yield this.members[index];
    }
  }
}

const instance = new Char('Лучник', 'Bowman', 50, 1, 40, 10);
const instance2 = new Char('Лучник', 'Bowman', 50, 1, 40, 10);
const instance3 = new Char('Лучник', 'Bowman', 50, 1, 40, 10);
const instance4 = new Char('Лучник', 'Bowman', 50, 1, 40, 10);

const team = new Team();

team.addMember(instance, instance2, instance3, instance4);

const generator = team.generator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
