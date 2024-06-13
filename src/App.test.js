import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import App from './App';

const mockStore = configureStore([thunk]);

const initialState = {
  quote:
    'The only limit to our realization of tomorrow is our doubts of today.',
  author: 'Franklin D. Roosevelt',
};

let store;

beforeEach(() => {
  store = mockStore({ quote: initialState });
});

test('User Story #1: I can see a wrapper element with a corresponding id="quote-box"', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const quoteBox = screen.getByTestId('quote-box');
  expect(quoteBox).toBeInTheDocument();
});
