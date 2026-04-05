a következő a feladat:

van egy users tömb
const users = [
  { name: 'Anna', age: 28, active: true},
  { name: 'Béla', age: 19, active: false},
  { name: 'Csaba', age: 34, active: true},
  { name: 'Dóra', age: 22, active: true},
  ];

Feladat:

írj egy filterAndSortUsers(users) függvényt, ami:
  - csak az active: true felhasználókat tartja meg
  - leszűri azokat, akik 21 év felettiek (age>=21)
  - a maradékot név szerint rendezi
  - új tömböt ad vissza (nem módosítja az erdeti tömböt).

Ha tudsz írjál tesztesetet:
  - ellenőrzi, hogy a bemenet nem módosul
  - ellenőrzi, hogy a visszaadott tömbben csak aktív és 21+ felhasználók vannak (és név szerint történik a rendezés)
  - edge case: üres tömb tesztelése

'maradék' azt jelenti, hogy amit kifilterezett és megtart
