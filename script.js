// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*const x = 23;
console.log(x);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));*/

/*
Problem1

we work for a company building a smart home thermometer. our most recent task is this: "given an array of temperatures of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error.
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*
1)Understanding the problem:
- what is temp amplitude? Answer: difference between highest and lowest temp
- how to compute max and min temperatures?
- what s a sensor error? and what to do?

2)breaking up into sub-problems
- how to ignore errors?
- find max value in temp array
- find min value in temo array
- substract min from max (amplitude) and return it
*/

/*const calcTempAmplitude = function (temps) {

let max = temps[0];
let min = temps[0];


  for(let i = 0; i < temps.length; i++){
  const curTemp = temps[i];
  if (typeof curTemp !== 'number') continue;

    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};


const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//max = 3 at the begining
//max = 7*/

/* Problem 2
function should now receive 2 arrays of temps
1)Understanding the problem:
- with 2 arrays, should we implement functionality twice?
no. just merge 2 arrays

2)breaking up into sub-problems
- merge 2 arrays*/

/*const calcTempAmplitudeNew = function (t1, t2) {
const temps = t1.concat(t2);
console.log(temps);

  let max = temps[0];
  let min = temps[0];
  
  
    for(let i = 0; i < temps.length; i++){
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
  
      if(curTemp > max) max = curTemp;
      if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };

  const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
  
  const measureKelvin = function() {
    const measurement = {
      type: 'temp', 
      unit: 'celsius',
      //C: FIX
      value: Number(prompt('Degrees celsius:'))
    }

    //B) FIND
console.table(measurement);

    // first we check the measurement.value by calling it
// console.log(measurement.value);
// console.warn(measurement.value);
// console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
  }
 // A) identify the bug
console.log(measureKelvin());*/

//////////////////////Debugging///////////////
//////////////////////////////////////////

/*sconst calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  
    let max = 0;
    let min = 0;
    
    
      for(let i = 0; i < temps.length; i++){
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;

  
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
      }
      console.log(max, min);
      return max - min;
    };
  
    const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

    //A) Identify
  console.log(amplitudeBug);



    const measureKelvin = function() {
      const measurement = {
        type: 'temp', 
        unit: 'celsius',
        //C: FIX
        //value: Number(prompt('Degrees celsius:'))
        value: 10,
      }
  
      //B) FIND
  console.table(measurement);
  
      // first we check the measurement.value by calling it
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  
      const kelvin = measurement.value + 273;
      return kelvin;
    }
   // A) identify the bug
  console.log(measureKelvin());*/

//MY SOLUTION
////////////////////

//1 problem
/*
const printForecast = function (a, b, c) {

    const final = (`...${a}°C in 1 days ... ${b}°C in 2 days ... ${c}°C in 3 days ...`);
    return final;
  }

  const arr1 = [17, 21, 23]
  //const arr2 = [12, 5, -5, 0, 4]


  const pF1 = printForecast(arr1[0], arr1[1], arr1[2]);
  console.log(pF1);

  //2 problem

  const printForecastSecond = function (a, b, c, d, e) {

    const final2 = (`...${a}°C in 1 days ... ${b}°C in 2 days ... ${c}°C in 3 days ... ${d}°C in 4 days ... ${e}°C in 5 days  ...`);
    return final2;
  }

  
  const arr2 = [12, 5, -5, 0, 4]


  const pF2 = printForecastSecond(arr2[0], arr2[1], arr2[2], arr2[3], arr2[4]);
  console.log(pF2);
  */

///THE SOLUTION OF THE EXPERT

//   1)Understanding the problem:
// - Array transformed to string, separated by ...
// - What is the X days
// Answer: currently index of the array + 1

// 2)breaking up into sub-problems
// - transform array into string
// - transform each element to string with C
// - strings needs to contain day (index+1)
// - add ... between elements and start an end of string
// - log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    //str = str + `${arr[i]}°C in ${i + 1} days ...`;
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

printForecast(data1);
printForecast(data2);

//2+3 =5+4=9
//[2,3,4]
