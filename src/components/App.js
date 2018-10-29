import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { PageHeader } from '../page/Header';
import PageFooter from '../page/Footer';
import IsraelData from '../data/IsraelData';
import UruguayData from '../data/UruguayData';
import NzData from '../data/NzData';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive
} from '../page/Sections';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      israel_input_data: {},
      israel_results: {},
      nz_input_data: {},
      nz_results: {},
      uruguay_input_data: {},
      uruguay_results: {},
      form_data: {},
      data: [],
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleIsraelResults = this.handleIsraelResults.bind(this);
    // this.handleNzResults = this.handleNzResults.bind(this);
    // this.handleUruguayResults = this.handleUruguayResults.bind(this);
    this.handleData = this.handleData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setRadio = this.setRadio.bind(this);
    this.setName = this.setName.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  handleData(data, country) {
    let results = {[country]: data};
    this.state.data.push(results);
  }

  setName(el) {
    if(el.name === 'gender') {
      return this.state.setGender;
    } else if(el.name === 'has_partner') {
      return this.state.setPartner;
    } else {
      return el.value;
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({isLoading: false});

    const values = Array.prototype.slice.call(e.target)
      .reduce((form, el) => ({
        ...form,
        [el.name]: this.setName(el),
      }), {});
    this.setState({
      israel_input_data: IsraelData(values),
      isLoading: true,
      nz_input_data: NzData(values),
      uruguay_input_data: UruguayData(values),
      form_data: values
    });
  }

  setRadio(event) {
    this.setState({[event.target.name === 'gender' ? 'setGender' : 'setPartner']: event.target.value});
  }

  render() {
    return <Fragment>
      <PageHeader />
      <main>
        <SectionOne />
        <SectionTwo
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          state={this.state}
          setRadio={this.setRadio.bind(this)} />
        <SectionThree
          show={this.state.isLoading ? 'block' : 'none'}
          state={this.state}
        />
        <SectionFour
          show={this.state.isLoading ? 'block' : 'none'}
        />
        <SectionFive
          show={this.state.isLoading ? 'block' : 'none'}
          state={this.state}
          israel_input_data={this.state.israel_input_data}
          handleData={this.handleData}
          nz_input_data={this.state.nz_input_data}
          uruguay_input_data={this.state.uruguay_input_data}
          data={this.state.data}
        />
        {/* {console.log(this.state)} */}
      </main>
      <PageFooter />
    </Fragment>;
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
