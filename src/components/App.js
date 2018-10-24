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
import IsraelData from '../data/IsraelData';
import IsraelQuery from '../components/IsraelQuery';
import formFields from '../data/formFields';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      israel_data: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const values = Array.prototype.slice.call(e.target)
      .filter(el => el.name)
      .reduce((form, el) => ({
        ...form,
        [el.name]: el.value,
      }), {});

    this.setState({israel_data: IsraelData(values)});
  }

  render() {
    return <Fragment>
      <PageHeader />
      <main>
        <SectionOne
          israel_data={this.state.israel_data}
        />
        <SectionTwo
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          state={this.state}
        />
        <SectionThree state={this.state} />
      </main>
      <PageFooter />
    </Fragment>;
  }
}

const SectionOne = props => <Section light>
  <Container>
    <Paragraph small>
      Welcome to the piccolo legislation as code demonstrator.

    </Paragraph>
    <Paragraph small>
      There are many rules about how we do things around the world. Some of these are coded into law, such as voting ages, tax rates, and access to services. Sometimes these rules can be really complicated for a human to sit down and work out, but really easy for a machine to do.</Paragraph>

    <Paragraph small>
      Legislation as code is when we turn those rules into things machines can use so they can work things out for us.
    </Paragraph>

    <IsraelQuery data={props.israel_data} />
  </Container>
</Section>;


const SectionTwo = props => <Section dark center>
  <SectionHeader
    title="When can I get a pension"
    subtitle="Enter some details to see eligibility across nations"
  />
  <Container>
    <Form onSubmit={props.onSubmit}>
      {formFields.map(item => {
        return <Field
          key={item.name}
          label={item.label}
          name={item.name}
          type={item.type}
          values={item.values && item.values}
          handleChange={item.type.toString() === 'radio' ? props.handleChange : e=>props.handleChange(e, e.target.name)}
        />;
      })}
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
