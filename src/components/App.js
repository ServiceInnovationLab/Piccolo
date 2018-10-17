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
import { PageHeader, SectionHeader } from '../page/Header';
import { PageFooter } from '../page/Footer';
import { Form } from '../components/Form/Form';
import { Field } from '../components/Form/Field';
import { Madlib } from '../components/Madlib';
import { IconCircle } from '../elements/Icon';

class App extends Component {
  render() {
    return <Fragment>
      <Container>
        <Madlib />
      </Container>
      <IconCircle value="62" />
      <IconCircle dark check />
      <PageHeader />
      <PageFooter />
      <main>
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
          <SectionHeader
            title="When can I get a pension"
            subtitle="Enter some details to see eligibility across nations"
          />
          <Container>
            <Form>
              <Field
                label="Years worked"
                name="afield"
                type="number"
              />
              <Field
                label="Years lived in the country"
                name="afield1"
                type="number"
              />
              <Field
                label="Number of children"
                name="afield2"
                type="number"
              />
              <Field
                label="Gender"
                name="afield3"
              />
              <Field
                label="Do you have a partner"
                name="afield4"
              />
            </Form>
          </Container>
        </Section>

        <Section light>
          <SectionHeader
            title="When can I get a pension"
            subtitle="Enter some details to see eligibility across nations"
          />
        </Section>

        <Section grey>
          <SectionHeader
            title="When can I get a pension"
            subtitle="Enter some details to see eligibility across nations"
          />
        </Section>

        <TextField />

      </main>
    </Fragment>;
  }
}


function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
