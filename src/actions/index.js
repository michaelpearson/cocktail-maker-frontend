export const CounterActions = {
  ACTION_INCREMENT: 'INCREMENT',
  ACTION_DECREMENT: 'DECREMENT'
};

export const increment = () => ({
  type: CounterActions.ACTION_INCREMENT
});

export const decrement = () => ({
  type: CounterActions.ACTION_DECREMENT
});

export const autoIncrement = () => (dispatch) => {
  setInterval(() => dispatch({ type: CounterActions.ACTION_INCREMENT }), 1000);
};