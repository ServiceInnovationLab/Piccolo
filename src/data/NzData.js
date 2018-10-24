function NzData(data) {
  return {
    'persons': {
      'Tahi': {
        'is_citizen_or_resident': {
          '2018-01': true
        },
        'age': {
          '2018-01': data.age
        },
        'is_resident': {
          '2018-01': true
        },
        'total_number_of_years_lived_in_nz_since_age_20': {
          '2018-01': data.years_lived_in_country
        },
        'total_number_of_years_lived_in_nz_since_age_50': {
          '2018-01': data.years_lived_in_country
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
}

export default NzData;
