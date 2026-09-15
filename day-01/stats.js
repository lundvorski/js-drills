import {readFile} from "node:fs/promises";
import {sum} from "./sum-array.js";

function min(numArray) {
    if(numArray.length == 0) return undefined;
    return Math.min(...numArray);
}

function max(numArray) {
    if(numArray.length == 0) return undefined;
    return Math.max(...numArray);
}

function mean(numArray) {
    if(numArray.length == 0) return undefined;
    return sum(numArray)/numArray.length;
}

function median(numArray) {
    if(!numArray.length) return undefined;
    if(numArray.length % 2 == 0) {
        return (numArray[numArray.length]+numArray[numArray.length-1]) / 2;
    } else return numArray[Math.floor(numArray.length/2)];
}

function mode(numArray) {
    if(numArray.length == 0) return undefined;
    let mode = new Set();
    let highestIters = 0;
    for(const n of numArray) {
        let iters = 0;
        for(const m of numArray) {
            if(m==n) iters++;
        }
        if (iters > highestIters) {
            highestIters = iters;
            mode.clear();
            mode.add(n);
        } else if(iters == highestIters) {
            mode.add(n);
        }
        iters = 0;
    }
    return [...mode];
}

function stdDev(numArray, mean) {
    let sum = 0;
    for(const n of numArray) {
        sum += (n - mean)**2;
    }
    return Math.sqrt(sum / numArray.length);
}


const file = process.argv[2];
try {
    const data = await readFile(file, 'utf-8');
    const numList = data.split(',').map(c => Number(c));
    console.log(`Count: ${numList.length}`);
    console.log(`Min: ${min(numList)}`);
    console.log(`Max: ${max(numList)}`);
    console.log(`Mean: ${mean(numList)}`);
    console.log(`Median: ${median(numList)}`);
    console.log(`Mode: ${mode(numList)}`);
    console.log(`Standard deviation: ${stdDev(numList,mean(numList))}`);
} catch (error) {
    console.error('Error handling file:', error.message);
}