import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducers } from './reducer';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducers, enhancer);
