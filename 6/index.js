
// for(let x=10; x>=1; x--){
//     console.log(x);
//== }

let totalEven=0;
let totalOdd=0;
for(let x=1; x<=10; x++){
    if (x%2 == 0)
    {

        totalEven++;
    }
    else{
        totalOdd++;
    }
}

console.log(`total even ${totalEven}`);
console.log(`total odd ${totalOdd}`);

for(let x=1; x<=10; x++){
    if (x == 1 || x == 5 || x==9)
    {
        console.log(x);
    }

}