import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './App';

import counterReducer from "./store/reducer";
import resultReducer from "./store/reducer";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
