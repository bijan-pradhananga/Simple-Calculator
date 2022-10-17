// https://icanhazdadjoke.com/

// const container = document.querySelector('#container');
// const jokes = document.getElementById('joke');
// const jokeButton = document.querySelector('#jokeButton');


// const jokeGen = () =>{
//     fetch('https://icanhazdadjoke.com/').then((res)=>{
//         console.log(res.json());
//     }).catch((Error)=>{
//         console.log(Error);
//     })
// }

// jokeButton.addEventListener('click', jokeGen);
// jokeGen();

const jokes = document.querySelector('#jokes');
const jokeBtn = document.querySelector('#jokeBtn');
const generateJokes = () =>{
    
    const setHeader = {
        headers : {Accept : "application/json"}
     }

    fetch('https://icanhazdadjoke.com/', setHeader).then((res)=>res.json())
    .then((data)=>
        jokes.innerhtml = data.joke
    ).catch((error)=>
        console.log(error))
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes(); 