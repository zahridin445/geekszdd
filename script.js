let users = [
 {id: 1, name: "Vasya"},
 {id: 2, name: "Petya"},
 {id: 3, name: "Masha"}
];

let user = users.find(item =>item.id == 2);

console.log(user); 