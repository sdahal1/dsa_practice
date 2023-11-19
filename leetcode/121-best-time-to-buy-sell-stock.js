/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices.length){
        return 0;
    }

    let left = 0;
    let maxProfit = 0;
    for(let right = 1; right < prices.length; right++){
        const leftPrice = prices[left];
        const rightPrice = prices[right];
        if(rightPrice < leftPrice){
            left = right;
            // right = left+1;
        }else{
            if(rightPrice-leftPrice > maxProfit){
                maxProfit = rightPrice - leftPrice;
            } 
        }
    }

    return maxProfit;
};

// console.log(maxProfit([23, 30, 7, 18, 4, 14, 2, 12, 9, 16, 3, 11, 20, 8, -5, 8, 19, 1, 18, 6, 17, 13, 15]))
// console.log(maxProfit([2,1,4]))
/* 

mp = 5
lowestPriceSoFar = 1
[7,1,5,3,6,4]
   i
           j


mp = 7
lowestPriceSoFar = 23

[23, 30, 7, 18, 4, 14, 2, 12, 9, 16, 3, 11, 20, 8, -5, 8, 19, 1, 18, 6, 17, 13, 15] 
 l  
         r

*/
function maxProfit2(prices=[]){
    if(prices.length === 0) return 0;
    let maxProfit = 0;
    let lowestPriceSoFar = prices[0];
    let i = 0;
    let j = 1;
    while(j<prices.length){
        const buyPrice = prices[i];
        const sellPrice = prices[j];
        const profit = sellPrice - buyPrice;
        if(profit > maxProfit){
            maxProfit = profit;
            j++;
        }else{
            if(sellPrice < lowestPriceSoFar){
                lowestPriceSoFar = sellPrice;
                i = j;
                j = i+1;
            }else{
                j++;
            }
        }
        
        
    }
    return maxProfit
}

function maxProfitNeetCode(prices=[]){
    let [l,r] = [0,1];
    let maxProfit = 0;
    while(r<prices.length){
        if(prices[l] < prices[r]){
            profit = prices[r] - prices[l];
            maxProfit = Math.max(profit, maxProfit);
        }else{
            l = r;
        }
        r++;
    }
    return maxProfit
}

console.log(maxProfitNeetCode([7,1,5,3,6,4]))
console.log(maxProfitNeetCode([23, 30, 7, 18, 4, 14, 2, 12, 9, 16, 3, 11, 20, 8, -5, 8, 19, 1, 18, 6, 17, 13, 15]))
