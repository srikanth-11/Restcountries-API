/1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach(element => {
     console.log("Name:"+element.name+" "+"Capital:"+element.capital+" "+"Flagurl:"+element.flag)
    });
}
