const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//Fetch returns a promise, saying something will eventually come back
//from the fetch:

//.then()returns a "blob of data"
//blob.json() returns another promise:
fetch(endpoint)
    .then(blob => blob.json(blob))
 //"..." spread used with .push() the items into the array as individual arguments
    .then(data => cities.push(...data)) 

// When user inputs data, we need to filter it down to only return a match:

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
//Here we need to figure out if the city or state match what was searched:
//we need to put a variable into a regular expression: g=global i =case insensitive 
const regex = new RegExp(wordToMatch, 'gi')        
return place.city.match(regex) || place.state.match(regex)
    });
}

// Display function
function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    // console.log(matchArray)


    //This console.log displays the 'change' and 'keyup' entries in the console
    // console.log(this.value)
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//Listen for a change inside the input field and when present, run function FindMatches
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
    // console.log(cities)
// console.log(prom);