import { combineReducers } from 'redux';

import advert from './advert';
import auth from './auth';

export default combineReducers({
    advert,
    auth
})