//Q1
let nickname = '中井';
let age = 24;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。' );

//Q2
languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q6
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() { 
  console.log('World');
}
sayWorld();

//Q7
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！');
}

user.sayHello();

//Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(20, 10);

calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
  }
calc.divide(10, 2);

//Q9
function remainder(x, y) {
  return x % y;
}

console.log(5 + 'を' + 3 + 'で割った余りは' + remainder(5, 3) + 'です。' );

//Q10
//変数xはfoo関数内でのみスコープが有効なので、foo関数外からは参照できないから。