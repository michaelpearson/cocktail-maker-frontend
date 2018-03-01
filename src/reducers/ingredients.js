import { IngredientsActions } from "../actions/ingridents";

export default function (ingredientsState = [], action) {
  switch (action.type) {
    case IngredientsActions.ACTION_EDIT:
      return ingredientsState;
    default:
      return ingredientsState;
  }
}