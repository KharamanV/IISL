import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
// import configureStore from './services/configureStore';

// const store = configureStore({});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}

render(App);
