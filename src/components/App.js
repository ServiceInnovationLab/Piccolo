import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import axios from 'axios';
import { PageHeader, SectionHeader } from '../page/Header';
import PageFooter from '../page/Footer';
import { FieldWrapper, Label, TextFieldWrapper } from '../components/Field';
import Form from '../components/Form';
import Section from '../elements/Section';
import TextField from '../elements/TextField';
import {
  SectionOne,
  SectionThree,
  SectionFive
} from '../page/Sections';
import countries from '../data/countries';
import formFields from '../data/formFields';
import DATA from '../data/Data';
import Container from '../elements/Container';

import {
  RadioGroupWrapper,
  RadioGroupInner,
  Radio,
  RadioLabel,
  RadioSpan
} from '../elements/RadioGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleValue = this.handleValue.bind(this);
    console.log('this works');
  }

  handleValue(e) {
    this.setState({ [e.target.name]: e.target.value }, this.queryApi);
  }

  queryApi() {
    DATA['New Zealand'].persons.Tahi.total_number_of_years_lived_in_nz_since_age_20['2018-08'] = Number(this.state.years_worked);
    DATA['New Zealand'].persons.Tahi.total_number_of_years_lived_in_nz_since_age_50['2018-08'] = Number(this.state.years_worked);
    DATA.Israel.persons.Tahi.gender['2018-08'] = this.state.gender;
    DATA.Israel.persons.Tahi.pension_contributing_years['2018-08'] = Number(this.state.years_worked);

    DATA.Uruguay.persons.Tahi.gender['2018-08'] = this.state.gender;
    DATA.Uruguay.persons.Tahi.number_of_years_worked['2018-08'] = Number(this.state.years_worked);
    DATA.Uruguay.persons.Tahi.number_of_children['2018-08'] = Number(this.state.number_of_children);

    countries.map(country => axios
      .post(country.api_url, DATA[country.name])
      .then(results => (results.status && results.status === 200 ? this.setState({ [`${country.name.toLowerCase().replace(' ', '_')}_results`]: results }) : {}))
      .catch(err => err)
    );
  }

  hasRequiredValues() {
    return this.state.israel_results && this.state.new_zealand_results && this.state.uruguay_results;
  }

  render() {
    return (
      <Fragment>
        <PageHeader />
        <SectionOne />
        <main>
          <Section dark center>
            <SectionHeader
              title="When can I get a pension"
              subtitle="Enter in some details to see eligibility across nations."
            />
            <Container>
              <Form>
                {formFields.map((field, i) => <FieldWrapper key={i}>
                  <Label htmlFor={field.name}>
                    <span>{field.label}</span>
                  </Label>
                  {field.type === 'number' && <TextFieldWrapper>
                    <TextField type={field.type} name={field.name} onChange={e => this.handleValue(e)} small />
                  </TextFieldWrapper>}

                  {field.type === 'radio' && <TextFieldWrapper>
                    <RadioGroupWrapper>
                      <RadioGroupInner>
                        <div onChange={e => this.handleValue(e)}>
                          {field.values.map((val, i) => <RadioLabel key={i}>
                            <Radio
                              name={field.name}
                              value={val || ''}
                            />
                            <RadioSpan>{val}</RadioSpan>
                          </RadioLabel>)}
                        </div>
                      </RadioGroupInner>
                    </RadioGroupWrapper>
                  </TextFieldWrapper>}


                </FieldWrapper>)}
              </Form>
            </Container>
          </Section>
        </main>
        <SectionThree
          values={this.state}
        />
        {this.hasRequiredValues() && <SectionFive
          israel={this.state.israel_results}
          new_zealand={this.state.new_zealand_results}
          uruguay={this.state.uruguay_results}
          age={this.state.age}
        />}
        <PageFooter />
      </Fragment>
    );
  }
}

export default App;
