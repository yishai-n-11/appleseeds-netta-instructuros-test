// test.js

import * as chai from 'chai';
const expect = chai.expect;

import {
    name,
    calculateAverage,
    isPrime,
    addNumbers,
    drawTriangle,
    findLongestWord,
    reverseString,
    sortStrings,
    countVowels,
    arrToObj,
    flatArray
} from '../tests_folder/yishai.nachaliel.mjs';

describe('all tasks', () => {
    before(() => {
        console.log(`testing for the solution by: ${name}`);
    });
    it('addNumbers:should return the sum of two numbers', () => {
        expect(addNumbers(2, 3)).to.equal(5);
        expect(addNumbers(-10, 5)).to.equal(-5);
        expect(addNumbers(0, 0)).to.equal(0);
    });
    it('calculateAverage: should return the average of numbers in the array', () => {
        expect(calculateAverage([1, 2, 3, 4, 5])).to.equal(3);
        expect(calculateAverage([10, 20, 30, 40])).to.equal(25);
        expect(calculateAverage([-5, -2, 1, 4])).to.equal(-0.5);
    });

    it('countVowels: should return the number of vowels in the string', () => {
        expect(countVowels("hello")).to.equal(2);
        expect(countVowels("programming")).to.equal(3);
        expect(countVowels("javascript")).to.equal(3);
        expect(countVowels("xyz")).to.equal(0);
    });
    it('isPrime: should return true for prime numbers', () => {
        expect(isPrime(5)).to.be.true;
        expect(isPrime(17)).to.be.true;
        expect(isPrime(10)).to.be.false;
        expect(isPrime(100)).to.be.false;
        expect(isPrime(0)).to.be.false;
        expect(isPrime(1)).to.be.false;
    });
    it('sortStrings: should return an array of strings sorted in alphabetical order', () => {
        expect(sortStrings(["banana", "apple", "orange", "grape"])).to.deep.equal(["apple", "banana", "grape", "orange"].reverse());
        expect(sortStrings(["zebra", "lion", "tiger", "elephant"])).to.deep.equal(["elephant", "lion", "tiger", "zebra"].reverse());
    });
    it('reverseString: should return the reverse of the input string', () => {
        expect(reverseString("hello")).to.equal("olleh");
        expect(reverseString("programming")).to.equal("gnimmargorp");
        expect(reverseString("javascript")).to.equal("tpircsavaj");
    });
    it('drawTriangle: should return the right-angled triangle pattern', () => {
        const expected5 = "*\n**\n***\n****\n*****\n";
        const expected3 = "*\n**\n***\n";
        const expected1 = "*\n";

        expect(drawTriangle(5)).to.equal(expected5);
        expect(drawTriangle(3)).to.equal(expected3);
        expect(drawTriangle(1)).to.equal(expected1);
    });
    it('findLongestWord: should return the longest word in the sentence', () => {
        expect(findLongestWord("The quick brown fox jumped over the lazy dog")).to.equal("jumped");
        expect(findLongestWord("Web development is fun")).to.equal("development");
        expect(findLongestWord("Hello, worldd!")).to.equal("worldd!");
    });
    it("arrToObj: Should create an object from an array of key-value pairs", () => {
        const expected = { name: "John", city: "New York" };
        expect(arrToObj(["name", "John"], ["city", "New York"])).to.deep.equal(expected);
    });

    it("flatArray: Should flatten a nested array to a single level", () => {
        expect(flatArray([1, [2, [3, 4]], 5])).to.deep.equal([1, 2, 3, 4, 5]);
        expect(flatArray([3, [2, 3, 4], [66, 54, [1]]])).to.deep.equal([3, 2, 3, 4, 66, 54, 1]);
    });

});