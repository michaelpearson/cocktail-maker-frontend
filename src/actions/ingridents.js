export const IngredientsActions = {
  ACTION_EDIT: 'EDIT_INGREDIENT',
};

export const editIngredient = (ingredient) => ({
  type: IngredientsActions.ACTION_EDIT,
  ingredient
});

export const loadIngredients = () => (dispatch) => {
  dispatch()
};