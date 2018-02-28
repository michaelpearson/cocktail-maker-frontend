import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'
import { increment, decrement, autoIncrement } from "../actions/index";

class App extends Component {

  increment() {
    console.log('here');
    this.props.increment();
  }

  render() {
    return (
      <div>
        <Button text='Increment' onClick={ this.props.increment } />
        <Button text='Decrement' onClick={ this.props.decrement } />
        <Button text='Auto Increment' onClick={ this.props.autoIncrement } />
        <br />
        <span>{ this.props.counter }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatcherToProps = {
  increment,
  decrement,
  autoIncrement
};

export default connect(mapStateToProps, mapDispatcherToProps)(App);