const nums = [2,4,1,22,77,5343,3456,776];
let largest = 0;
let secondLargest = 0;

nums.forEach(x => {
    if( largest < x) {
        secondLargest = largest;
        largest = x
    } else if(secondLargest < x) secondLargest = x;
})

console.log(secondLargest);