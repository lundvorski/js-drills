export function secondLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(const n of nums) {
        if(largest < n) {
            secondLargest = largest;
            largest = n;
        } else if(secondLargest < n && n != largest) secondLargest = n;
    }

    return secondLargest === -Infinity ? largest : secondLargest;
}


import assert from 'node:assert';
assert.strictEqual(secondLargest([-5, -2, -10]), -5);
assert.strictEqual(secondLargest([]), -Infinity);
assert.strictEqual(secondLargest([7]), 7);
assert.strictEqual(secondLargest([5, 5, 3]), 3);
console.log('ok');