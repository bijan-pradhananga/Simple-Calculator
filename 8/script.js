// var a = 10;
// var b = 10;

// console.log(a >= b);

// var myName = "Bijan"

// console.log(`My name is ${myName}`)

// console.log(3 ** 3);

// console.log(5 - "bijan");

// // program to swap numbers
// var a = 5;
// var b = 10;

// var c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);

// // program to swap without using 3rd variable

// a = a + b;
// b = a - b;
// a = a - b;

// // program to find out leap year
// var year = 1900;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(`The given year ${year} is  a leap year`)
//         }
//         else {
//             console.log(`The given year ${year} is not a leap year`)
//         }
//     }
//     else {
//         console.log(`The given year ${year} is  a leap year`)
//     }
// } else {
//     console.log(`The given year ${year} is not a leap year`)
// }

// var a = 8;
// for(let n=1; n<=10 ; n++){
//     console.log(`${a} * ${n} = ${a*n}`);
// }

// function sum(a,b){
//     return total= a+b;

// }



// console.log(sum(10,10));
// var t = sum(10,5);
// console.log(`My total is ${t}`);

// var Names = ["Bijan", "Pradhananga"];

// console.log(Names[1]);
// console.log(Names.length);

// for(var i=0; i<Names.length ; i++){
//     console.log(Names[i]);
// }

// for(let elements in Names){
//     console.log(elements);
// }

// for(let elements of Names){
//     console.log(elements);
// }

// var myFriends = ["Bijan", "Ram", "Andrew", "Emma"];

// // myFriends.forEach(function(elements, index, array){
// //     console.log(elements index);
// // });


// // searching and filtering in an array

// console.log(myFriends.indexOf())

// // for filtering

// // const prices = [100,200,300,400,500,600];

// // const findElem = prices.find((currVal) =>{
// //     return currVal < 400;
// // });

// // console.log(findElem);

// const prices = [100,200,300,400,500,600];

// const newPrices = prices.filter((elem, index) => {
//     return elem < 400;
// });

// // console.log(newPrices);

// // const months = ["Jan", "Mar", "Feb", "Dec", "Nov"];

// // console.log(months.sort());

// // const randomNumbers= [5,66,21,89,1];

// // console.log(randomNumbers.sort());

// // add in array

// const animals= ["pigs", "chicken", "tiger"];

// animals.push("lion");

// console.log(animals);

// // subtract in array

// const birds= ["pigeon", "dove", "crow"];

// console.log(birds.pop());
// console.log(birds);
// birds.shift();

// console.log(birds);

// // splice method

// const months = ["Jan", "Mar", "Feb", "Jun", "Nov"];

// const newMonths = months.splice(months.length,0,"Dec");
// console.log(months);
// console.log(newMonths);


// const indexOfMonth = months.indexOf("Mar");

// if(indexOfMonth != -1 ){
//     const update = months.splice(indexOfMonth,1,"Feb");
// }
// else{
//     console.log(`No data found`);
// }

// console.log(months);

// const array1 = [1,4,9,16,25];

// let newArray = array1.map((cur,index,arr)=>{
//     return cur >9 ;
// })

// console.log(array1);
// console.log(newArray);

// const array1 = [1,4,9,16,25];
// let newArr = array1.map((curElem,index,arr)=>{
//     return `index no = ${index} and the value is ${curElem} belong to ${arr}`;
// })

// console.log(newArr);

// find square root of each element in an array


// let arr = [25,36,49,64,81];

// let arrSqr = arr.map((curElem)=>{
//     return Math.sqrt(curElem);
// })

// console.log(arrSqr);

// multilply each element bu 2 and return those variables whose values greater than 10

// let arr = [2,3,4,5,6];

// let newArr = arr.map((curElem1)=> curElem1 * 2).filter((currElem2) => currElem2 > 10);

// console.log(newArr);

// let arr = [2,3,5];

// let sum = arr.reduce((accumulator,curELem,index,arr)=> {
//     return accumulator += curELem;
// })

// console.log(sum);

// const arr = [
//             ["a","b"],
//             ["c","d"],
//             ["g","hs"]
//             ];

// let flatArr = arr.reduce((accum,currVal)=>{
//     return accum.concat(currVal);
// })

// console.log(flatArr);

// let myName = "Bijan";
// let mySurname = "Pradhananga";

// console.log(myName.length);

// const sentence = 'Messi is the "goat"';
// console.log(sentence.indexOf("is"));

// const random = 'K xa mero vai';

// let sData = random.search("vai");
// console.log(sData);

// var myFruits = "Apple, Banana, Kiwi";

