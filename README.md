# appleseeds-netta-instructuros-test

### הנחיות כלליות

המבחן כולל שני חלקים: שאלות בג'אווהסקריפט של ידע כללי ושאלות של ג'אווהסקריפט שדורשות למידה עצמאית.

לפני השאלות כדאי לחזור על הנושאים הבאים בג'אווהסריפט: 

1. משתנים
2. פונקציות
3. תנאים
4. לולאות
5. אובייקטים
6. מערכים

## הנחיות הגשה

1. צרו קובץ שנקרא עם השם שלכם באנגלית וסיומת .mjs. לדוגמה: yossi.cohen.mjs
2. בתוך הקובץ, הוסיפו בשורה הראשונה: 
    export const name = "<השם שלכם> from <העיר שלכם>";
    לדוגמה:
    export const name = "yossi cohen from jerusalem";
3. נפרט כעת את כל השאלות שאתם צריכים לענות עליהן. עבור כל שאלה, צרו פונקציה בתוך הקובץ שלכם. העתיקו את הפונקציה כמו שהיא בהגדרת השאלה, והוסיפו קוד משלכם במקום המיועד.


## חלק א': שאלות JS כלליות

1. Write a function that takes two numbers as input and returns their sum.
> export function addNumbers(a, b) {
>   // Your code here
> }

2. Write a function that takes an array of numbers as input and returns the average of the numbers.
> export function calculateAverage(numbers) {
>  // Your code here
> }

3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
> export function countVowels(str) {
>   // Your code here
> }

4. Write a function that checks if a given number is prime (greater than 1 and not divisible by any other number except 1 and itself).
> export function isPrime(number) {
>   // Your code here
> }

5. Write a function that takes an array of strings as input and returns a new array with the strings sorted in reverse alphabetical order.
> export function sortStrings(strings) {
>  // Your code here
> }

6. Write a function that takes a string as input and returns the reverse of the string without using built-in reverse() function.
> export function reverseString(str) {
>  // Your code here
> }

7. Write a function that takes a number as input and returns a string of stars (*) representing a right-angled triangle. The triangle should have n rows, where n is the input number.
> export function drawTriangle(n) {
>   // Your code here
> }

8. Write a function that takes a sentence as input and returns the longest word in the sentence.
> export function findLongestWord(sentence) {
>   // Your code here
> }

## חלק 2 - שאלות על נושא נדיר


1. write a function that takes an array of arrays as input, and returns one array with flatten results (i.e. - all the values are out the nested array and in the same level). use ONLY ONE LINE of code.
for example: input [1, [2, [3, 4]], 5] would result in: [1,2,3,4,5]
> export function flatArray(arr){
> // your code here
> }

2. write a function that takes 2 arrays as input and returns an object from them.
for example, the call genObject(["name","yossi"],["age":32]) would results in: {"name":"yossi","age":32}
> export function arrToObj(arr1,arr2){
> // your code here  
> }

# אחרי שסיימתם שלחו לנו את הקובץ או לינק ל GOOGLE DRIVE