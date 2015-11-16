module.exports = () => {
  const hoge = (arg1 = 1) => {
    console.log(arg1);
  };
  hoge();
};
