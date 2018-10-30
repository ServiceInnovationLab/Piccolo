import React from 'react';
import Paragraph from '../elements/Paragraph';
import Container from '../elements/Container';
import Section from '../elements/Section';
import { H2 } from '../elements/Headings';
import Grid, { Column } from '../elements/Grid';
import MadLib from '../components/Madlib';
import { IconCircle } from '../elements/Icon';
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

const EligibleHeader = props => <Paragraph medium adjust>
  You are eligible for a pension at age <span>{props.age}</span>
</Paragraph>;

export const SectionThree = props => <div style={{ display: props.show }}><Section light>
  <Container>
    <MadLib
      values={props.values}
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

export class SectionFive extends React.Component {
  render() {
    return (
      <Section light>
        <Container>
          <Grid>
            {this.props.new_zealand !== undefined && <Column>
              <H2>New Zealand</H2>
              <EligibleHeader age={this.props.new_zealand.data.persons.Tahi.super___eligibility_age['2018-08']} />
              <IconCircle value={this.props.new_zealand.data.persons.Tahi.super___eligibility_age['2018-08']} />
              <Paragraph>Government pension is called  New Zealand Superannuation, known as NZ Super for short.</Paragraph>
              <List>
                <Item>Gender does not determine eligibility in New Zealand.</Item>
                <Item>You don't have to be retired from work to get NZ Super as it is not income tested.</Item>
                <Item>Overseas benefits or pensions will generally be deducted from NZ Super.</Item>
                <Item>To get NZ Super you must have lived in NZ for at least 10 years since you turned 20. Five of those years must be since you turned 50.</Item>
              </List>
              <Paragraph>
                <Link href="https://www.govt.nz/browse/tax-benefits-and-finance/new-zealand-superannuation-and-the-veterans-pension/nz-superannuation-and-the-veterans-pension-overview/" text="Apply for NZ Super Online"></Link>
              </Paragraph>
            </Column>}

            {this.props.israel !== undefined && <Column>
              <H2>Israel</H2>
              <EligibleHeader age={this.props.israel.data.persons.Tahi.pension_eligibility_age['2018-01']} />
              <IconCircle value={this.props.israel.data.persons.Tahi.pension_eligibility_age['2018-01']} />
              <Paragraph>Government pensions are known as old age pensions, sometimes referred to as insurance.</Paragraph>
              <List>
                <Item>Eligibility is determined by gender, payments to old age insurance, income test and the type of employment you have been in.</Item>
                <Item>You must have been living in Israel for at least 5 years before you retire.</Item>
                <Item>There are two stages of pensions; one at age 62 for women and 67 for men, and a second age pension at 70 which has less eligibility requirements than the first age pension.</Item>
              </List>
            </Column>}
          </Grid>
        </Container>
      </Section>
    );
  }
}

