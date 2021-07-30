export const changeNumber = (state, func, symbol) => {
    let { firstNumber, operator, secondNumber } = { ...state };

    if(operator === '') {
        firstNumber = func(firstNumber, symbol, operator);
        state.firstNumber = firstNumber;
        state.display = firstNumber;
    } else {
        secondNumber = func(secondNumber, symbol, operator, firstNumber);
        state.secondNumber = secondNumber;
        state.display = secondNumber;
    }
};