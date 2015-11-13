module.exports = function() {
  
  let a = 1;
  let b = 1, c = 2;

  console.log(a, b, c);

  /*
  if(true) {
    let d = 1;
    console.log(d);
  }
  console.log(d);
  */

  for(let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  for(let i = 0; i < 10; i++) {
    console.log(i);
  }

  // console.log(i);

  (function(){
    var hogehogehoge;
  })();

  {
    let a;
  }

};
