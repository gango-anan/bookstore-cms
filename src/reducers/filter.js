const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_FILTER') {
    return action.payload;
  }

  return state;
};

export default filterReducer;
