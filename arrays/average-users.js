const users = [
  { name: "Amara", age: 24, active: true },
  { name: "Blessing", age: 31, active: false },
  { name: "Chidi", age: 19, active: true },
  { name: "Diana", age: 45, active: true },
];

const totalAge = users.reduce((sum, user) => 
{
    return sum + user.age;
}, 0);

const avargeAge = totalAge / users.length;

console.log(avargeAge);