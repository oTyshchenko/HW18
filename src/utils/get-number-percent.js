export const getNumberPercent = (str, symbol, operator, fStr) => {
    if (operator === '') {
        return +str / 100;
    } else {
        return +fStr / 100 * +str;
    }
};