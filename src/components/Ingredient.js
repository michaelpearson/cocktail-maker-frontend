import React, { Component } from 'react';


export default class Ingredient extends Component {

  render() {
    return (<div onClick={this.props.onEdit }>
      <span>{ this.props.name }</span>
    </div>);
  }

}