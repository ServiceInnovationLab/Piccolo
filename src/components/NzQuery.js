import React from 'react';
import axios from 'axios';

class NzQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios
      .post('https://api.rules.nz/calculate', this.props.data)
      .then(res => this.props.handleData(res, 'new_zealand'))
      .catch(err => err);
  }

  render() {
    return '';
  }
}

export default NzQuery;
