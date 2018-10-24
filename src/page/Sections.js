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

export const SectionOne = () => <Section light>
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

export const SectionTwo = props => <Section dark center>
  <SectionHeader
    title="When can I get a pension"
    subtitle="Enter some details to see eligibility across nations"
  />
  <Container>
    <Form onSubmit={(e)=>props.onSubmit(e)}>
      {formFields.map(item => {
        return <Field
          key={item.name}
          label={item.label}
          name={item.name}
          type={item.type}
          values={item.values && item.values}
          handleChange={item.type.toString() === 'radio' ? props.handleChange : e=>props.handleChange(e, e.target.name)}
          setRadio={props.setRadio}
        />;
      })}
      {!props.state.isLoading && <Button>Calculate</Button>}
    </Form>

  </Container>
</Section>;

export const ColumnHeader = props => <Fragment>
  <H2>{props.country}</H2>
  <Paragraph medium adjust>{!props.eligible ? 'You are eligible for a pension at' : 'You are eligible now'}</Paragraph>
  {props.country === 'Israel' && <IconCircle value={props.israel.data ? props.israel.data.persons.Tahi.pension_eligibility_age['2018-01'] : ''} />}
</Fragment>;

export const SectionThree = props => <div style={{display: props.show}}><Section light>
  <Container>
    <MadLib
      values={props.state}
    />
    {props.israel_input_data.persons && <IsraelQuery
      handleIsraelResults={props.handleIsraelResults}
      data={props.israel_input_data}
    />}

    <Grid>
      {countries.map((item, i) => <Column key={i}>
        <ColumnHeader
          country={item.name}
          eligible={item.eligible}
          israel={props.israel_results}
        />
        {props.state.hasCitizenship && <Paragraph small>
          If you are a citizen or permanent resident, not on ACC.
        </Paragraph>}
        {item.name === 'Israel' && props.state.has_partner === 'yes' && <Paragraph small>
          If you have a partner you can share your 'pension' with them if they aren't eligible
        </Paragraph>}

        {item.name === 'Israel' && props.state.number_of_children > 0 && item.name !== 'New Zealand' && <Paragraph small>
          Each child (up to max of 5) counts as a 'year of work'.
        </Paragraph>}

        {item.name === 'Israel' && props.state.years_worked < item.reqContributionYears && <Paragraph small>
          You must have contributed to your pension for {item.reqContributionYears} years or more.
        </Paragraph>}
      </Column>)};
    </Grid>
  </Container>
</Section></div>;
