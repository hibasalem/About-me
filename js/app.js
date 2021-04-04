'use strict';

let userName = prompt(' What is your name ?');

alert('hello ' + userName + '! , hope you are having a great day.\nLets start with my about me game! ');

let result = 0;

//  -------------------------------------------1

let dayPerson = prompt('Am I a day person?\n(answer with yes/y or no/n)');
dayPerson = dayPerson.toLowerCase();

function qes1(dayPerson) {

  while (dayPerson !== 'no' && dayPerson !== 'yes' && dayPerson !== 'y' && dayPerson !== 'n') {
    alert('please answer with yes/y or no/n');
    dayPerson = prompt('Am I a day person?\n(answer with yes/y or no/n)');
    dayPerson = dayPerson.toLowerCase();
  }

  if (dayPerson === 'yes' || dayPerson === 'y') {
    alert('noooo! i am the ultimate night owl');
  } else if (dayPerson === 'no' || dayPerson === 'n') {
    alert('Righht!');
    result = result + 1;
  }
  return (result);
}

qes1(dayPerson);


let summerLover = prompt('Do I like summer?');
summerLover = summerLover.toLowerCase();

function qes2(summerLover) {


  while (summerLover !== 'no' && summerLover !== 'yes' && summerLover !== 'y' && summerLover !== 'n') {
    alert('please answer with yes/y or no/n');
    summerLover = prompt('Do I like summer?');
    summerLover = summerLover.toLowerCase();
  }

  if (summerLover === 'yes' || summerLover === 'y') {
    alert('nope!');
  } else if (summerLover === 'no' || summerLover === 'n') {
    alert('Right! winter is the best');
    result = result + 1;
  }
  return (result);
}
qes2(summerLover);



let aliensBeliever = prompt('Do I believe in aliens?');
aliensBeliever = aliensBeliever.toLowerCase();

function qes3(aliensBeliever) {


  while (aliensBeliever !== 'no' && aliensBeliever !== 'yes' && aliensBeliever !== 'n' && aliensBeliever !== 'y') {
    alert('please answer with yes/y or no/n');
    aliensBeliever = prompt('Do I believe in aliens?');
    aliensBeliever = aliensBeliever.toLowerCase();
  }

  if (aliensBeliever === 'yes' || aliensBeliever === 'y') {
    alert('sure i do ,why not!');
    result = result + 1;
  } else if (aliensBeliever === 'no' || aliensBeliever === 'y') {
    alert('no, i do believe on them actually!');
  }
  return (result);
}
qes3(aliensBeliever);


let introvertOrNot = prompt('Am I an introvert?');
introvertOrNot = introvertOrNot.toLowerCase();

function qes4(introvertOrNot) {

  while (introvertOrNot !== 'no' && introvertOrNot !== 'yes' && introvertOrNot !== 'n' && introvertOrNot !== 'y') {
    alert('please answer with yes/y or no/n');
    introvertOrNot = prompt('Am I an introvert?');
    introvertOrNot = introvertOrNot.toLowerCase();
  }

  if (introvertOrNot === 'yes' || introvertOrNot === 'y') {
    alert('yes, that\'s true!');
    result = result + 1;
  } else if (introvertOrNot === 'no' || introvertOrNot === 'y') {
    alert('no, i am an introvert!');
  }
  return (result);
}
qes4(introvertOrNot);


let coffeeLover = prompt('Am I a coffee lover?');
coffeeLover = coffeeLover.toLowerCase();

function qes5(coffeeLover) {

  while (coffeeLover !== 'no' && coffeeLover !== 'yes' && coffeeLover !== 'n' && coffeeLover !== 'y') {
    alert('please answer with yes/y or no/n');
    coffeeLover = prompt('Am I a coffee lover?');
    coffeeLover = coffeeLover.toLowerCase();
  }

  if (coffeeLover === 'yes' || coffeeLover === 'y') {
    alert('nope! tea all the time ');
  } else if (coffeeLover === 'no' || coffeeLover === 'n') {
    alert('Right! tea all the time ');
    result = result + 1;
  }
  return (result);
}
qes5(coffeeLover);


let month = 0;
function qes6() {

  for (let i = 4; i > 0; i--) {

    let month = prompt('In witch month is my birthday? \nplease answer with a number\nyou got ' + i + ' attempts');
    month = parseInt(month);

    if (month === 11) {
      alert('you got it right');
      result = result + 1;
      break;
    }
    else if (month === 12) {
      alert('no , lower ');

    } else if (month < 11 && month > 0) {
      alert('no , higher ');
    }
    else {
      alert('please insert a number between 1 and 12');

    }
    if (i === 1) {
      alert('the correct answer is 11 ');
    }
  }
  return (result);
}
qes6();


let favColors = 0;
let userColor = 0;
function qes7() {

  for (let j = 6; j > 0; j--) {
    let favColors = ['black', 'white', 'red'];
    console.log(favColors);

    let userColor = prompt('what is my favoirte color?\nyou got ' + j + ' attempts');
    userColor = userColor.toLowerCase();

    if (favColors[0] === userColor || favColors[1] === userColor || favColors[2] === userColor) {
      alert('you got it right');
      alert('the correct answers is black , white and red ');
      result = result + 1;
      break;

    } else {
      alert('try again');
    }

    if (j === 1) {
      alert('the correct answers is black , white and red ');
    }

  }
  return (result);
}
qes7();


if (result >= 6) {
  alert(userName + ', your score is ' + result + ' out of 7 , you know me well!');
} else {
  alert(userName + ', your score is ' + result + ' out of 7 , we should get to know each other better!');
}
document.getElementById('score').innerHTML = result;
