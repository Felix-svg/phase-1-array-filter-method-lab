// Code your solution here
function findMatching(drivers, names) {
  const matchingDrivers = drivers.filter((driver) =>
    driver.toLowerCase().includes(names.toLowerCase())
  );
  return matchingDrivers;
}

function fuzzyMatch(drivers, letters) {
  const lowerCaseLetters = letters.toLowerCase();

  const matchingDrivers = drivers.filter((driver) => {
    const lowerCaseName = driver.toLowerCase();
    return lowerCaseName.startsWith(lowerCaseLetters);
  });
  return matchingDrivers;
}

function matchName(drivers, query) {
  const matchingDrivers = drivers.filter((driver) => driver.name === query);
  return matchingDrivers;
}
