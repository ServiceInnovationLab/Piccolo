const formFields = [
  {
    label: 'What is your age?',
    name: 'age',
    type: 'number'
  },
  {
    label: 'Years worked',
    name: 'years_worked',
    type: 'number'
  },
  {
    label: 'Years lived in the country',
    name: 'years_lived_in_country',
    type: 'number'
  },
  {
    label: 'Number of children',
    name: 'number_of_children',
    type: 'number'
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'radio',
    values: ['female', 'male']
  },
  {
    label: 'Do you have a partner',
    name: 'has_partner',
    type: 'radio',
    values: ['yes', 'no']
  }
];

export default formFields;
