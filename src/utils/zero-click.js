export const getStrWithZero = (str, symbol) => {
    if (str !== symbol || str === `${symbol}.`) {
        return str + symbol;
    } else {
        return str;
    }
};