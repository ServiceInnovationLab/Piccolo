import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { Button } from '../elements/Button';
import { Section } from '../elements/Section';
import { Container } from '../elements/Container';
import { Paragraph } from '../elements/Paragraph';
import { H2 } from '../elements/Headings';
import { Grid, Column } from '../elements/Grid';
import { PageHeader, SectionHeader } from '../page/Header';
import { PageFooter } from '../page/Footer';
import { Form } from './Form';
import { Field } from './Field';
import { Madlib } from '../components/Madlib';
import { IconCircle } from '../elements/Icon';

class App extends Component {
  render() {
    return <Fragment>
      <PageHeader />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <PageFooter />
    </Fragment>;
  }
}

const SectionOne = () => <Section light>
  <Container>
    <Paragraph small>
      Welcome to the piccolo legislation as code demonstrator.
    </Paragraph>
    <Paragraph small>
      There are many rules about how we do things around the world. Some of these are coded into law, such as voting ages, tax rates, and access to services. Sometimes these rules can be really complicated for a human to sit down and work out, but really easy for a machine to do.</Paragraph>

    <Paragraph small>
      Legislation as code is when we turn those rules into things machines can use so they can work things out for us.
    </Paragraph>
  </Container>
</Section>;

const SectionTwo = () => <Section dark center>
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
      <Button>Calculate</Button>
    </Form>

  </Container>
</Section>;

const SectionThree = () => <Section light>
  <Container>
    <Madlib />
    <Grid>
      <Column>
        <H2>New Zealand</H2>
        <Paragraph medium>You are eligible for a pension in</Paragraph>
        <IconCircle value="62" />
        <Paragraph small>
          If you are a citizen or permanent resident, not on ACC.
        </Paragraph>
        <Paragraph small>
          If you have a partner you can share your 'pension' with them if they aren't eligible
        </Paragraph>
      </Column>
      <Column>
        <H2>Israel</H2>
        <Paragraph medium>You are eligible for a pension in</Paragraph>
        <IconCircle value="62" />
        <Paragraph small>
          Each child (up to max of 5) counts as a 'year of work'.
        </Paragraph>
        <Paragraph small>
          You must have contributed to your pension for 30 years or more.
        </Paragraph>
      </Column>
      <Column>
        <H2>Uruguay</H2>
        <Paragraph medium height="55">
          You are eligible now
        </Paragraph>
        <IconCircle dark check />
        <Paragraph small>
          Each child (up to max of 5) counts as a 'year of work'.
        </Paragraph>
        <Paragraph small>
          You must have contributed to your pension for 30 years or more.
        </Paragraph>
      </Column>
    </Grid>
  </Container>
</Section>;

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
