// redTicket 
function redTicket(a, b, c) {
  if(a === 2 && b === 2 && c === 2) {
   return 10;
 }
 if(a === b && b === c) {
   return 5;
 }
 if(b !== a && c !== a) {
   return 1;
 }
 return 0;
}

// sortaSum 
function sortaSum(a, b) {
  if(a + b >= 10 && a + b <= 19) {
    return 20;
  }
  return a + b;
}

// squirrelPlay 
function squirrelPlay(temp, isSummer) {
  if(temp >= 60 && temp<=90 && !isSummer) {
    return true;
  }
  if(temp >= 60 && temp <= 100 && isSummer) {
    return true;
  }
  return false;
}

// teenSum 
function teenSum(a, b) {
  if((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
   return 19;
 }
 return a + b;
}

// sumLimit 
function sumLimit(a, b) {
  if(String(a + b).length > String(a).length) {
    return a;
  }
  return a + b;
}

// teaParty 
function teaParty(tea, candy) {
  if(tea >= 5 && candy >= 5 && (tea >= candy * 2 || candy >= tea * 2)) {
  return 2;
}
 if(tea >= 5 && candy >= 5) {
  return 1;
 }
 if(tea < 5 || candy < 5) {
  return 0;
 }
}

// specialEleven 
function specialEleven(n) {
  if(n % 11 === 0 || n % 11 === 1) {
    return true;
  }
  return false;
}

// shareDigit 
function shareDigit(a, b) {
  if(Math.floor(a/10) === Math.floor(b/10) || Math.floor(a/10) === b%10 || Math.floor(b/10) === a%10 || a%10 === b%10 ){
  return true;}

 return false;

}

// twoAsOne 
function twoAsOne(a, b, c) {
  if(a + b === c || a + c === b || b + c === a) {
   return true;
 }
 return false;
}

// withoutDoubles 
function withoutDoubles(die1, die2, noDoubles) {
   if (noDoubles && die1 === die2) {
    if (die1 === 6) {
      die1 = 1;
    } else {
      die1++;
    }
  }
  return die1 + die2; 
}

// lastDigitOfThree 
function lastDigitOfThree(a, b, c) {
  if(a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10) {
    return true;
  }
  return false;
}

// less20 
function less20(n) {
  if(n % 20 === 18 || n % 20 === 19) {
   return true;
 }
 return false;
}

// lessBy10 
function lessBy10(a, b, c) {
  if(a - b >= 10 || a - c >= 10 || b - a >= 10 || b - c >= 10 || c - a >= 10 || c - b >= 10) {
    return true;
  }
  return false;
}

//alarmClock
function alarmClock(day, vacation) {
  if ((day >= 1 && day <= 5) && !vacation) {
    return "7:00";
  }
  if ((day >= 1 && day <= 5) && vacation) {
    return "10:00";
  }
  if ((day === 0 || day === 6) && !vacation) {
    return "10:00";
  }
  if ((day === 0 || day === 6) && vacation) {
    return "off";
  }
}

//answerCell
function answerCell(isMorning, isMom, isAsleep) {
  if(isAsleep) {
   return false;
 }
 if(isMorning && !isMom) {
   return false;
 }
 if(!isMorning || isMom) {
   return true;
 }
 if(isMorning && isMom) {
   return true;
 }
 if(!isMorning && !isMom) {
   return true;
 }
}

//blueTicket
function blueTicket(a, b, c) {
  if(a + b === 10 || b + c === 10 || a + c === 10){
  return 10;
 } 
 if(a + b >= 10 + (b + c) || a + b >= 10 + (a + c)){
  return 5;
 }
 return 0;
  
}

//caughtSpeeding
function caughtSpeeding(speed, isBirthday) {
  if(isBirthday) {
    speed -= 5;
  }
  if(speed <= 60) {
    return 0;
  }
  if(speed >= 61 && speed <= 80) {
    return 1;
  }
  return 2;
}

//cigarParty
function cigarParty(cigars, isWeekend) {
  if(cigars >= 40 && cigars <= 60 && !isWeekend) {
    return true;
  }
  if(cigars >= 40 && isWeekend) {
    return true;
  }
  return false;
}

//dateFashion
function dateFashion(you, date) {
  if(you >=8 && date > 2 || date >= 8 && you > 2) {
    return 2;
  }
  if(you <= 2 || date <= 2) {
    return 0;
  }
  return 1;
}

//fizzString 
function fizzString(str) {
  if(str[0] === "f" && str[str.length - 1] === "b") {
    return "FizzBuzz";
 } 
 if(str[0] === "f") {
   return "Fizz";
 }
  if(str[str.length - 1] === "b") {
    return "Buzz";
  }
  return str;
}

// fizzString2 
function fizzString2(n) {
    if(n % 3 === 0 && n % 5 === 0) {
   return "FizzBuzz!";
 }
 if(n % 3 === 0) {
   return "Fizz!";
 }
 if(n % 5 === 0) {
   return "Buzz!";
 }
 return n + "!";
}

// greenTicket 
function greenTicket(a, b, c) {
  if(a === b && b ===c){
    return 20;
  }
  if(a !== b && b !== c && c !== a){
    return 0;
  }
  return 10;
}

// in1To10 
function in1To10(n, outsideMode) {
  if(n >= 1 && n <= 10 && !outsideMode) {
    return true;
  }
  if((n <= 1 || n >= 10) && outsideMode) {
    return true;
  }
  return false;
}

// inOrder 
function inOrder(a, b, c, bOk) {
  if(bOk && c > b) {
    return true;
  }
  if(!bOk && b > a && c > b) {
    return true;
  }
  return false;
}

// inOrderEqual 
function inOrderEqual(a, b, c, equalOk) {
  if(!equalOk && a < b && b < c) {
    return true;
 } 
 if(equalOk && a <= b && b <= c) {
   return true;
 }
 return false;
}

// love6 
function love6(a, b) {
  if( a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6) {
    return true;
  }
  return false;
}

// maxMod5 
function maxMod5(a, b) {
  if(a === b) {
    return 0;
  }
  if(a % 5 === b % 5) {
    return Math.min(a, b);
  }
  return Math.max(a, b);
}

// more20 
function more20(n) {
  if(n % 20 === 1 || n % 20 === 2) {
    return true;
  }
  return false;
}

// nearTen 
function nearTen(num) {
  if(num % 10 <= 2 || num % 10 >= 8) {
    return true;
  }
  return false;
}

// old35 
function old35(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return false;
  }
  if (n % 3 === 0 || n % 5 === 0) {
    return true;
  }
  return false;
}



