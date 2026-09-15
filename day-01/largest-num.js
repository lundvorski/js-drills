export function largestNum(nums) {
    const largestNum = nums.reduce((acc,cur) => {
        return cur > acc ? cur : acc;
    }, -Infinity)
    return largestNum;
}

import assert from 'node:assert';
assert.strictEqual(largestNum([-5, -2, -10]), -2);
assert.strictEqual(largestNum([]), -Infinity);
assert.strictEqual(largestNum([7]), 7);
assert.strictEqual(largestNum([5, 5, 3]), 5);
console.log('ok');