import { html, LitElement } from 'https://unpkg.com/lit-element?module';

class BreweryDetail extends LitElement {
  static get properties() {
    return {
      breweryName: { type: String },
      breweryType: { type: String },
      breweryCity: { type: String },
      visited: { type: Boolean }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h3>${this.breweryName} : ${this.visited ? 'Visited' : 'Not Visited'}</h3>
      <p>City: ${this.breweryCity}</p>
      <p>Brewery Type: ${this.breweryType}</p>
      <button @click=${this._toggleVisited}>Mark as ${this.visited ? 'Not Visited' : 'Visited'}</button>
    `;
  }

  _toggleVisitedStatus() {
    this.dispatchEvent(new CustomEvent('toggle-visited-status'));
  }
};

customElements.define('brewery-detail', BreweryDetail);
