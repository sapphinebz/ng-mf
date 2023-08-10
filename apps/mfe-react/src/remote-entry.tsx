export { default } from './app/app';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app/app';

class ReactElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    const root = ReactDOM.createRoot(mountPoint);
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

customElements.define('react-element', ReactElement);
