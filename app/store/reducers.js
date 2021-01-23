/*
 * combines all th existing reducers
 */
import * as userReducer from './modules/user/reducer';

export default Object.assign({}, userReducer);
