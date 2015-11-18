module.exports = () => {
  console.log("destructuring");  
  
  const [a, b] = [1, 2];
  console.log(a, b);

  const {c, d} = {c: 3, d: 4};
  console.log(c, d);
  
  const {c: e, d: f} = {c: 3, d: 4};
  console.log(e, f);

  const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(first, second, rest);

  const func = (arg = {}) => {
    const {id, name, age} = arg;
    console.log(id, name, age);
  };

  const {sin, PI, random} = Math;
  console.log(random());

  func();
  func({
    id: "1",
    name: "taro",
    age: 18,
  });
};
