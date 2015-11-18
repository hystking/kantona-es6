module.exports = () => {

  const doSomething1 = (arg) => new Promise((resolve, reject) => {
    console.log("doSomething1");
    setTimeout(() => {
      reject("hofehofeho");
      resolve(1199);
      resolve(2000);
    }, 1000); 
  });
  
  const doSomething2 = (arg) => new Promise((resolve, reject) => {
    console.log("doSomething2", arg);
    setTimeout(() => {
      resolve(1199);
    }, 1000); 
  });


  doSomething1()
  .then(doSomething2)
  .then(doSomething2)
  .then(doSomething2)
  .catch(e => console.log(e));
};
