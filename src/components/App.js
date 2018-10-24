import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import Button from '../elements/Button';
import Section from '../elements/Section';
import Container from '../elements/Container';
import Paragraph from '../elements/Paragraph';
import { H2 } from '../elements/Headings';
import Grid, { Column } from '../elements/Grid';
import { PageHeader, SectionHeader } from '../page/Header';
import PageFooter from '../page/Footer';
import Form from './Form';
import Field from './Field';
import MadLib from '../components/Madlib';
import { IconCircle } from '../elements/Icon';
import countries from '../data/countries';
import IsraelQuery from './IsraelQuery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  render() {
    return <Fragment>
      <main>
        <SectionOne />
        <SectionTwo handleChange={this.handleChange} />
        <SectionThree state={this.state} />
      </main>
      <PageFooter />
    </Fragment>;
  }
}

const SectionOne = () => <Section light>
  <Container>
    <Paragraph small>
      Welcome to the legislation as code demonstrator.

    </Paragraph>
    <Paragraph small>
      There are many rules about how we do things around the world. Some of these are coded into law, such as voting ages, tax rates, and access to services. Sometimes these rules can be really complicated for a human to sit down and work out, but really easy for a machine to do.</Paragraph>

    <Paragraph small>
      Legislation as code is when we turn those rules into things machines can use so they can work things out for us.
    </Paragraph>

    <IsraelQuery />
  </Container>
</Section>;




const SectionTwo = props => <Section dark center>
  <SectionHeader
    title="When can I get a pension"
    subtitle="Enter some details to see eligibility across nations"
  />
  <Container>
    <Form>
      <Field
        label="What is your age?"
        name="age"
        type="number"
        handleChange={props.handleChange}
      />
      <Field
        label="Years worked"
        name="years_worked"
        type="number"
        handleChange={props.handleChange}
      />
      <Field
        label="Years lived in the country"
        name="years_lived_in_country"
        type="number"
        handleChange={props.handleChange}
      />
      <Field
        label="Number of children"
        name="number_of_children"
        type="number"
        handleChange={props.handleChange}
      />
      <Field
        label="Gender"
        name="gender"
        type="radio"
        values={['male', 'female']}
        handleChange={props.handleChange}
      />
      <Field
        label="Do you have a partner?"
        name="do_you_have_a_partner"
        type="radio"
        values={['yes', 'no']}
        handleChange={props.handleChange}
      />
      <Button>Calculate</Button>
    </Form>

  </Container>
</Section>;

const ColumnHeader = props => <Fragment>
  <H2>{props.country}</H2>
  <Paragraph medium adjust>{!props.eligible ? 'You are eligible for a pension at' : 'You are eligible now'}</Paragraph>
  <IconCircle value={props.age ? props.age : null} />
</Fragment>;

const SectionThree = props => <Section light>
  <Container>
    <MadLib
      values={props.state}
    />
    <Grid>
      {countries.map((item, i) => <Column key={i}>
        <ColumnHeader
          country={item.name}
          eligible={item.eligible}
          age={item.age}
        />
        {props.state.hasCitizenship && <Paragraph small>
            If you are a citizen or permanent resident, not on ACC.
          </Paragraph>}
        {props.state.do_you_have_a_partner === 'yes' && <Paragraph small>
            If you have a partner you can share your 'pension' with them if they aren't eligible
          </Paragraph>}

        {props.state.number_of_children > 0 && item.name !== 'New Zealand' && <Paragraph small>
            Each child (up to max of 5) counts as a 'year of work'.
          </Paragraph>}

        {props.state.years_worked > 0 && <Paragraph small>
            You must have contributed to your pension for {item.requiredContribution} years or more.
          </Paragraph>}
      </Column>)};
    </Grid>
  </Container>
</Section>;

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
