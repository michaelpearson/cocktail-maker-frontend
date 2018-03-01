import React, { Component } from 'react';
import { connect } from 'react-redux'
import IngredientContainer from "../containers/IngredientContainer";

class App extends Component {

  render() {
    return (
      <div>
        <IngredientContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatcherToProps = {};

export default connect(mapStateToProps, mapDispatcherToProps)(App);