const { sumAllNumbers, presentAllStates, hasSpace, isValid, kebabCase, find, filterAbbreviations } = require("../prompts.js");

describe("sumAllNumbers()", () => {
  test("should return sum of all numbers", () => {
    const nums = [10, 20, 30];
    const actual = sumAllNumbers(nums);
    const expected = 60;
    expect(actual).toEqual(expected);
  });

  test("should return sum of all numbers", () => {
    const nums = [1, 3, 3];
    const actual = sumAllNumbers(nums);
    const expected = 7;
    expect(actual).toEqual(expected);
  });

  test("should return a number", () => {
    const nums = [10 - 10];
    const actual = sumAllNumbers(nums);
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  test("should return 0 as a default value if array is empty", () => {
    const nums = [];
    const actual = sumAllNumbers(nums);
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  test("should return a string that says 'argument must be of array datatype'", () => {
    const nums = 69;
    const actual = sumAllNumbers(nums);
    const expected = "argument must be of array datatype";
    expect(actual).toEqual(expected);
  });

  test("should return a string that says 'argument must contain numbers only in the array'", () => {
    const nums = [0, "hello", "jose", "from", "8.1", "made", "this"];
    const actual = sumAllNumbers(nums);
    const expected = "argument must contain numbers only in the array";
    expect(actual).toEqual(expected);
  });

  test("should return a string that says 'argument must contain numbers only in the array'", () => {
    const nums = ["hello", "jose", "from", "8.1", 0, "made", "this"];
    const actual = sumAllNumbers(nums);
    const expected = "argument must contain numbers only in the array";
    expect(actual).toEqual(expected);
  });

  test("should return a string that says 'argument must contain numbers only in the array'", () => {
    const nums = ["hello", "jose", "from", "8.1", "made", "this", 0];
    const actual = sumAllNumbers(nums);
    const expected = "argument must contain numbers only in the array";
    expect(actual).toEqual(expected);
  });
  test("should return a string that says 'argument must contain numbers only in the array'", () => {
    const nums = ["hello", "jose", "from", "8.1", "made", 0, "this"];
    const actual = sumAllNumbers(nums);
    const expected = "argument must contain numbers only in the array";
    expect(actual).toEqual(expected);
  });

  test("solution should account for NaN", () => {
    expect(sumAllNumbers.toString().includes("isNaN(")).toEqual(true);
  });
});

describe("presentAllStates()", () => {
  test("should return states concatenated in a specific format", () => {
    const states = ["Alaska", "New York", "Florida"];
    const actual = presentAllStates(states);
    const expected = "STATES: Alaska, New York, Florida";
    expect(actual).toEqual(expected);
  });

  test("should return a string that says 'argument must be of array datatype'", () => {
    const states = {};
    const actual = presentAllStates(states);
    const expected = "argument must be of array datatype";
    expect(actual).toEqual(expected);
  });
});

describe("hasSpace()", () => {
  test("should return true if there is a space in the name of any states", () => {
    const states = ["Alaska", "New York", "Florida"];
    const actual = hasSpace(states);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("should return false if there is not a space in the name of any states", () => {
    const states = ["Alaska", "Montana", "Florida"];
    const actual = hasSpace(states);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  test("must not include the 'some' higher order function", () => {
    expect(hasSpace.toString().includes("some")).toEqual(false);
  });
});

describe("isValid()", () => {
  test("should return false if any state abbreviation is longer than two characters.", () => {
    const states = ["AK", "NYC", "FL"];
    const actual = isValid(states);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("should return true if all states abbreviation is no longer than two characters", () => {
    const states = ["AK", "WA", "FL"];
    const actual = isValid(states);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return a string that says 'argument must be of array datatype'", () => {
    const states = "NY";
    const actual = isValid(states);
    const expected = "argument must be of array datatype";
    expect(actual).toEqual(expected);
  });
});

describe("kebabCase()", () => {
  test("should return a new array of all states in kebab casing", () => {
    const states = ["Alaska", "New York", "Florida"];
    const actual = kebabCase(states);
    const expected = ["alaska", "new-york", "florida"];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if argument is an empty array", () => {
    const states = [];
    const actual = kebabCase(states);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should return a string that says 'argument must be of array datatype'", () => {
    const states = "new york";
    const actual = kebabCase(states);
    const expected = "argument must be of array datatype";
    expect(actual).toEqual(expected);
  });
  test("must not include the 'map' higher order function", () => {
    expect(kebabCase.toString().includes("map(")).toEqual(false);
  });
});

describe("find()", () => {
  test("should return the state name if it is found", () => {
    const states = ["Alaska", "New York", "Florida"];
    const actual = find(states, "Alaska");
    const expected = "Alaska";
    expect(actual).toEqual(expected);
  });
  test("should return null if the state name is not found", () => {
    const states = ["Alaska", "New York", "Florida"];
    const actual = find(states, "Montana");
    const expected = null;
    expect(actual).toEqual(expected);
  });
  test("should return a string that says 'argument must be of array datatype'", () => {
    const states = "new york";
    const actual = find(states, "Alaska");
    const expected = "argument must be of array datatype";
    expect(actual).toEqual(expected);
  });
  test("must not use the 'includes' method", () => {
    expect(find.toString().includes("includes(")).toEqual(false);
  });
});

describe("filterAbbreviations()", () => {
  test("should filter out all strings longer than 3 characters", () => {
    const states = ["AK", "MT", "WA", "NYC"];
    const actual = filterAbbreviations(states);
    const expected = ["AK", "MT", "WA"];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no strings are less than the length of 3", () => {
    const states = ["Alaska", "New York", "Florida"];
    const actual = filterAbbreviations(states);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("must not include 'filter' higher order function", () => {
    expect(filterAbbreviations.toString().includes("filter(")).toEqual(false);
  });
});
