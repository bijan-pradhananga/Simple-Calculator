

const tempLoad = ()=>{
    let thermometer = document.getElementById("temp");
    temp.innerHTML = `<i class="fa-solid fa-temperature-empty"></i>`
    temp.style.color = "black";
   
    setTimeout(()=>{
        temp.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i>`;
        temp.style.color = "yellow";
    },1000)

    setTimeout(()=>{
        temp.innerHTML = `<i class="fa-solid fa-temperature-half"></i>`;
        temp.style.color = "yellow";
    },2000)

    setTimeout(()=>{
        temp.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>`;
        temp.style.color = "yellow";
    },3000)

    setTimeout(()=>{
        temp.innerHTML = `<i class="fa-solid fa-temperature-full"></i>`;
        temp.style.color = "red";
    },4000)
}

tempLoad();

setInterval(tempLoad,5000);
