/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if(columnNumber<=26){
        return letters[columnNumber-1]
    }
    let result = ""
    while(columnNumber>26){
        let remainder = columnNumber%26;
        if(remainder == 0){
            remainder = 26;
            columnNumber--;
        }
        result = letters[remainder-1] + result
        columnNumber = Math.floor(columnNumber/26);
    }
    if(columnNumber > 0) result = letters[columnNumber-1] + result;
    return result;
};


console.log(convertToTitle(26)); //Z
console.log(convertToTitle(27)); //AA
console.log(convertToTitle(28)); //AB
console.log(convertToTitle(52)); //AZ
console.log(convertToTitle(56)); //BD
console.log(convertToTitle(66)); //BN
console.log(convertToTitle(156)); //EZ
console.log(convertToTitle(504)); //SJ

/* 
26 = z
27 = AA
28 = AB
29 = AC
30 = AD 
31 = Ae 
32 = Af
33 = Ag
34 = Ah
35 = Ai
36 = Aj
37 = Ak
38 = Al
39 = Am
40 = An
41 = Ao
42 = Ap
43 = Aq
44 = Ar
45 = As
46 = At
47 = Au
48 = Av
49 = Aw
50 = Ax
51 = Ay
52 = AZ
53 = BA
54 = BB
55 = BC
56 = BD
57 = BE
58 = BF
59 = BG
60 = BH
61 = BI
62 = BJ
63 = BK
64 = BL
65 = BM
66 = BN
*/