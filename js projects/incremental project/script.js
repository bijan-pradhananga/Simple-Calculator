// to get the id
const counters = document.querySelectorAll('#counter');

// to work with each element
counters.forEach((elem)=>{
// starting count
    elem.innerHTML = 0;
    
//function to keep counting till the desired number
    const updateCounter =()=>{

//+ is used to convert string to integer
    const targetCount = +elem.getAttribute('data-target');
   
    const startCount = +elem.innerHTML;
//incr is used to define the increment rate
    const incr = targetCount/100 ;
    if(startCount<targetCount){
        elem.innerHTML =` ${Math.round(startCount+incr)}`;
        setTimeout(updateCounter,10);
    }
    }
    
    updateCounter();
})