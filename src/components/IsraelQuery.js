import React from 'react';
import axios from 'axios';

class IsraelQuery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    axios
      .post('https://openfisca-israel.herokuapp.com/calculate', this.props.data)
      .then(res => res)
      .catch(err => err);
  }

  render() {
    return '';
  }
}

export default IsraelQuery;
