import { LitElement } from 'https://unpkg.com/lit-element?module';

class OpenBrewery extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connected Lit Element to the DOM');
  }

};

customElements.define('open-brewery', OpenBrewery);
