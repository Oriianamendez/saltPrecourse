function greet(namePassedIn) {
  if ((greet = namePassedIn)) {
    return "Welcome to SALT, " + namePassedIn;
  } else if ((greet = namePassedIn + namePassedIn)) {
    return "Welcome to SALT, " + namePassedIn + " and " + namePassedIn;
  } else {
    return "Welcome to SALT, ";
  }
}

module.exports.greet = greet;

const greeting = greet("Marcus", "Eliza");
if (greeting === "Welcome to SALT, Marcus") {
  console.log("IT WORKS");
} else {
  console.log("IT FAILS");
}
