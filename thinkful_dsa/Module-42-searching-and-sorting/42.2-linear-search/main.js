function indexOf(toFind, elements=[], val) {
    for (let i = 0; i < elements.length; i++) {
        let currentElem = elements[i];
        // console.log({i, currentElem})
        if(toFind(currentElem, val)) return i;
    }
    return -1;
}


const people = [
    {
        id: 1,
        first_name: "Monah",
        last_name: "Yarnall",
        age: 17,
    },
    {
        id: 2,
        first_name: "Daphne",
        last_name: "McGaugey",
        age: 81,
    },
    {
        id: 3,
        first_name: "Walker",
        last_name: "Bucknell",
        age: 81,
    },
];

function personIsAgeNum(personObj, num){
    return personObj.age === num;
}

function isNumVal(num, val){
    return num === val;
}

// console.log(indexOf(isNumVal, [2,5,8,2,1,3,4], 3))
console.log(indexOf(personIsAgeNum, people, 81))

