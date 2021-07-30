const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

export const getResultState = (state) => {
    if (state.operator !== '' && state.secondNumber !== '' && state.firstNumber !== '') {
        let { firstNumber, operator, secondNumber } = { ...state };

        state.firstNumber = '';
        state.operator = '';
        state.secondNumber = '';
        state.display = operators[operator](+firstNumber, +secondNumber);
    }
};