// let res = myFruits.slice(0,5);
// console.log(res);

// Display only 280 characters of a string like one used in Twiiter

// let myTweets = "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum tempora architecto laudantium. Numquam repudiandae quisquam at laudantium debitis necessitatibus error, quibusdam sed enim pariatur a explicabo? Fugiat, ut vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum tempora architecto laudantium. Numquam repudiandae quisquam at laudantium debitis necessitatibus error, quibusdam sed enim pariatur a explicabo? Fugiat, ut vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum tempora architecto laudantium. Numquam repudiandae quisquam at laudantium debitis necessitatibus error, quibusdam sed enim pariatur a explicabo? Fugiat, ut vero. amet consectetur adipisicing elit. Vel dolorum tempora architecto laudantium. Numquam repudiandae quisquam at laudantium debitis necessitatibus error, quibusdam sed enim pariatur a explicabo? Fugiat, ut vero.";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myTweets.length);

// var myFruits = "Apple, Banana, Kiwi";
// let res = myFruits.substring(0,4);
// console.log(res);


// var myFruits = "Apple, Banana, Kiwi";
// let res = myFruits.substr(0,5);
// console.log(res);


// let random = 'K xa mero vai haru';
// let replaceData = random.replace('vai','dai');
// console.log(random);
// console.log(replaceData);

// Extracting string characters

// let str = 'HELLO WORLD'; 
// console.log(str.charAt(1));

// let str = 'HELLO WORLD';
// console.log(str.charCodeAt(0));

// Return the unicode of the last character in a string;

// let str = 'HELLO WORLD';

// let lastChar = str.length;

// console.log(str.charCodeAt(lastChar-1));

// Property Access

// var str = 'HELLO WORLD';
// console.log(str[0]);

// let myName = 'Bijan';
// let lastName = 'Pradhananga';
// console.log(myName.toUpperCase());

// console.log(myName.concat(" ",lastName));

// var str = "          k xa           ";
// console.log(str.trim());

// var txt='a,b,c,d,e';
// console.log(txt.split(','));

// date and time

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log(Date.now());

// function sum(a,b){
//     return a+b;
// }

// console.log(`My total is ${sum(10,10)}`);

// for(let i=1; i<=10 ; i++){
//     let n=12;
//     console.log(`${n}*${i}=${n*i}`) ;
// }

// function mul(a,b){
//     return a*b;
// }

// console.log(mul(5,2));

// const sum = (a,b) => `${a+b}`;

// console.log(sum(10,5));



// console.log(array[array.length-1]); 

// for(let elements in array){
//     console.log(elements);
// }

// for(let elements of array){
//     console.log(elements);
// }

// array.forEach((elements,index,array)=>{
//     console.log(elements);
// })

// console.log(array.indexOf('bijan'));

// if(array.indexOf('lamo')>=0){
//     console.log(`xa mug`);
// }
// else{
//     console.log(`xaina mug`);
// }

// console.log(array.includes('bijan'));



// console.log(prices.find((elem)=>elem>400));

// console.log(prices.findIndex((elem)=>elem>400));

// var array = ['bijan','pradhananga','rtx','gtx'];

// const prices=[200,300,700,500,450,900];

// const newPrices = prices.filter((elem)=>elem>400);

// console.log(newPrices);

// prices.push(6969);

// console.log(prices);

// const months = ['jan','feb','apr','aug','jun'];
// const newMonths= months.splice(months.length,0,'dec');
// console.log(newMonths);
// console.log(months);
// const remMonths = months.splice(4,1);
// console.log(months);


// const index = months.indexOf('feb');

// if(index != -1){
//     const updateMonth = months.splice(index,1,'Feb');
//     console.log(months);
// }
// else{
//     console.log(`No data found`);
// }

// const array1 = [1,4,9,16,25];

// let newArr = array1.map((elem,index,arr)=>elem>9);

// console.log(newArr);

// let newArr1 = array1.map((elem,index,arr)=>{
//     return `${elem}`
// });

// let arr= [25,36,49,64,81];

// let newArr = arr.map((elem)=>Math.sqrt(elem))

// console.log(newArr);

// let arr2 = [2,3,4,6,8]; 

// let newArr = arr2.map((elem)=>elem*2).filter((newElem)=>newElem>10).reduce((acc,elem3)=>acc+elem3);

//  console.log(newArr);

// let arr3 = [5,6,2];

// let sum = arr3.reduce((acc,elem,index,arr)=>{
//     return acc+elem;
// });

// console.log(sum);

// const arr = [[1],[2],[3],[4],[5]];

// let flatArr = arr.reduce((acc,elem)=>{
//     return acc.concat(elem);
// })

