/*
let js = 'amazing';
console.log (40+20-10);
console.log("vincent");
console.log(23);
let firstname = "vin";

console.log(typeof firstname);
console.log(typeof true);
console.log(typeof 23);

let year;
year = 2004;
console.log(year);
console.log(typeof year);

let age =20;
age = 12;
 
const birthYear = 2004;
//birthYear = 2004;

var job= "programmer";
job = "hacker"
*/
/*
const now = 2025;
const agevin = now - 2004;
const agesam = now - 2003;
console.log(agevin,agesam);
console.log(agevin*2,agesam/10,2**3);
//2**3 means 2 to the power of 3
console.log(agevin>agesam)
const isFullAge = agesam >= 18;
console.log(now-2004>now-2003);

let johnMass = 50, johnHeight = 5;
let markMass = 60, markHeight = 6;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;

console.log(johnBMI, markBMI);
if (johnBMI > markBMI) {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
}else{
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
}

  let dolphinScore = "88, 100 , 110";
  let koalasScore = "98, 100, 110";
  let dolphinAverage = (88+100+110)/3;
  let koalasAverage = (98+100+110)/3;
  console.log(dolphinAverage, koalasAverage);
  if (dolphinAverage > koalasAverage && dolphinAverage >= 50){
    console.log("Dolphins wins the trophy");
  }else if (dolphinAverage < koalasAverage && koalasAverage >= 50){
    console.log("koalas wins the the trophy");
  }else if(dolphinAverage === koalasAverage){
    console.log("no one wins the trophy");
  }
  else if (dolphinAverage  && koalasAverage >= 100 ){
    console.log("both win the trophy");
  }else{
    console.log("no one wins the trophy");
  }


const day ="monday";
if (day =="monday"){
  console.log("plan course structure");
} else if (day == "tuesday"){
  console.log ("prepare theory videos");
}else if (day == "wednesday" || day == "thursday"){
  console.log("write code examples");
}else if (day =="friday"){
  console.log("record videos");
}else (console.log("not a valid day"));
*/
let tipValue;
let billValue = 275;
tipValue = billValue <= 300 && billValue >= 50 ? 0.15*billValue: 0.2* billValue;
console.log (`The bill was ${billValue}, the tip was ${tipValue}, and the total value ${billValue + tipValue}`);