// function add(x, y){
//     console.log(x+y);
// }

// function sub(x, y){
//     console.log(x-y);
// }

// function mul(x, y){
//     console.log(x*y);
// }

// function div(x, y){
//     console.log(x/y);
// }

// add(10, 10)
// sub(10, 2)
// mul(30, 2)
// div(100, 2)

function addNumber(){
    let n1= parseInt(document.getElementById('num1').value);
    let n2= parseInt(document.getElementById('num2').value);
    
    let result = document.getElementById('result').value=n1+n2;
    
    document.getElementById('num1').value='';
    document.getElementById('num2').value='';
    document.getElementById('result').value='';
}




