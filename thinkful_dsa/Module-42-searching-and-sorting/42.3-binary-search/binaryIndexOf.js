function binaryIndexOf(compare, arr=[]){
    console.log("running binaryIndexOf");
    let left = 0;
    let right = arr.length-1;
    // let idx = Math.floor((left+right)/2);
    // console.log(idx)
    while(left <= right){
        const idx = Math.floor((left+right)/2);
        // console.log({element: arr[idx], idx, left, right})
        const element = arr[idx]
        if(compare(element, idx, arr) === 0){
            return idx;
        }
        if(compare(element, idx, arr) < 0){
            left = idx+1
        }else{
            right = idx-1
        }
    }

    return -1
}

module.exports = binaryIndexOf;

