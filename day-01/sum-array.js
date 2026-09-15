export function sum(nums) {
    let sum = 0;
    for(const n of nums) {
        sum += n;
    }
    return sum;
}


import assert from 'node:assert';
assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(sum([]), 0);
assert.strictEqual(sum([-1, 1]), 0);
console.log('ok');
