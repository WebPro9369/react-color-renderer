import actions from './actions';

const initState = {
    red: 0,
    green: 0,
    blue: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.SET_COLOR_RED:
      return { ...state, red: action.value };
    case actions.SET_COLOR_GREEN:
        return { ...state, green: action.value };
    case actions.SET_COLOR_BLUE:
      return { ...state, blue: action.value };
    default:
      return state;
  }
}
