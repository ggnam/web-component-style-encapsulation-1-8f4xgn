import { LitElement, html, css } from 'lit-element';

class parentElement extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <p>
        You can style me because I'm in the open (light DOM).
      </p>
    `;
  }
}

customElements.define('parent-element', parentElement);
