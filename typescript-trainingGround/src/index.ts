function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}
function isOld(age: number) {
  return age >= 35;
}

export { greet, isOld };
