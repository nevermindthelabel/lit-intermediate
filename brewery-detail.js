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
      <h3>${this.breweryName}</h3>
      <p>City: ${this.breweryCity}</p>
      <p>Brewery Type: ${this.breweryType}</p>
    `;
  }

};

customElements.define('brewery-detail', BreweryDetail);
