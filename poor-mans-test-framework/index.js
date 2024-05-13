function greet(namePassedIn) {
  return "Welcome to SALT, " + namePassedIn;
}

module.exports.greet = greet;

const greeting = greet("Marcus", "Eliza");
if (greeting === "Welcome to SALT, Marcus") {
  console.log("IT WORKS");
} else {
  console.log("IT FAILS");
}
