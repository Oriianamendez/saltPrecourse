export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
  if (age < 4) {
    return "toddler";
  } else if (age < 13) {
    return "kid";
  } else if (age < 20) {
    return "teenager";
  } else if (age < 39) {
    return "adult";
  } else {
    return "old";
  }
};
