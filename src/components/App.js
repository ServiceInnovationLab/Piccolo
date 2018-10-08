import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <p>International Legislation as Code exploration</p>
    );
  }
}


function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
