

const calcTemp=()=>{
    const numberTemp = document.getElementById("temp").value ;
    console.log(numberTemp);

    const tempSelected = document.getElementById("tempDiff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);

    const C2F = (cels) =>{
        return(Math.round(cels*9/5 +32));
    }

    const F2C = (fahr) =>{
        return(Math.round((fahr-32)*9/5));
    }

    let result;
    if(valueTemp === "cel"){
        result = C2F(numberTemp);
        document.getElementById("answerArea").innerHTML = `= ${result} Farhenheit`
    }
    else{
        result = F2C(numberTemp);
        document.getElementById("answerArea").innerHTML = `= ${result} Celsisus`
    }

}

