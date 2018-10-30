import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import { PageHeader, SectionHeader } from '../page/Header';
import PageFooter from '../page/Footer';
import {FieldWrapper, Label, TextFieldWrapper} from '../components/Field';
import Form from '../components/Form';
import Section from '../elements/Section';
import TextField from '../elements/TextField';
import {
  SectionOne,
  SectionThree,
  SectionFour,
  SectionFive
} from '../page/Sections';
import countries from '../data/countries';
import axios from 'axios';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input_data: [],
//       israel_results: {},
//       nz_results: {},
//       uruguay_results: {},
//       form_data: {},
//       data: [],
//       isLoading: true,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleData = this.handleData.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.setRadio = this.setRadio.bind(this);
//     this.setName = this.setName.bind(this);
//   }

//   componentDidMount() {
//     this.setState({isLoading: false});
//   }

//   componentDidUpdate() {
//     countries.map(country=>this.getResults(country));
//   }

//   handleChange(e, name) {
//     this.setState({ [name]: e.target.value });
//   }

//   handleData(data, country) {
//     if(data.data !== null) {
//       let results = {[country]: data.data};
//       this.state.data.push(results);
//     }
//   }

//   setName(el) {
//     if(el.name === 'gender') {
//       return this.state.setGender;
//     } else if(el.name === 'has_partner') {
//       return this.state.setPartner;
//     } else {
//       return el.value;
//     }
//   }

//   onSubmit(e) {

//     e.preventDefault();
//     // console.log(data)

//     this.setState({isLoading: false});


//     const values = Array.prototype.slice.call(e.target)
//       .reduce((form, el) => ({
//         ...form,
//         [el.name]: this.setName(el),
//       }), {});
//     this.setState({
//       isLoading: true,
//       form_data: values,
//       input_data: [{'Israel': IsraelData(values)}, {'New Zealand': NzData(values)}]
//     });
//   }

//   setRadio(event) {
//     this.setState({[event.target.name === 'gender' ? 'setGender' : 'setPartner']: event.target.value});
//   }

//   getResults(country) {
//     if(this.state.input_data.length > 0) {
//       this.state.input_data.forEach((item) => {
//         return axios
//           .post(country.api_url, item[country.name])
//           .then(res => this.handleData(res, country.name))
//           .catch(err => err);
//       });
//     }
//   }

//   render() {
//     return <Fragment>
//       <PageHeader />
//       <main>
//         {/* {console.log(this.state)} */}
//         <SectionOne />
//         <SectionTwo
//           // onSubmit={this.onSubmit}
//           handleChange={this.handleChange}
//           state={this.state}
//           setRadio={this.setRadio.bind(this)}
//           onSubmit={this.onSubmit}
//         />
//         <SectionThree
//           show={this.state.isLoading ? 'block' : 'none'}
//           state={this.state}
//         />
//         <SectionFour
//           show={this.state.isLoading ? 'block' : 'none'}
//         />
//         {/* section 5 */}
//         {/* {console.log(this.state.data2)} */}
//         {this.state.data2 !== undefined ?
//           console.log(this.state.data2.length)
//           : console.log(2)}

//       </main>
//       <PageFooter />
//     </Fragment>;
//   }
// }

// function mapStateToProps(state) {
//   return { state };
// }

// export default connect(mapStateToProps, actionCreators)(App);

import formFields from '../data/formFields';
import DATA from '../data/Data';
import Container from '../elements/Container';
// import TextField  from '../elements/TextField ';

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
  }

  handleValue(e) {
    this.setState({[e.target.name]: e.target.value});
    this.queryApi(e.target.name === 'gender' ? e.target.value : 'unspecified');
  }

  queryApi(state) {
    DATA['New Zealand'].persons.Tahi.total_number_of_years_lived_in_nz_since_age_20['2018-08'] = Number(this.state.years_worked);
    DATA['New Zealand'].persons.Tahi.total_number_of_years_lived_in_nz_since_age_50['2018-08'] = Number(this.state.years_worked);
    DATA['Israel'].persons.Tahi.gender['2018-01'] = state;
    DATA['Israel'].persons.Tahi.pension_contributing_years['2018-01'] = Number(this.state.years_worked);

    countries.map(country => axios
      .post(country.api_url, DATA[country.name])
      .then(results => results.status && results.status === 200 ? this.setState({[`${country.name.toLowerCase().replace(' ', '_')}_results`]: results}) : {})
      .catch(err => err)
    );
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
                {formFields.map((field, i)=><FieldWrapper key={i}>
                  <Label htmlFor={field.name}>
                    <span>{field.label}</span>
                  </Label>
                  {field.type === 'number' && <TextFieldWrapper>
                    <TextField type={field.type} name={field.name} onChange={e => this.handleValue(e)} small />
                  </TextFieldWrapper>}

                  {field.type === 'radio' && <TextFieldWrapper>
                    <RadioGroupWrapper>
                      <RadioGroupInner>
                        <div onChange={e=>this.handleValue(e)}>
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
        <SectionFour />
        {this.state.israel_results && this.state.new_zealand_results && <SectionFive
          israel={this.state.israel_results && this.state.israel_results}
          new_zealand={this.state.new_zealand_results && this.state.new_zealand_results}
          age={this.state.age}
        />}
        <PageFooter />
      </Fragment>
    );
  }
}

export default App;
