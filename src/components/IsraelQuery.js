import React from 'react';
import axios from 'axios';

class IsraelQuery extends React.Component {

  componentDidMount(){
    const data = {
      'persons': {
        'Tahi': {
          'gender': {
            '2018-01': 'woman'
          },
          'pension_contributing_years': {
            '2018-01': 22
          },
          'is_resident': {
            '2018-01': true
          },
          'born_in_israel': {
            '2018-01': true
          },
          'pension_eligibility_age': {
            '2018-01': null
          },
          'eligible_for_pension': {
            '2018-01': null
          }
        }
      },
      'households': {
        'one': {
          'parents': ['Tahi']
        }
      }
    };

    axios
      .post('https://openfisca-israel.herokuapp.com/calculate', data)
      .then(res => res)
      .catch(err => err);
  }

  render() {
    return '';
  }
}

export default IsraelQuery;
