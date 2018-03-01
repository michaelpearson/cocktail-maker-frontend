import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editIngredient } from "../actions/ingridents";
import IngredientList from "../components/IngridentList";

class IngredientContainer extends Component {

  render() {
    return (<IngredientList ingredients={ this.props.ingredients } onEdit={ this.props.editIngredient } />);
  }

}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients
});

const mapDispatcherToProps = {
  editIngredient
};

export default connect(mapStateToProps, mapDispatcherToProps)(IngredientContainer);