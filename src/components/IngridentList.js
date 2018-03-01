import React, { Component } from 'react';
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {

  render() {
    return (
      <div>
        { this.props.ingredients.map((ingredient) =>
          <Ingredient
            name={ingredient.name}
            onEdit={() => this.props.editIngredient(ingredient)} />) }
      </div>
    );
  }

}