/*
An array is given as Input where ith element is the price of a given stock on day
 You were permitted to complete unlimited transaction. 
 Derive an algorithm to find the maximum profit in O(n) Time complexity and O(n) Space Complexity
*/

const stockBuySell = (prcArr) => {
    for(let i=0; i<prcArr.length-1; i++) {
        let stock = {
            buy: '',
            sell: ''
        }

        while(i < prcArr.length-1 && prcArr[i] >= prcArr[i+1]) {
            i++;
        }
        if(i == prcArr.length-1) {
            break;
        }
        stock.buy = i++;

        while(i < prcArr.length && prcArr[i] >= prcArr[i-1]) {
            i++;
        }
        stock.sell = i-1;
        i--;

        console.log(`Buy on Day: ${stock.buy} at Price: ${prcArr[stock.buy]} | Sell on Day: ${stock.sell} at Price: ${prcArr[stock.sell]}`);
        
    }
}
const prices = [100, 180, 260, 310, 40, 535, 695];
stockBuySell(prices);