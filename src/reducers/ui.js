import {
  SET_FIELD_VALUE,
  SET_EXAMPLE_VISIBILITY
} from '../actions';

const initialState = {
  field1: 0,
  field2: 'Guest',
  field3: 12,
  field4: Date.now(),
  field5: Date.now(),
  field6: Date.now() - 3000,
};


function uiReducer(state = initialState, action){
    switch(action.type){
        case SET_FIELD_VALUE:
          return Object.assign({}, state, { [action.field]: action.value });
        default:
            return state;
    }
}

export default uiReducer;