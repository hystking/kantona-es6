module.exports = () => {
  const name = 1; 
  const message = `
  Hi! ${name + `${name}`}!
  Hi!!!!!!!!
  \`\`
  "'
  `;
  console.log(message, typeof message);
};
