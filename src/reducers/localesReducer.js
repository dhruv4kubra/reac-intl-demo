import { SET_LOCALE } from '../actions/';

const messages = require('../translations/en-US.json');

const initialState = {
  lang: 'en-US',
  messages,
};

function localesReducer(state = initialState, action) {
  switch (action.type) {
    // open/close the menu
    case SET_LOCALE: {
      // on success, update swift config in state
      return Object.assign({}, state, {
        lang: action.locale,
        key: action.locale,
        messages: action.messages
      });
    }
    default:
      return state;
  }
}

export default localesReducer;
