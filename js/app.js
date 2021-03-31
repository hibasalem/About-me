'use strict';

/*let userName=prompt(' What is your name ?');

alert('hello ' + userName+'! , hope you are having a great day.\nLets start with my about me game! ');

let result=0;

//  -------------------------------------------1

let dayPerson = prompt('Am I a day person?\n(answer with yes/y or no/n)');

function qes(dayPerson){
  dayPerson=dayPerson.toLowerCase();

  while (dayPerson!=='no' && dayPerson!=='yes'&& dayPerson!=='y'&& dayPerson!=='n') {
    alert('please answer with yes/y or no/n');
  }

  if (dayPerson==='yes' || dayPerson==='y') {
    alert('noooo! i am the ultimate night owl');
    console.log('your answer for\" Am I a day person?\" is false');
  }else if (dayPerson==='no'|| dayPerson==='n'){
    alert('Righht!');
    console.log('your answer for\" Am I a day person?\" is true');
    result=result+1;
  }
  console.log(result);
}

qes(dayPerson);

//  -------------------------------------------2


let summerLover = prompt('Do I like summer?');

function qes2(summerLover){
  summerLover=summerLover.toLowerCase();

  while (summerLover!=='no' && summerLover!=='yes'&& summerLover!=='y'&& summerLover!=='n') {
    alert('please answer with yes/y or no/n');
  }

  if (summerLover==='yes'|| summerLover==='y') {
    alert('nope!');
    console.log('your answer for\" Do I like summer?\" is false');
  }else if (summerLover==='no'|| summerLover==='n'){
    alert('Right! winter is the best');
    console.log('your answer for\" Do I like summer?\" is true');
    result=result+1;
  }
  console.log(result);
}
qes2(summerLover);
//  -------------------------------------------3


let aliensBeliever = prompt('Do I believe in aliens?');

function qes3(aliensBeliever){
  aliensBeliever=aliensBeliever.toLowerCase();

  while (aliensBeliever!=='no' && aliensBeliever!=='yes' && aliensBeliever!=='n' && aliensBeliever!=='y' ) {
    alert('please answer with yes/y or no/n');
  }

  if (aliensBeliever==='yes'|| aliensBeliever==='y') {
    alert('sure i do ,why not!');
    console.log('your answer for\" Do I believe in aliens?\" is true');
    result=result+1;
  }else if (aliensBeliever==='no'|| aliensBeliever==='y'){
    alert('no, i do believe on them actually!');
    console.log('your answer for\" Do I believe in aliens?\" is false');
  }

  console.log(result);
}
qes3(aliensBeliever);
//  -------------------------------------------4
*/

let introvertOrNot = prompt('Am I an introvert?');

function qes4(introvertOrNot){
  introvertOrNot=introvertOrNot.toLowerCase();

  while (introvertOrNot!=='no' && introvertOrNot!=='yes' && introvertOrNot!=='n' && introvertOrNot!=='y') {
    alert('please answer with yes/y or no/n');
  }

  if (introvertOrNot==='yes'|| introvertOrNot==='y') {
    alert('yes, that\'s true!');
    console.log('your answer for\" Am I an introvert?\" is true');
    result=result+1;
  }else if (introvertOrNot==='no'|| introvertOrNot==='y'){
    alert('no, i am an introvert!');
    console.log('your answer for\" Am I an introvert?\" is false');
  }
  console.log(result);
}
qes4(introvertOrNot);
//  -------------------------------------------5

let coffeeLover = prompt('Am I a coffee lover?');
coffeeLover=coffeeLover.toLowerCase();

while (coffeeLover!=='no' && coffeeLover!=='yes' && coffeeLover!=='n' && coffeeLover!=='y') {
  alert('please answer with yes/y or no/n');
}

if (coffeeLover==='yes'|| coffeeLover==='y') {
  alert('nope! tea all the time ');
  console.log('your answer for\" Am I a coffee lover?\" is false');
}else if (coffeeLover==='no'|| coffeeLover==='n'){
  alert('Right! tea all the time ');
  console.log('your answer for\" Am I a coffee lover?\" is true');
  result=result+1;
}
console.log(result);

//  new ----------------------------------------6

let month = 0;

for(let i=4 ; i>0 ; i--){

  let month =prompt('In witch month is my birthday? \nplease answer with a number\nyou got '+ i +' attempts') ;
  month=parseInt(month);

  if(month === 11){
    alert('you got it right');
    console.log('your answer for\"In witch month is my birthday?\" is true');
    result=result+1;
    break;
  }
  else if (month === 12 ) {
    alert('no , lower ');
    console.log('your answer for\"In witch month is my birthday?\" is false');

  } else if ( month <11 && month >0) {
    alert('no , higher ');
    console.log('your answer for\"In witch month is my birthday?\" is false');

  }
  else{
    alert('please insert a number between 1 and 12');

  }
  if(i===1){
    alert('the correct answer is 11 ');
  }
}

//   -------------------------------------------7
let favColors =0;
let userColor =0;

for (let j = 6; j> 0; j--) {
  let favColors = ['black', 'blue', 'red'];
  console.log(favColors);

  let userColor = prompt('what is my favoirte color?\nyou got ' + j + ' attempts');
  userColor = userColor.toLowerCase();

  if (favColors[0] === userColor || favColors[1] === userColor || favColors[2] === userColor) {
    alert('you got it right');
    alert('the correct answers is black , blue and red ');
    result=result+1;

    break;
  }else{
    alert('try again');
  }
  if(j==1){
    alert('the correct answers is black , blue and red ');
  }

}

//   -------------------------------------------

console.log('your score is '+result+ ' out of 7');

if (result>=6) {
  alert(userName+', your score is '+result+ ' out of 7 , you know me well!');
}else{
  alert(userName+', your score is '+result+ ' out of 7 , we should get to know each other better!');
}

document.getElementById('score').innerHTML = result;
