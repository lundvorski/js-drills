export function removeDuplicates(array) {
    return [...new Set(array)];

}

import assert from 'node:assert';
assert.strictEqual(removeDuplicates([-5, -2, -10, -10, 'arr', 'arr']).length, 4);
assert.strictEqual(removeDuplicates([]).length, 0);
assert.strictEqual(removeDuplicates([7]).length, 1);
assert.strictEqual(removeDuplicates([5, 5, 3]).length, 2);
console.log('ok');