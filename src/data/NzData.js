function NzData(data) {
  return {
    'persons': {
      'Tahi': {
        'is_permanent_resident': {
          '2018-08': true
        },
        'veterans_support__is_entitled_to_be_paid_veterans_pension': {
          '2018-08': false
        },
        'total_number_of_years_lived_in_nz_since_age_20': {
          '2018-08': data.years_worked
        },
        'total_number_of_years_lived_in_nz_since_age_50': {
          '2018-08': data.years_worked
        },
        'super___eligibility_age': {
          '2018-08': null
        }
      }
    },
    'titled_properties': {
      'house': {
        'others': ['Tahi']
      }
    },
    'families': {
      'family': {
        'others': ['Tahi']
      }
    }
  };
}

export default NzData;
