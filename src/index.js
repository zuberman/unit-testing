function add(a, b){
  return a + b;
}

//module.exports.add = add;

function longestString(array) {
  array.sort((a,b) => b.length-a.length);
  return array[0];
}

//module.exports.longestString = longestString;

function l337(string) {
  return string.replace(/i/g, "1")
  .replace(/l/g, "1")
  .replace(/z/g, "2")
  .replace(/e/g, "3")
  .replace(/a/g, "4")
  .replace(/s/g, "5")
  .replace(/g/g, "6")
  .replace(/t/g, "7")
  .replace(/y/g, "7")
  .replace(/b/g, "8")
  .replace(/q/g, "9")
  .replace(/o/g, "0");
}

//module.exports.l337 = l337;

function uniqueStrings (arr) {
  let newArr = [];
  arr.forEach(item => {
    if (!newArr.includes(item)) newArr.push(item);
  });
  return newArr;
}

//module.exports.uniqueStrings = uniqueStrings;

function Developer (string, arr) {
  this.name = string;
  this.languages = arr;
}

//module.exports.Developer = Developer;


Developer.prototype.learnLanguage = function(language) {
  this.languages.push(language);
  return this;
}

module.exports.learnLanguage = Developer.learnLanguage;

function stringsConcat (arr) {
  return arr.filter(item => typeof item === 'string').reduce((a,b)=>(a+b));
}

//module.exports.stringsConcat = stringsConcat;

function negativeOnly (arr) {
  return arr.filter(function(item){
    return item < 0;
  })
}

//module.exports.negativeOnly = negativeOnly;

function camelise(string) {
   const nameArr = string.split(" ")
   for(let i = 1; i < nameArr.length; i++){
     nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].substr(1);
   }
   return nameArr.join("");
}

//exports.camelise = camelise;

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num%i===0) return false;
  }
  return true;
}

function Walker () {
  this.journey = [[0,0]];
}


Walker.prototype.walk = function(string, number) {
  let lastLocation = this.journey[this.journey.length - 1];
  if (string === 'N') this.journey.push([lastLocation[0], lastLocation[1] + number]);
  if (string === 'S') this.journey.push([lastLocation[0], lastLocation[1] - number]);
  if (string === 'E') this.journey.push([lastLocation[0] + number, lastLocation[1]]);
  if (string === 'W') this.journey.push([lastLocation[0] - number, lastLocation[1]]);
  return this;
}

module.exports.walk = Walker.walk;

Walker.prototype.currentLocation = function() {
  return this.journey[this.journey.length - 1];
}

module.exports.currentLocation = Walker.currentLocation;

Walker.prototype.pathTaken = function() {
  return this.journey;
}

module.exports.pathTaken = Walker.pathTaken

Walker.prototype.totalSteps = function()

module.exports = {
  add,
  longestString,
  l337,
  uniqueStrings,
  Developer,
  stringsConcat,
  negativeOnly,
  camelise,
  isPrime,
  Walker
};
