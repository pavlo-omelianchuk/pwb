import { createBrowserHistory } from 'history';
import React, { Component } from 'react';

import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './assets/themeMUI/global';
import { PricingCalculator } from './components/PricingCalculatorPage';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <PricingCalculator />
      </div>
    );
  }
}
const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('result-block') as HTMLElement);
if (root) {
  // 1. Set up the browser history with the updated location
  // (minus the # sign)
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }
  // 2. Render our app
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
