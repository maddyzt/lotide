# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/maddyzt`

**Require it:**

`const _ = require('@username/maddyzt');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a, b)`: Compares two arrays (a, b) and asserts if they are equal or not.
* `assertEqual(actual, expected)`: Compares two values and asserts if they are equal to each other.
* `assertObjectsEqual(actual, expected)`: Compares two objects and asserts if they are equal to each other.
* `countLetters(stringToCount)`: Returns a count of letters in a string.
* `countOnly(allItems, itemsToCount)`: Returns a count of specified items in an array.
* `eqArrays(arrayOne, arrayTwo)`: Returns true or false if the arrays are equal to each other.
* `eqObjects(objectOne, objectTwo)`: Returns true or false if the objects are equal to each other.
* `findKey(object, callback)`: Returns the first key in the object for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: Returns the key for a given value in an object.
* `flatten(array)`: Removes nested arrays and returns a flattened array.
* `head(array)`: Returns the first value in the array.
* `letterPositions(sentence)`: Returns an object with the key/value pairs representing each letter in the sentence and the indices where they appear.
* `map(array, callback)`: Returns a new array based on the results of the callback function.
* `middle(array)`: Returns the middle element(s) of the array.
* `tail(array)`: Returns all elements except the first element of an array.
* `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning.
* `without(source, itemsToRemove))`: Takes in an array and returns a new array without specified items.





