import { createReducer } from './utils/ReducersUtils';

import {GET_RATE, SUCCESS} from '../constants/actionTypes';

const initialState = {
  base:'',
  availableRates:['GBP','EUR', 'USD'],
  rates:[]
};
const setRates = (state, {response:{base, rates}}) => ({base, rates});

export default createReducer(initialState, {
  [GET_RATE + SUCCESS]: setRates
});
