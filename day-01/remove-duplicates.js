const array = ['erd', 'pas', 'las', 'pas', 'mas', 'erd'];
let removedDuplicatesArray = [];

array.forEach(x => {
    if(!removedDuplicatesArray.includes(x)) removedDuplicatesArray.push(x);
})

console.log(removedDuplicatesArray);