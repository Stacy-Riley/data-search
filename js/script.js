const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//Fetch returns a promise, saying something will eventually come back
//from the fetch:

//.then()returns a "blob of data"
//blob.json() returns another promise:
fetch(endpoint)
    .then(blob => blob.json(blob))
    .then(data => cities.push(...data)) //"..." spread into function or this push method:
    

    console.log(cities)
// console.log(prom);