import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { Textfield } from '../elements/Input';
import { Button } from '../elements/Button';
import { Section } from '../elements/Section';

class App extends Component {
  render() {
    return <Fragment><p>International Legislation as Code exploration</p>
      <Button>Calculate</Button>
      <Section dark>BLABLABLA</Section>
      <Textfield /></Fragment>;
  }
}


function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
