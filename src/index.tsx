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

const root = ReactDOM.createRoot(document.getElementById('result-block') as HTMLElement);
if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
