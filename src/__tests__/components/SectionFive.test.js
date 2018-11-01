import React from 'react';
import renderer from 'react-test-renderer';
import { SectionFive } from '../../page/Sections';
import 'jest-styled-components';

test('SectionFive renders correctly', () => {

  const israel = {
    'data': {
      'households': {
        'one': {
          'parents': [
            'Tahi'
          ]
        }
      },
      'persons': {
        'Tahi': {
          'born_in_israel': {
            '2018-01': true
          },
          'eligible_for_pension': {
            '2018-01': true
          },
          'gender': {
            '2018-01': 'woman'
          },
          'is_resident': {
            '2018-01': true
          },
          'pension_contributing_years': {
            '2018-01': 66
          },
          'pension_eligibility_age': {
            '2018-01': 62
          }
        }
      }
    },
    'status': 200
  };
  const new_zealand  = {
    'data': {
      'families': {
        'family': {
          'others': [
            'Tahi'
          ]
        }
      },
      'persons': {
        'Tahi': {
          'is_permanent_resident': {
            '2018-08': true
          },
          'super___eligibility_age': {
            '2018-08': 65
          },
          'total_number_of_years_lived_in_nz_since_age_20': {
            '2018-08': 66
          },
          'total_number_of_years_lived_in_nz_since_age_50': {
            '2018-08': 66
          }
        }
      },
      'titled_properties': {
        'house': {
          'others': [
            'Tahi'
          ]
        }
      }
    },
    'status': 200
  };
  const uruguay = {
    'data': {
      'households': {
        'one': {
          'parents': [
            'Tahi'
          ]
        }
      },
      'persons': {
        'Tahi': {
          'edad_de_jubilacion': {
            '2018-01': -6
          },
          'gender': {
            '2018-01': 'woman'
          },
          'number_of_children': {
            '2018-01': 66
          },
          'number_of_years_worked': {
            '2018-01': 66
          }
        }
      }
    },
    'status': 200
  };
  
  const tree = renderer.create(<SectionFive
    israel={israel}
    new_zealand={new_zealand}
    uruguay={uruguay}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
