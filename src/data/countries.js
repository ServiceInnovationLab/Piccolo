const countries = [
  {
    name: 'New Zealand',
    label: 'new_zealand',
    api_url: 'https://api.rules.nz/calculate',
    eligible_key: 'super___eligibility_age',
    subtitle: 'Government pension is called  New Zealand Superannuation, known as NZ Super for short.',
    eligibility_list: [
      'Gender does not determine eligibility in New Zealand.',
      'You don\'t have to be retired from work to get NZ Super as it is not income tested.',
      'Overseas benefits or pensions will generally be deducted from NZ Super.',
      'To get NZ Super you must have lived in NZ for at least 10 years since you turned 20. Five of those years must be since you turned 50.'
    ]
  },
  {
    name: 'Israel',
    label: 'israel',
    api_url: 'https://openfisca-israel.herokuapp.com/calculate',
    eligible_key: 'pension_eligibility_age',
    subtitle: 'Government pensions are known as old age pensions, sometimes referred to as insurance.',
    eligibility_list: [
      'Eligibility is determined by gender, payments to old age insurance, income test and the type of employment you have been in.',
      'You must have been living in Israel for at least 5 years before you retire.',
      'There are two stages of pensions; one at age 62 for women and 67 for men, and a second age pension at 70 which has less eligibility requirements than the first age pension.'
    ]
  },
  {
    name: 'Uruguay',
    label: 'uruguay',
    api_url: 'https://openfisca-uruguay.herokuapp.com/calculate',
    eligible_key: 'edad_de_jubilacion',
    subtitle: 'Government pensions for work retirement are called Jubilaciones.',
    eligibility_list: [
      'Eligibility is determined by age and contributions to social security related to labor.',
      'You must have completed 30 years of work.',
      'There are two stages of pensions; one at age 62 for women and 67 for men, and a second age pension at 70 which has less eligibility requirements than the first age pension.',
      'For women each child (up to max of 5) counts as a \'year of work\'.'
    ]
  }
];

export default countries;
