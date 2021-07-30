export const getOperator = (state, value) => {
    if (state.operator === '') {
        state.operator = value;
    }
};