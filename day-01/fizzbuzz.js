export function fizzBuzz(num) {
    let printString = '';
    for(let i = 1; i <= N; i++) {
        if(i % 3 == 0) printString += 'Fizz';
        if(i % 5 == 0) printString += 'Buzz';
        console.log(printString === '' ? i : printString);
        printString = '';
    }
}

const N = 100;

fizzBuzz(N);