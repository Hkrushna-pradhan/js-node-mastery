const figlet = require("figlet");

async function doStuff() {
  const text = await figlet.text("Hk pradhan!!");
  console.log(text);
}

doStuff();