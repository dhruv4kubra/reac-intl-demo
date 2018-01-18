import { combineReducers } from 'redux';
import ui from './ui';
import locales from './localesReducer';

const rootReducer = combineReducers({
    ui,
    locales
});

export default rootReducer;