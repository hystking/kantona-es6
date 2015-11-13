module.exports = function() {
  const func1 = arg => arg;

  console.log(func1("hoge"));


  const MyClass = function(){
    this.hoge = "fuga";

    const func3 = () => {
      console.log(this.hoge);
    };
  
    func3();
  };

  const myInstance = new MyClass();


  const arr = [1, 2, 3];
  console.log([1, 2, 3].map(a => a * a));
}
