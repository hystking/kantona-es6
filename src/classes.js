class Animal {
  constructor(name) {
    this._name = name;
  }
  nyaa(time) {
    console.log(time);
    console.log("I am a animal " + this._name);
  }
  set name(val) {
    //this._name = val;
  }
  get name() {
    return "get " + this._name;
  }
}

class Neko extends Animal {
  nyaa(time) {
    super.nyaa(time);
    console.log("I am a neko " + this._name);
  }
}

module.exports = Neko;
