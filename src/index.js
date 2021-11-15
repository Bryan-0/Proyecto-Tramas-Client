import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './components/AppRouter';
import { configureStore } from '@reduxjs/toolkit';
import tramaReducer from './features/tramaSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    trama: tramaReducer,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);