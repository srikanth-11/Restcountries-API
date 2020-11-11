//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//3. send the request 

request.send();

//4. load the response 

request.onload = function () {
    var data = JSON.parse(this.response);
    var fil = data.filter(item=>item.currencies[0].code=="USD")
    console.log(fil);
}