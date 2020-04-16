import { html, LitElement } from 'https://unpkg.com/lit-element?module';
import './brewery-detail.js';

const api = 'https://api.openbrewerydb.org/breweries';

class OpenBrewery extends LitElement {
  static get properties() {
    return {
      breweries: { type: Array },
      loading: { type: Boolean },
      filter: { type: String }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.breweries) {
      this.fetchBrewries();
    }
  }

  async fetchBrewries() {
    this.loading = true;
    let response = await fetch(api);
    let data = await response.json();
    this.breweries = data;
    this.loading = false;
  }



  render() {
    const totalVisited = this.breweries.filter(b => b.visited).length;
    const totalNotVisited = this.breweries.length - totalVisited;
    const breweries = this.breweries.filter(brewery => {
      if(!this.filter) {
        return true;
      }
      return this.filter === 'visited' ? brewery.visted : !brewery.visited
    });

    if (this.loading) {
      return html`
        <p>Please wait while the data is fetched...</p>
      `;
    }

    return html`
      <h1>My brewery app</h1>
      <h3>Visited ${totalVisited} and ${totalNotVisited} Not Visited</h3>
      <button @click="${this._filterNone}">View All</button> <button @click="${this._filterVisited}">View Visited</button> <button @click="${this._filterNotVisited}">View Not Vistied</button>
      <ul>
      ${breweries.map(brewery => html`
        <li>
          <brewery-detail
          .breweryName=${brewery.name}
          .breweryCity=${brewery.city}
          .breweryType=${brewery.brewery_type}
          .visited=${brewery.visited}
          @toggle-visited-status=${() => this._toggleVisitedStatus(brewery)}
          ></brewery-detail>
        </li>
      `)
      }
      </ul>
    `;
  }
  _toggleVisitedStatus(breweryToUpdate) {
    this.breweries = this.breweries.map(brewery => {
      return brewery === breweryToUpdate ? { ...brewery, visited: !brewery.visited } : brewery;
    });
  }
  _filterNone() {
    this.filter = null;
  }
  _filterVisited() {
    this.filter = 'visited';
    console.log(this.breweries)
  }
  _filterNotVisited() {
    this.filter = 'not visited';
  }
};

customElements.define('open-brewery', OpenBrewery);
