// #1. 

function filter(array, filterFn, inplace = false) {
  if (inplace === false) {
  let resArr = [];
  for(let i = 0; i < array.length; i++){
      const el = array[i];
      if(filterFn(el, i)){
         resArr.push(el);
      };
   };
   return resArr
  }
  else {
    let from = 0, to = 0;
    while (from < array.length) {
    if (filterFn(array[from])) {
      array[to] = array[from];
      to++;
    }
    from++;
  }
  array.length = to;
  }
};

const arr = [5, 3, 6, 2, 7, -4, 8, 10]; // initial data
const isEven = num => num % 2 === 0; // function
console.log(filter(arr, isEven)); // [6,2,-4,8,10]
console.log(filter(arr, isEven, inplace=true)); // undefined as inplace = true
console.log(arr)  // [6,2,-4,8,10] -- our array is filtered as parameter inplace = true


// #2. 

const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

function solutinFn(initObject){
   finalObj = {};
  for (const key in initialObj) {
  if (initObject.hasOwnProperty(key)) {
    if (typeof initObject[key] in finalObj){
      finalObj[typeof initObject[key]]+=1
    }
    else {
     finalObj[typeof initObject[key]] = 1 
}
}
}
  return finalObj
}

console.log(solutinFn(initialObj)) 
// {
  //   "string": 1,
  //   "number": 2,
  //   "object": 2
  // }

initialObj['g'] = 1
console.log(solutinFn(initialObj))
// {
//   "string": 1,
//   "number": 3,
//   "object": 2
// }


// #3.

function sum(num1, num2){
if ((typeof num1 != "number") && (typeof num2 === "number")) {
  throw new Error('Left argument is not a number!')
  };
if ((typeof num2 != "number") && (typeof num1 ==="number")) {
  throw new Error('Right argument is not a number!')
  };
  if ((typeof num1 !="number")&&(typeof num2!="number")) {
    throw new Error('Operands are not numbers!')
  } 
  return num1 + num2
};

console.log(sum(1,2)); // 3
console.log(sum(3,2)); // 5
console.log(sum(3, '2')); // Uncaught Error: Right argument is not a number! 
console.log(sum('i love javascript', 2)); // Uncaught Error: Left argument is not a number! 
console.log(sum('i love javascript', 'javascript loves me')); // Uncaught Error: Operands are not numbers! 
console.log(sum('1', '1')); // Uncaught Error: Operands are not numbers! 


// #4. (по-моему я не до конца ее отладила)

function getMinimalCVS(arr) {
  //this.arr = arr;
  var arrEditions = [];
  arrEditions.push(arr);
  return {
    history: function() {
      return arrEditions;
    },

    head: function() {
      return arrEditions.slice(-1);
    },

    push: function(elem){
      var lastArr = arrEditions.slice(-1);
      lastArr = lastArr.concat(elem)
      arrEditions = arrEditions.concat([lastArr])

    },
    pop: function(){
        var lastArr = arrEditions.slice(-1).slice(-1);
        var lastElem = lastArr[lastArr.length - 1].slice(-1);
        var newArr = lastArr.pop()
        arrEditions = arrEditions.concat([newArr])
        return lastElem
    }
}
}

const test = new getMinimalCVS(['a', 'b', 'c'])


// #6. 
// Вы пишите искусственный интеллект (ИИ) для одной пошаговой стратегии. ИИ в один момент времени может либо бить hit, либо бежать run.

// Напишите функцию hitOrRun, которая:

// Принимает на вход два натуральных числа a и b (a < b)
// Генерирует рандомное число в промежутке [a, b]
// Проверяет, является ли оно простым
// Если является, то возвращает строку run
// Если не является, то возвращает строку hit
function test(num1, num2){
  if (num1>num2) {
    throw new Error('a is bigger than b!')
    }
  else {
  let rand = Math.floor(num1 + Math.random()*(num2 - num1 + 1));
    console.log(rand)
    if (rand === 1) { // мин простое
      return "run"
     } 
    else if (rand === 2) { // мин составное
      return "hit" 
     } 
    else {
    for(var x = 2; x < rand; x++)
      {
        if(rand % x === 0)
        {
          return "hit";
        }
      }
      return "run";  
    } 
   }  
  } 
  
console.log(test(1,2)) // randomizer chose 2 -- returns 'hit'
console.log(test(1,10)) // randomizer chose 10 -- returns 'hit'
console.log(test(1,10)) // randomizer chose 7 -- returns 'run'
console.log(test(1,10000)) // randomizer chose 5165 -- returns 'hit'
console.log(test(10000, 1)) // Uncaught Error: a is bigger than b! 

// 7.

function toCamelCase(initString) {
    initString = initString.replace(/\_[a-z]/g, match => match.toUpperCase());
    return initString.replace(/\_/gm, "") 
  }
  
const snakeData = 'data_in_snake_case';

console.log(toCamelCase(snakeData)); // "dataInSnakeCase"
console.log(toCamelCase("this_is_a_test")); // "thisIsATest"


// #8. 

function isSpam(text, keywords) {
    return keywords.some(elem => text.includes(elem));
  }
  
console.log(isSpam("text1", ["text", "text2"])) // true
console.log(isSpam("nope", ["text", "text2"])) // false


// #9. 

function theWorld(ms) {
  return new Promise((res, rej) => {
    function loop(i) {
      if (i === 0) {
        res('Выведется после того, как время продолжит ход');
      } else {
        console.log(`Time will continue running in ${i} seconds.`);
        setTimeout(loop, 1000, --i);
      }
    }
    loop(ms/1000);
  });
}

(async () => {
  console.log('Выведется до остановки времени');
  console.log(await theWorld(5000)); // i.e. 5 seconsds
})();
// "Выведется до остановки времени"
// "Time will continue running in 5 seconds."
// "Time will continue running in 4 seconds."
// "Time will continue running in 3 seconds."
// "Time will continue running in 2 seconds."
// "Time will continue running in 1 seconds."
// "Выведется после того, как время продолжит ход"


// #10. 

function solutionFn(num){
  while (num > 9){
    let snum = num.toString()
    let sdigits = snum.split("")
    num = 1
    for (i=0; i<sdigits.length;i++){
       n = Number(sdigits[i])
       num = num * n
    }
  }
  return num
}

console.log(solutionFn(1)) // 1
console.log(solutionFn(10)) // 0
console.log(solutionFn(42)) // 8
console.log(solutionFn(999)) // 2