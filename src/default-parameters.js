module.exports = () => {
  const hoge = (arg1 = 1, ..arg2) => {
    console.log(arg1, arg2);
  };
  hoge();
};
