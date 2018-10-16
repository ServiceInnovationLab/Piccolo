import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { TextField } from '../elements/Input';
import { Button } from '../elements/Button';
import { Section } from '../elements/Section';
import { Container } from '../elements/Container';
import { List, Item } from '../elements/List';
import { CreativeCommons } from './CreativeCommons';

class App extends Component {
  render() {
    return <Container>
      <p>International Legislation as Code exploration</p>
      <CreativeCommons label="Content about creative commons"/>

      <Button>Calculate</Button>

      <List stripped>
        <Item>About this website</Item>
        <Item>Contact Us</Item>
      </List>

      <Section dark>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </Section>

      <Section light>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </Section>

      <Section grey>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </Section>

      <TextField />
    </Container>;
  }
}


function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
