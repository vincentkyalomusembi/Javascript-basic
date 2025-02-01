/*
'use strict';

function logger(){
    console.log('My name is Jonas');
} 
// calling / running / invoking function
logger();
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// function calling 
fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const somthie = fruitProcessor(2, 3);
console.log(somthie);
*/ 
/*
// function declaration
function myAge1(birthYear){
    return 2025 - birthYear;
}
// function expression
console.log(`I am ${myAge1(2004)} years`);
// function declaration
function myAge2(birthYear){
    return 2025 - birthYear;
}
// function expression
console.log(myAge2(2000));
*/
/*
// arrow function
const myAge3 = birthYear => 2025 - birthYear;
const age3 = myAge3(2000);
const retirement = 70 - age3;
console.log(age3);
console.log(retirement);

const yearsUntilRetirement = birthYear => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(2000));
*/
/*
const cutPieces = function (fruit){
    return fruit * 4;
};
const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
};
// function calling 
fruitProcessor(2, 3);
console.log(fruitProcessor(2, 3));
*/
/*
const calAge = function(birthYear) {
    return 2025 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstname) {
    const age = calAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
    
    } else {
        console.log(`${firstname} has already retired 🎉`);
    
    }


    //return `${firstname} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2000, 'vin'));
*/
/*
const calAverage = score1 => (score1)/3;
const avgDolphins = calAverage(44+23+71);
const avgKoalas = calAverage(65+54+49);
console.log(`average for dolphins ${avgDolphins}`);
console.log(`average for koalas ${avgKoalas}`)
const  checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
        return avgDolphins;
    }else if (avgKoalas >= avgDolphins) {
        console.log(`koalas win ${avgKoalas} vs ${avgDolphins}`);
        return avgKoalas;
    } else{
        console.log (`no team wins`);
    }

}
console.log(checkWinner(avgDolphins,avgKoalas));
*/ 
/*
const friends =['vin', 'josh', 'faith'];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[2] = 'jay';
console.log(friends);
*/
/*
const calAge = function (birthYear){
   return 2025 - birthYear; 
}
const years = [1999, 2000, 2003, 2014];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length -1])];
console.log(ages);
*/
/*
const friends = ['vin', 'josh', 'faith'];
friends.push('jay');
console.log(friends);
friends.unshift('john');
console.log(friends);
*/

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const  bill= [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(`bill${bill}, tips${tips}, total${total}`);