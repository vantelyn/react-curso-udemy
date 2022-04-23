import * as actions from './actions';
import { types } from './types/types';
import { store, useDispatch, useSelector } from './store/store';

export * as actions from './actions';
export { types } from './types/types';
export { store, useDispatch, useSelector } from './store/store';

const Context = {
    actions,
    types,
    store,
    useDispatch,
    useSelector
};

export default Context;