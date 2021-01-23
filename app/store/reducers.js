/*
 * combines all th existing reducers
 */
import * as loginReducer from 'app/features/auth/redux/reducers';
export default Object.assign({}, loginReducer);
