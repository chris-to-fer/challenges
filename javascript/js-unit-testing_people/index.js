export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((e) => e.firstName + " " + e.lastName);
}

export function getNameAndAge(people) {
  return people.map((e) => `${e.lastName} (${e.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((element) => element.age === age);
}
export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((e) => e.age > age)
    .map((e) => e.firstName + " " + e.lastName);
}

export function getPeopleByLastName(people, lastName) {
  const hits = people.filter((e) => e.lastName === lastName);
  return hits;
}

export function findPersonById(people, id) {
  const result = people.find((e) => e.id === id);
  return result;
}

export function isAnyoneOlderThan(people, age) {
  return people.some((e) => e.age > age);
}

export function getFullNamesSortedByAge(people) {
  return people
    .sort((a, b) => a.age - b.age)
    .map((e) => `${e.firstName} ${e.lastName}`);
}
