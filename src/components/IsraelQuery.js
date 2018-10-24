import React from 'react';
import axios from 'axios';
import Israel from '../data/israel';

class IsraelQuery extends React.Component {

  componentDidMount() {
    axios
      .post('https://openfisca-israel.herokuapp.com/calculate', Israel)
      .then(res => res)
      .catch(err => err);
  }

  render() {
    return '';
  }
}

export default IsraelQuery;
