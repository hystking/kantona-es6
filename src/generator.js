require("babel-polyfill");
const co = require("co");

module.exports = () => {
  /*
  function * main(){
      console.log("wait 1000ms");
      yield function(callback) {
          setTimeout(callback, 1000, "foo");
      };
      console.log("calc 2*2");
      var four = yield getPower(2);
      console.log(four);
  }
  */

  co(function * (){
    console.log("1");
    yield function(callback) {
      setTimeout(callback, 1000);
    };
    console.log("2");
    const ret = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(100);
      }, 1000);
    });
    console.log("3", ret);
    yield [
      timeout(1000),
      timeout(2000),
      timeout(3000),
      timeout(500),
    ];
    console.log("owatta");
  });


  var timeout = function(time){
      return function(callback){
          setTimeout(() => {
            console.log(`wait ${time}`);
            callback();
          }, time);
      }
  }

  /*
  var getPower = function(value){
      return function(callback){
          setTimeout(callback, 3000, value*value);
      }
  }

  var gen = main();
  var resume = function(arg){
     console.log(arg);
      var thunk = gen.next(arg).value;
      if(thunk) thunk(resume);
  }
  resume();
  */
};
