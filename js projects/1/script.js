const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/name/nepal");
request.send();

// to get the response

request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    
})
