import { html, LitElement } from 'https://unpkg.com/lit-element?module';

class OpenBrewery extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connected Lit Element to the DOM');
  }

  render() {
    return html`
      <h1>My brewery app</h1>
    `;
  }
};

customElements.define('open-brewery', OpenBrewery);
