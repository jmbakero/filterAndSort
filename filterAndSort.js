const users = [
  { name: 'Dóra', age: 28, active: true},
  { name: 'Béla', age: 19, active: false},
  { name: 'Csaba', age: 20, active: true},
  { name: 'Anna', age: 22, active: true},
  ];

  const activeUsers = users.filter(user => user.active);
  console.log(activeUsers);
  const ageFiltered = activeUsers.filter(user => user.age >= 21);
  console.log(ageFiltered);
  const sortbyName = ageFiltered.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortbyName);

  // half done!