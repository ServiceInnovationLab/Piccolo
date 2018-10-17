import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { TextField } from '../elements/Input';
import { Button } from '../elements/Button';
import { Section } from '../elements/Section';
import { Container } from '../elements/Container';
import { Paragraph } from '../elements/Paragraph';
import { List, Item } from '../elements/List';
import { Grid, Column } from '../elements/Grid';
import { CreativeCommons } from './CreativeCommons';
import { PageHeader } from '../page/Header';

class App extends Component {
  render() {
    return <Fragment>
      <PageHeader />
      <main>
        <Container>
          <Paragraph small>This is what small text looks like</Paragraph>
          <Paragraph medium>This is what medium text looks like</Paragraph>
          <Paragraph large>This is what large text looks like</Paragraph>
          <Grid>
            <Column>Column 1</Column>
            <Column>Column 2</Column>
            <Column>Column 3</Column>
          </Grid>
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
        </Container>
      </main>
    </Fragment>;
  }
}


function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
