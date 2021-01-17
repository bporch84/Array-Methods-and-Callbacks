import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const final2014 = fifaData.filter((item) => (item.Year === 2014) && (item.Stage === "Final")); //this filters the fifaData array and returns an array with only information from the world cup final in 2014
  
//   console.log(final2014)  
  
  //(a) Home Team name for 2014 world cup final
  
  console.log(final2014[0]["Home Team Name"])

  //(b) Away Team name for 2014 world cup final
  
  console.log(final2014[0]["Away Team Name"])
  
  //(c) Home Team goals for 2014 world cup final
  
  console.log(final2014[0]["Home Team Goals"])
  
  //(d) Away Team goals for 2014 world cup final
  
  console.log(final2014[0]["Away Team Goals"])
  
  //(e) Winner of 2014 world cup final */
  
  console.log(final2014[0]["Win conditions"])


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    let final = data.filter((games) => games.Stage === "Final")
    return final
  } //This filters the fifaData array and returns an array with only information from the finals.

//   console.log(getFinals(fifaData))

  
  
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, cb){
  let years = cb(array).map((element) => element.Year)
  return years
} //The map method takes all of the values from the Year key in the filtered array from Task 2, and puts them into a new array.



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, cb) {
    let winners = cb(array).map((element) => {
      if(element["Home Team Goals"] > element["Away Team Goals"]){
      return element["Home Team Name"]
    } else return element["Away Team Name"]
    }
    )
    return winners
  } // The map method goes through the array created in task two, and the if statement causes it to return the name of the team that one the match by comparing their scores.


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, cb, callback) {
  let winnersByYears = cb(array).map((year, index) =>
  `In ${year}, ${callback(array)[index]} won the world cup!`);
  return winnersByYears
} //I used the map method on the getYears callback and added the getWinners callback in the return, but I'm not entirely sure why this works.




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/


// function getAverageGoals(cb) {
//   let homeGoals = cb.map((home) => home["Home Team Goals"]);
//   let awayGoals = cb.map((away) => away["Away Team Goals"]);
//   let homeTotal = homeGoals.reduce((accumulator, currentValue) => accumulator + currentValue);
//   let awayTotal = awayGoals.reduce((accumulator, currentValue) => accumulator + currentValue);
//   let homeAverage = (homeTotal / homeGoals.length).toFixed(2);
//   let awayAverage = (awayTotal / awayGoals.length).toFixed(2);
//   let average = {Home: homeAverage,
//   Away: awayAverage}

// return average
// }

function getAverageGoals(cb) {
  //This returns an array for the home teams goals.
  let homeGoals = cb.map((home) => home["Home Team Goals"]);

  //This returns an array for the away team goals.
  let awayGoals = cb.map((away) => away["Away Team Goals"]);

  //This adds up all the goals for the home team
  let homeTotal = homeGoals.reduce((accumulator, currentValue) => accumulator + currentValue);

  // This adds up all the goals for the away team
  let awayTotal = awayGoals.reduce((accumulator, currentValue) => accumulator + currentValue);
  
  // This takes both totals, adds them together, then returns the average to the second decimal point.
  let totalAverage = ((homeTotal + awayTotal) / homeGoals.length).toFixed(2);


return totalAverage
}

// function getAverageGoals(cb) {
//   let homeAverage = cb.reduce((accumulator, currentValue) => accumulator + currentValue["Home Team Goals"], 0);
  
//   let awayAverage = cb.reduce((accumulator, currentValue) => accumulator + currentValue["Away Team Goals"], 0);
  
//   return ((homeAverage + awayAverage) / cb.length).toFixed(2);
// } //This is Josh's way, which doesn't use the map method





/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
