const functions = require('../src/index.js');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toEqual(expected);
});

test('longestString', function() {
  const expected = "hippopatamus";
  const result = functions.longestString(["cat", "Dog", "a", "hippopatamus"])
  expect(result).toEqual(expected)
});

test('l337', function() {
  const expected = "112345677890";
  const result = functions.l337("ilzeasgtybqo");
  expect(result).toEqual(expected);
});

test('uniqueStr', function() {
  const expected = ['cat','dog','hi'];
  const result = functions.uniqueStrings(['cat','cat','dog','hi']);
  expect(result).toEqual(expected);
});

test('Developer', function() {
  const expected = {name: "zuber", languages: ["js", "html"]}
  const result = new functions.Developer("zuber",["js", "html"])
  expect(result).toEqual(expected);
})

test('learnLanguage', function(){
  const david = new functions.Developer("david", ["js", 'html']);
  const expected = {name: "david", languages: ["js", "html", "css"]};
  const result = david.learnLanguage("css");
  expect(result).toEqual(expected);
})

test('stringsConcat', function() {
  const expected = 'hello world';
  const result = functions.stringsConcat(['hello',' ',5,23523,'wor',9837,'ld']);
  expect(result).toEqual(expected);
});

test('negativeOnly', function() {
  const expected = [-1,-3423532];
  const result = functions.negativeOnly([-1,343,-3423532, 34242, 85]);
  expect(result).toEqual(expected);
})

test('camelise', function() {
  const expected = "yetkinZuberDavid";
  const result = functions.camelise("yetkin zuber david");
  expect(result).toEqual(expected);
});

test('isPrime', function() {
  const expected = true;
  const result = functions.isPrime(1097);
  expect(result).toEqual(expected);
});

test('Walker', function() {
  const expected = {journey:[[0,0]]};
  const result = new functions.Walker();
  expect(result).toEqual(expected);
})

test('walk', function() {
  const david = new functions.Walker();
  // const expected = {journey:[[0, 0], [0, 12]]};
  const expected2 = {journey: [[0,0],[0,12],[-6, 12]]};
  david.walk("N", 12);
  const result2 = david.walk("W", 6);
  // expect(result).toEqual(expected);
  expect(result2).toEqual(expected2);
});

test('currentLocation', function() {
  const yetkin = new functions.Walker();
  yetkin.walk("N",5);
  yetkin.walk("S",2);
  yetkin.walk("W",9);
  yetkin.walk("E",7);
  const expected = [-2,3];
  const result = yetkin.currentLocation();
  expect(result).toEqual(expected);
});

test('pathTaken', function() {
  const zuber = new functions.Walker();
  zuber.walk("N",5);
  zuber.walk("S",2);
  zuber.walk("W",9);
  zuber.walk("E",7);
  const expected = [[0,0],[0,5],[0,3],[-9,3],[-2,3]];
  const result = zuber.pathTaken();
  expect(result).toEqual(expected);
})
