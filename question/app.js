//基礎編
// //Q1
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

//Q5 対象の配列の中身の数が変わったとしても処理を書き換えなくてもいいようにする。
let sum = 0;
for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}

console.log(sum / playerList.length);

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

//応用編
//Q1
let randomInt = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(0) + 1) + Math.ceil(0));
console.log(randomInt);

//Q2
setTimeout(function(){
  console.log('Hello World!');
},3000);

//Q2コールバック関数とは
//コールバック関数とは関数に引数として渡し、関数内で呼び出される関数。
//今回は無名関数のfunction()

//Q3
let num = 4;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

//Q4
let numbers = [];
for (let i =0; i<=99; i++) {
  numbers[i] = i;
}

console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i <= 6; i++) {
  if ((typeof mixed[i] === 'number') && (mixed[i] % 2 === 0 )) {
    console.log('even');    
  } else if ((typeof mixed[i] === 'number') && (mixed[i] % 2 !== 0)) {
    console.log('odd');
  } else {
    console.log('not number');
  }
}