function num(id) {
  const box = document.getElementById(id);
  if (box.value === "") {
    throw new Error("Kindly insert a value for " + id.split("-")[1] + ".");
  }
  return Number(box.value);
}

function txt(id) {
  return document.getElementById(id).value;
}

function bool(id) {
  return document.getElementById(id).checked;
}


function show(name, run) {
  const out = document.getElementById(name + "-answer");
  try {
    const result = run();
    out.className = "answer " + (result === true ? "yes" : result === false ? "no" : "");
    out.textContent = result === undefined ? "undefined (no rule matched)" : String(result);
  } catch (error) {
    out.className = "answer problem";
    out.textContent = error.message;
  }
}





function solve_in1To10() {
  show("in1To10", () => in1To10(num("in1To10-n"), bool("in1To10-outsideMode")));
}

function solve_inOrder() {
  show("inOrder", () => inOrder(num("inOrder-a"), num("inOrder-b"), num("inOrder-c"), bool("inOrder-bOk")));
}

function solve_inOrderEqual() {
  show("inOrderEqual", () => inOrderEqual(num("inOrderEqual-a"), num("inOrderEqual-b"), num("inOrderEqual-c"), bool("inOrderEqual-equalOk")));
}

function solve_lastDigitOfThree() {
  show("lastDigitOfThree", () => lastDigitOfThree(num("lastDigitOfThree-a"), num("lastDigitOfThree-b"), num("lastDigitOfThree-c")));
}

function solve_less20() {
  show("less20", () => less20(num("less20-n")));
}
function solve_alarmClock() {
  show("alarmClock", () => alarmClock(num("alarmClock-day"), bool("alarmClock-vacation")));
}

function solve_answerCell() {
  show("answerCell", () => answerCell(bool("answerCell-isMorning"), bool("answerCell-isMom"), bool("answerCell-isAsleep")));
}

function solve_blueTicket() {
  show("blueTicket", () => blueTicket(num("blueTicket-a"), num("blueTicket-b"), num("blueTicket-c")));
}

function solve_caughtSpeeding() {
  show("caughtSpeeding", () => caughtSpeeding(num("caughtSpeeding-speed"), bool("caughtSpeeding-isBirthday")));
}

function solve_cigarParty() {
  show("cigarParty", () => cigarParty(num("cigarParty-cigars"), bool("cigarParty-isWeekend")));
}

function solve_dateFashion() {
  show("dateFashion", () => dateFashion(num("dateFashion-you"), num("dateFashion-date")));
}

function solve_fizzString() {
  show("fizzString", () => fizzString(txt("fizzString-str")));
}

function solve_fizzString2() {
  show("fizzString2", () => fizzString2(num("fizzString2-n")));
}

function solve_greenTicket() {
  show("greenTicket", () => greenTicket(num("greenTicket-a"), num("greenTicket-b"), num("greenTicket-c")));
}

function solve_lessBy10() {
  show("lessBy10", () => lessBy10(num("lessBy10-a"), num("lessBy10-b"), num("lessBy10-c")));
}

function solve_love6() {
  show("love6", () => love6(num("love6-a"), num("love6-b")));
}

function solve_maxMod5() {
  show("maxMod5", () => maxMod5(num("maxMod5-a"), num("maxMod5-b")));
}

function solve_more20() {
  show("more20", () => more20(num("more20-n")));
}

function solve_old35() {
  show("old35", () => old35(num("old35-n")));
}

function solve_nearTen() {
  show("nearTen", () => nearTen(num("nearTen-num")));
}

function solve_redTicket() {
  show("redTicket", () => redTicket(num("redTicket-a"), num("redTicket-b"), num("redTicket-c")));
}

function solve_sortaSum() {
  show("sortaSum", () => sortaSum(num("sortaSum-a"), num("sortaSum-b")));
}

function solve_squirrelPlay() {
  show("squirrelPlay", () => squirrelPlay(num("squirrelPlay-temp"), bool("squirrelPlay-isSummer")));
}

function solve_teenSum() {
  show("teenSum", () => teenSum(num("teenSum-a"), num("teenSum-b")));
}

function solve_sumLimit() {
  show("sumLimit", () => sumLimit(num("sumLimit-a"), num("sumLimit-b")));
}

