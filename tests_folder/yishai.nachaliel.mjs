export const name = "yishai nachaliel";

export function addNumbers(a, b) {
    // Your code here
    return a + b;
}

export function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

export function countVowels(str) {
    const vowels = ['i', 'e', 'o', 'u', 'a'];
    let total = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            total += 1;
        }
    }
    return total;
}

export function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

export function sortStrings(strings) {
    return strings.slice().sort().reverse();
}

export function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

export function drawTriangle(n) {
    let triangle = "";
    for (let i = 1; i <= n; i++) {
        triangle += "*".repeat(i) + "\n";
    }
    return triangle;
}

export function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

export function flatArray(arr) {
    return arr.flat(10);
}


export function arrToObj(arr1, arr2) {
    const entries = new Map([
        arr1,
        arr2
    ]);
    return Object.fromEntries(entries);
}



