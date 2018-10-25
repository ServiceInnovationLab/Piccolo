import React, { Fragment } from 'react';
import Paragraph from '../elements/Paragraph';
import Container from '../elements/Container';
import Section from '../elements/Section';
import { SectionHeader } from '../page/Header';
import { H2 } from '../elements/Headings';
import Grid, { Column } from '../elements/Grid';
import Form from '../components/Form';
import Field from '../components/Field';
import formFields from '../data/formFields';
import Button from '../elements/Button';
import MadLib from '../components/Madlib';
import { IconCircle } from '../elements/Icon';
import countries from '../data/countries';
import IsraelQuery from '../components/IsraelQuery';
import NzQuery from '../components/NzQuery';
import UruguayQuery from '../components/UruguayQuery';
import List, { Item } from '../elements/List';
import Link from '../elements/Link';

export const SectionOne = () => <Section light>
  <Container>
    <Paragraph small>
      Welcome to the Legislation as Code demonstrator.
    </Paragraph>
    <Paragraph small>
      There are many rules about how we do things around the world. Some of these are coded into law, such as voting ages, tax rates, and access to services. Sometimes these rules can be really complicated for a human to sit down and work out, but really easy for a machine to do.</Paragraph>

    <Paragraph small>
      Legislation as code is when we turn those rules into things machines can use so they can work things out for us.
    </Paragraph>

  </Container>
</Section>;

export const SectionTwo = props => <Section dark center>
  <SectionHeader
    title="When can I get a pension"
    subtitle="Enter in some details to see eligibility across nations."
  />
  <Container>
    <Form onSubmit={(e) => props.onSubmit(e)}>
      {formFields.map(item => <Field
          key={item.name}
          label={item.label}
          name={item.name}
          type={item.type}
          values={item.values && item.values}
          handleChange={item.type.toString() === 'radio' ? props.handleChange : e => props.handleChange(e, e.target.name)}
          setRadio={props.setRadio}
        />)}
      {!props.state.isLoading && <Button>Calculate</Button>}
    </Form>

  </Container>
</Section>;

const EligibleHeader = props => <Paragraph medium adjust>
  You are eligible for a pension at age <span>{props.israel_age}</span>
</Paragraph>;

class ColumnHeader extends React.Component {

  constructor(props) {
    super(props);
    this.handleAge = this.handleAge.bind(this);
  }

  handleAge(country) {
    if (country === 'Israel') {
      return this.props.israel.data ? this.props.israel.data.persons.Tahi.pension_eligibility_age['2018-01'] : '';
    } else {
      return this.props.new_zealand.data ? this.props.new_zealand.data.persons.Tahi.super___eligibility_age['2018-08'] : '';
    }
  }

  render() {

    let age = this.handleAge(this.props.country);

    return <Fragment>
      <H2>{this.props.country}</H2>

      {this.props.country === 'Israel' &&
        <Fragment>
          <EligibleHeader age/>
          <IconCircle value={age} />
          <Paragraph>Government pensions are known as old age pensions, sometimes referred to as insurance.</Paragraph>
          <List>
            <Item>Eligibility is determined by gender, payments to old age insurance, income test and the type of employment you have been in.</Item>
            <Item>You must have been living in Israel for at least 5 years before you retire.</Item>
            <Item>There are two stages of pensions; one at age 62 for women and 67 for men, and a second age pension at 70 which has less eligibility requirements than the first age pension.</Item>
          </List>
        </Fragment>
      }

      {this.props.country === 'New Zealand' &&
        <Fragment>
          <EligibleHeader age />
          <IconCircle value={age} />
          <Paragraph>
            Government pension is called  New Zealand Superannuation, known as NZ Super for short.
          </Paragraph>
          <List>
            <Item>Gender does not determine eligibility in New Zealand.</Item>
            <Item>You don't have to be retired from work to get NZ Super as it is not income tested.</Item>
            <Item>Overseas benefits or pensions will generally be deducted from NZ Super.</Item>
            <Item>To get NZ Super you must have lived in NZ for at least 10 years since you turned 20. Five of those years must be since you turned 50.</Item>
          </List>
          <Paragraph>
            <Link href="https://www.govt.nz/browse/tax-benefits-and-finance/new-zealand-superannuation-and-the-veterans-pension/nz-superannuation-and-the-veterans-pension-overview/" text="Apply for NZ Super Online"></Link>
          </Paragraph>
        </Fragment>}
    </Fragment>;
  }
}

export const SectionThree = props => <div style={{ display: props.show }}><Section light>
  <Container>
    <MadLib
      values={props.state}
    />
  </Container>
</Section></div>;

export const SectionFour = props => <div style={{ display: props.show }}><Section dark>
  <Container>
    <Paragraph style={{ color: '#fff', textAlign: 'center' }}>
      Based on the information you entered, here is your eligibility for government pensions if you were applying in one of the following countries.
    </Paragraph>
  </Container>
</Section></div>;

export const SectionFive = props => <div style={{ display: props.show }}><Section light>
  <Container>

    {props.israel_input_data.persons && <IsraelQuery
      handleIsraelResults={props.handleIsraelResults}
      data={props.israel_input_data}
    />}
    {props.nz_input_data.persons && <NzQuery
      handleNzResults={props.handleNzResults}
      data={props.nz_input_data}
    />}
    {props.uruguay_input_data.persons && <UruguayQuery
      handleNzResults={props.handleUruguayResults}
      data={props.uruguay_input_data}
    />}

    <Grid>
      {countries.map((item, i) => <Column key={i}>
        <ColumnHeader
          country={item.name}
          eligible={item.eligible}
          israel={props.israel_results}
          new_zealand={props.nz_results}
          uruguay={props.uruguay_results}
          age={props.form_data}
        />
        {props.state.hasCitizenship && item.name === 'New Zealand' && <Paragraph small>
          If you are a citizen or permanent resident, not on ACC.
        </Paragraph>}
        {props.state.has_partner === 'yes' && item.name === 'New Zealand' && <Paragraph small>
          If you have a partner you can share your 'pension' with them if they aren't eligible
        </Paragraph>}

        {props.state.number_of_children > 0 && item.name === 'Israel' && <Paragraph small>
          Each child (up to max of 5) counts as a 'year of work'.
        </Paragraph>}

        {props.state.years_worked < item.reqContributionYears && item.name === 'Uruguay' && <Paragraph small>
          You must have contributed to your pension for {item.reqContributionYears} years or more.
        </Paragraph>}
      </Column>)}
    </Grid>
  </Container>
</Section></div>;
