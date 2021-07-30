export const pointChecker = (number, symbol) => {
    if (number.indexOf(symbol) === -1 && number !== '') {
        return number + symbol;
    } else {
        return number
    }
};