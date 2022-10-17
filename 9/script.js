const add= (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const mul = (a,b) => {
    return a*b;
}

const div = (a,b) =>{
    return a/b;
}

const calculator = (num1,num2,operator) =>{
    return operator(num1,num2);
}

// const outerFun = (a) =>{
//     let b = 10;
//     const innerFun=() =>{
//         let sum = a+b;
//         console.log(`sum is ${sum}`);
//     }
//     return innerFun;
// }

// let checkClosure = outerFun(5);
// console.dir(checkClosure);

// const fun2 = () => {
//     setTimeout(()=>{
//         console.log(`hi`);
//     },2000);
// }

// const fun1 = () =>{
//     console.log(`hey`);
//     fun2();
//     console.log(`hola`);
// }

// fun1(); 

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }

const sum=(n1)=>
    (n2)=>(n3)=>n1+n2+n3;

console.log(sum(2)(3)(5));
