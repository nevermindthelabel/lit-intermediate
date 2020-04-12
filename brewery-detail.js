import { html, LitElement } from 'https://unpkg.com/lit-element?module';

class BreweryDetail extends LitElement {
  static get properties() {
    return {
      breweryName: { type: String },
      breweryType: { type: String },
      breweryCity: { type: String }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <li>${this.breweryName}</li>
      <li>${this.breweryCity}</li>
      <li>${this.breweryType}</li>
    `;
  }

};

customElements.define('brewery-detail', BreweryDetail);
