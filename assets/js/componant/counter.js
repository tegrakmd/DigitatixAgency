class CounterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
              <div class="counter">
                    <p>0</p>
              </div>
          `;
  }
}

customElements.define("counter-component", CounterComponent);
