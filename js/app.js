'use strict';

let name=prompt(' What is your name ?')

alert('hello ' + name +'! , hope you are having a great day.\nLets start with my about me game! ')

let result=0 

//  -------------------------------------------1

let dayPerson = prompt('Am I a day person?\n(answer with yes or no)')
dayPerson=dayPerson.toLowerCase();

while (dayPerson!=='no' && dayPerson!=='yes') {
    alert('please answer with yes or no');
}

if (dayPerson==='yes') {
    alert("noooo! i am the ultimate night owl");
    //  console.log('your answer for\" Am I a day person?\" is false');
}else if (dayPerson==='no'){
    alert("Righht!");
    //  console.log('your answer for\" Am I a day person?\" is true');
    result=result+1;
}
console.log(result);
//  -------------------------------------------2

let summerLover = prompt('Do I like summer?')
summerLover=summerLover.toLowerCase();

while (summerLover!=='no' && summerLover!=='yes') {
    alert('please answer with yes or no');
}

if (summerLover==='yes') {
    alert("nope!");
    // console.log('your answer for\" Do I like summer?\" is false');
}else if (summerLover==='no'){
    alert("Right! winter is the best");
    //  console.log('your answer for\" Do I like summer?\" is true');
    result=result+1;
}
console.log(result);

//  -------------------------------------------3

let aliensBeliever = prompt('Do I believe in aliens?')
aliensBeliever=aliensBeliever.toLowerCase();

while (aliensBeliever!=='no' && aliensBeliever!=='yes') {
    alert('please answer with yes or no');
}

if (aliensBeliever==='yes') {
    alert("sure i do ,why not!");
    //  console.log('your answer for\" Do I believe in aliens?\" is true');
    result=result+1;
}else if (aliensBeliever==='no'){
    alert("no, i do believe on them actually!");
    // console.log('your answer for\" Do I believe in aliens?\" is false');
}

console.log(result);

//  -------------------------------------------4

let introvertOrNot = prompt('Am I an introvert?')
introvertOrNot=introvertOrNot.toLowerCase();

while (introvertOrNot!=='no' && introvertOrNot!=='yes') {
    alert('please answer with yes or no');
}

if (introvertOrNot==='yes') {
    alert("yes, that\'s true!");
    // console.log('your answer for\" Am I an introvert?\" is true');
    result=result+1;
}else if (introvertOrNot==='no'){
    alert("no, i am an introvert!");
    // console.log('your answer for\" Am I an introvert?\" is false');
}
console.log(result);

//  -------------------------------------------5

let coffeeLover = prompt('Am I a coffee lover?')
coffeeLover=coffeeLover.toLowerCase();

while (coffeeLover!=='no' && coffeeLover!=='yes') {
    alert('please answer with yes or no');
}

if (coffeeLover==='yes') {
    alert("nope! tea all the time ");
    // console.log('your answer for\" Am I a coffee lover?\" is false');
}else if (coffeeLover==='no'){
    alert("Right! tea all the time ");
    // console.log('your answer for\" Am I a coffee lover?\" is true');
    result=result+1;
}
console.log(result);


//   -------------------------------------------

console.log('your score is '+result+ ' out of 5');

if (result>=4) {
alert(name+', your score is '+result+ ' out of 5 , you know me well!')     
}else{
    alert(name+', your score is '+result+ ' out of 5 , we should get to know each other better!')
}


document.getElementById('score').innerHTML = result;
