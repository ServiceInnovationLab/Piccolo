function UruguayData(data) {
  return {
    'persons': {
      'Tahi': {
        'gender': {
          '2018-01': data.gender
        },
        'pension_contributing_years': {
          '2018-01': data.years_worked
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
    'households': {'one': {'parents': ['Tahi']}}
  };
}

export default UruguayData;
