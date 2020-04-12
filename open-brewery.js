import { html, LitElement } from 'https://unpkg.com/lit-element?module';

const api = 'https://api.openbrewerydb.org/breweries';

class OpenBrewery extends LitElement {
  static get properties() {
    return {
      breweries: { type: Array }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if(!this.breweries) {
      this.fetchBrewries();
    }
  }

  async fetchBrewries() {
    let response = await fetch(api);
    let data = await response.json();
    this.breweries = data;
  }

  render() {
    return html`
      <h1>My brewery app</h1>
      <pre>${JSON.stringify(this.breweries, null, 2)}</pre>
    `;
  }
};

customElements.define('open-brewery', OpenBrewery);
