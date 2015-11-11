class Hoge {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  exec() {
    console.log(this.a, this.b);
  }
}

var hoge = new Hoge(1, 2);
hoge.exec();

var kansuu = () => {
  console.log("this is submodule kasnuu");
};

module.exports = kansuu;
