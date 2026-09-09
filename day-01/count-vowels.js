const vowels = "aeiou";

const word = "everything";
let count = 0;

word.split('').forEach(letter => {
    if(vowels.includes(letter)) count++;
});

console.log(count);