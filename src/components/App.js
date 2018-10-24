import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { PageHeader } from '../page/Header';
import PageFooter from '../page/Footer';
import IsraelData from '../data/IsraelData';
import UruguayData from '../data/UruguayData';
import NzData from '../data/NzData';
import {SectionOne, SectionTwo, SectionThree} from '../page/Sections';

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
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleIsraelResults = this.handleIsraelResults.bind(this);
    this.handleNzResults = this.handleNzResults.bind(this);
    this.handleUruguayResults = this.handleUruguayResults.bind(this);
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

  handleIsraelResults(data) {
    this.setState({israel_results: data, isLoading: true});
  }
  handleNzResults(data) {
    this.setState({nz_results: data, isLoading: true});
  }
  handleUruguayResults(data) {
    this.setState({uruguay_results: data, isLoading: true});
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
          israel_input_data={this.state.israel_input_data}
          handleIsraelResults={this.handleIsraelResults}
          israel_results={this.state.israel_results}
          nz_input_data={this.state.nz_input_data}
          handleNzResults={this.handleNzResults}
          nz_results={this.state.nz_results}
          uruguay_input_data={this.state.uruguay_input_data}
          handleUruguayResults={this.handleUruguayResults}
          uruguay_results={this.state.uruguay_results} />
      </main>
      <PageFooter />
    </Fragment>;
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
