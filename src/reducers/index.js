let defaultState = {};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'SHOW_FILTERS':
    return {...state};
  default:
    return {...state};
  }
};

export default mainReducer;
