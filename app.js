"use strict";

/* alert('welcome')
alert('welcome')
alert('welcome')
alert('welcome')
alert('welcome') */

// let user = "shamil", profession = "developer", age = 26;

/* let user = "shamil",
    profession = "developer",
    age = 26; */
/* 
let shamil = "developer";
let kamran = shamil;
alert(kamran); */

/* let shamil = "person";
console.warn(shamil)
let Shamil = "newperson";
console.warn(Shamil) */

/* 
let yonetici,isim;
    isim = "Ahmet";
    yonetici = isim;
alert(yonetici); */

/* 
let num = 1.23456;
alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23 */

/* 
let num = 12.34;
alert( num.toFixed(1) ); // "12.3" */

/* alert( isFinite("15") ); // true
alert( isFinite("str") ); // false,  NaN döndürür.
alert( isFinite(Infinity) ); // false, Infinity döndürür. */

/* 
let eded = prompt("eded daxil edin");
isNaN(eded) ? alert("eded deyil") : alert('eded'); */

/* 
let num = "123.57 azn";
console.warn(parseInt(num));
console.warn(parseFloat(num)); */

/* let davetliListesi = `Davetliler:
 * İhsan
 * Cemal
 * Muzaffer
`;
alert(davetliListesi); // birçok satırdan oluşan davetiye listesi */


/* let name = prompt("adinizi daxil edin");
console.warn(`adin uzulnugu: ${name.length}`) */


/* let name = "Shamil";

for (const iterator of name) {
    console.warn(iterator)
}
 */


//  let str = "Baku is the capital of Azerbaijan";
//  let result = str.indexOf("is");
//  console.warn(result);


/* let sentence = "Bir berber bir berbere gel birader beraber bir berber dükkanı açalım demiş";
let searcheWordsIndex = "bir";
let start = 0;
while (true) {
    let index = sentence.indexOf(searcheWordsIndex,start);
    if (index != -1) {
        console.warn(index);
        start++;
    } else {
       break;
    }
} */




/* let str = "Azerbaycan";
let sub = str.substring(0,5);
console.warn(sub); */

/* let str = "Azerbaycan";
let slic = str.slice(0,5)
console.warn(slic); */

// let str = "Azerbaycan";
// let slic = str.substr(2,3)
// console.warn(slic);

let user = {
    name: "Shamil",
    surname: "Mammadov",
    age: 25,
    isAdmin: true
}
console.warn(user.Age);

// user.isAdmin == true ? alert(`Welcome ${user.name}`) : console.warn("refused");

/* delete(user.surname);
console.warn(user); */
