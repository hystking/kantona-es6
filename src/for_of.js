

module.exports = () => {
  console.log("for of");

  const arr = [1, 2, 3, 5, 8, 13];
  const obj = {a: 1, b: 2, c: 3};

  // 配列の中身を回す
  for(let i of arr) {
    console.log(i);
  }
  
  // ↑とおなじ
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }

  arr.forEach(i => console.log(i));
  Object.keys(obj).forEach(i => console.log(obj[i]));
};
