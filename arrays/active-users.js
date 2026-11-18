const users = [
  { name: "Amara", age: 24, active: true },
  { name: "Blessing", age: 31, active: false },
  { name: "Chidi", age: 19, active: true },
  { name: "Diana", age: 45, active: true },
];

const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeUserNames); 
