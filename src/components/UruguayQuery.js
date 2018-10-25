import React from 'react';
import axios from 'axios';

class UruguayQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios
      .post('https://openfisca-israel.herokuapp.com/calculate', this.props.data)
      .then(res => this.props.handleUruguayResults(res))
      .catch(err => err);
  }

  render() {
    return '';
  }
}

export default UruguayQuery;
