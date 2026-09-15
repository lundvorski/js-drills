export function reverseString(word) {
    let reversed = '';
    let wordArray = [...word];
    for(let i = wordArray.length-1; i >= 0; i--) {
        reversed += wordArray[i];
    }
    return reversed;
}


import assert from 'node:assert';
assert.strictEqual(reverseString(''), '');
assert.strictEqual(reverseString('Elephant'), 'tnahpelE');
assert.strictEqual(reverseString('ab👍'), '👍ba');
console.log('ok');
