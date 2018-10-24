import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import '../styles/App.css';
import { PageHeader } from '../page/Header';
import PageFooter from '../page/Footer';
import IsraelData from '../data/IsraelData';
import {SectionOne, SectionTwo, SectionThree} from '../page/Sections';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      israel_input_data: {},
      israel_results: {},
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleIsraelResults = this.handleIsraelResults.bind(this);
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
    this.setState({israel_input_data: IsraelData(values), isLoading: true});
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
          setRadio={this.setRadio.bind(this)}
        />
        {/* {TODO: Loading screen when request status is 200} */}
        <SectionThree
          show={this.state.isLoading ? 'block' : 'none'}
          state={this.state}
          israel_input_data={this.state.israel_input_data}
          handleIsraelResults={this.handleIsraelResults}
          israel_results={this.state.israel_results}
        />
      </main>
      <PageFooter />
    </Fragment>;
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actionCreators)(App);
