export function countVowels(word) {
    const vowels = "aeiou";
    let count = 0;
    for(const c of word.toLowerCase()) {
        if(vowels.includes(c)) count++;
    }

    return count;

}

import assert from 'node:assert';
assert.strictEqual(countVowels('EVERYTHING'), 3);
assert.strictEqual(countVowels(''), 0);
assert.strictEqual(countVowels('word'), 1);
assert.strictEqual(countVowels('Assimilate'), 5);
console.log('ok');