export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeForPerson = (person, currentYear) =>
  currentYear - person.birthYear;

export const getAgeGroup = (age) => {
  if (age < 0) return "notExist";
  if (age < 4) return "toddler";
  if (age < 13) return "kid";
  if (age < 20) return "teenager";
  if (age < 39) return "adult";
  if (age === 50) return "prime";

  return "old";
};
export const divide = (number1, number2) => {
  if (number2 === 0) {
    throw new Error(
      "Please... No division by zero... I cannot cope with that. /Your computer"
    );
  }
  return number1 / number2;
};