// console.log(flatArr);

// const data = 'Hey there delilah whats it like in New York City';

// const find= data.indexOf('delilah');

// if(find>=0){
//     console.log(`data found in indexx ${find}`);
// }
// else{
//     console.log(`Not found`);
// }

// const str = "Apple, Banana, Kiwi";

// const extStr = str.slice(7,-3);

// console.log(extStr);

// let myTweets = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maiores doloribus aliquam asperiores qui animi, rem facere dolorem amet natus. Dolores cupiditate sequi eaque. Ex perspiciatis quidem praesentium autem magnam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maiores doloribus aliquam asperiores qui animi, rem facere dolorem amet natus. Dolores cupiditate sequi eaque. Ex perspiciatis quidem praesentium autem magnam?';

// let myTweets2 = myTweets.slice(0,280);

// console.log(myTweets2);

// const str = "Apple, Banana, Kiwi";

// console.log(str.substring(0,4));

// var myBioData = 'I am Bijen Pradhananga';

// let replaceData = myBioData.replace('Bijen','Bijan');

// console.log(replaceData);

// let str = "hello world";

// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));

// console.log(str.charCodeAt(str.length-1));

// console.log(str[0]);

// var txt = 'a,v,d,e,f';
// console.log(txt.split(','));

// let curDate = new Date();
// console.log(curDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());

// function myFucntion() {
//     var d = new Date().toLocaleTimeString();
//     document.getElementById("demo").innerHTML = d;
// }

// console.log(Math.trunc(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.6));


function changeColor() {
    let x = document.body.style;
    if (x.background === "red") {
        x.background = "white";
    }
    else {
        x.background = "red";
    }

}


// const fourthWay = document.getElementsByClassName('child1');

// fourthWay.addEventListener('click', ()=>{
//     alert();
// })

// const checkEvent = () =>{
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// }

// function mouseDown(){
//     document.getElementById('mouse').style.color = 'red';
// }

// function mouseUp(){
//     document.getElementById('mouse').style.color = 'blue';
// }

const mouseFunction = document.getElementById('box');

mouseFunction.addEventListener('mouseenter', () => {
    mouseFunction.style.backgroundColor = 'red';
    console.log(`done`);
});

mouseFunction.addEventListener('mouseleave', () => {
    mouseFunction.style.backgroundColor = 'blue';
    console.log(`not done`);
});

const selectElement = () => {
    const selectItem = document.getElementById('ice').value;
    const iceCream = document.getElementById('iceCreams').value;
    const result = document.getElementById('result');

    result.innerHTML = `you selected ${iceCream} flavour`;
    console.log(`${selectItem} and ${iceCream}`);
}

// const sumFunction=()=>{
// const x = parseInt(document.getElementById('firstNumber').value) ;
// const y = parseInt(document.getElementById('secondNumber').value) ;
// let answer = parseInt(x+y);;
// const z =  document.getElementById('sum');
// z.innerHTML=`sum of ${x} and ${y} is ${answer} `;
// console.log(`sum of ${x} and ${y} is ${answer}`);

// }

const sumFunction = document.getElementById('submit');

sumFunction.addEventListener('click', () => {
    const x = parseInt(document.getElementById('firstNumber').value);
    const y = parseInt(document.getElementById('secondNumber').value);
    let answer = parseInt(x + y);;
    const z = document.getElementById('sum');
    z.innerHTML = `sum of ${x} and ${y} is ${answer} `;
    console.log(`sum of ${x} and ${y} is ${answer}`);
});


// const show = document.querySelector('#show');
// const btn = document.querySelector('#btn');
// let num = 0;
// const loading = btn.addEventListener('click', () => {
//     show.innerHTML= `Loading...`;
//     setInterval(()=>{
//         show.innerHTML = `${num}`;
//         num++;
//     },1000);
// })

let timeref;

function timer() {
    const show = document.querySelector('#show');
    const btn = document.querySelector('#btn');
    let num = 0;
    show.innerHTML = `Loading...`;
    timeref = setInterval(() => {
        show.innerHTML = `${num}`;
        num++;
    }, 1000);

}

function stopFunction() {
    clearTimeout(timeref);
}

// let myBioData = {
//     myName : 'Bijan',
//     myAge : 20,
//     getData (){
//         console.log(`my name is ${myName}`);
//     }
// }

// console.log(this.alert(`Awesome`));

const bioData = ['bijan','pradhananga',20];

let [Fname,Lname,Age] = bioData;

const colors = ['red','green','blue'];
const addColors = [...colors ,'white','black'];

console.log(addColors);

