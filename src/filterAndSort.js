// src/filterAndSort.js

const users = require('./data');

function filterAndSort(users) {
  return [...users]
    .filter(user => user.active && user.age >= 21)
    .sort((a, b) => a.name.localeCompare(b.name));
}

  /*const activeUsers = users.filter(user => user.active);
  //console.log(activeUsers);

  const ageFiltered = activeUsers.filter(user => user.age >= 21);
  //console.log(ageFiltered);

  const sortbyName = [...ageFiltered].sort((a, b) => a.name.localeCompare(b.name));
  //console.log(sortbyName);

  const result = document.getElementById('result');
  result.innerHTML = sortbyName.map(user => `<li>${user.name} (${user.age})</li>`).join('');*/

//filterAndSort(users);
// half done!
// csak azért hagyom itt, hogy lássam hogyan csináltam eredetileg

module.exports = { 
  filterAndSort: filterAndSort
};