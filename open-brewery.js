import { html, LitElement } from 'https://unpkg.com/lit-element?module';
import './brewery-detail.js';

const api = 'https://api.openbrewerydb.org/breweries';

class OpenBrewery extends LitElement {
  static get properties() {
    return {
      breweries: { type: Array },
      loading: { type: Boolean }
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

    if (this.loading) {
      return html`
        <p>Please wait while the data is fetched...</p>
      `;
    }

    return html`
      <h1>My brewery app</h1>
      <h3>Visited ${totalVisited} and ${totalNotVisited} Not Visited</h3>
      <button>View All</button> <button>View Visited</button> <button>View Not Visisted</button>
      <ul>
      ${this.breweries.map(brewery => html`
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

};

customElements.define('open-brewery', OpenBrewery);
