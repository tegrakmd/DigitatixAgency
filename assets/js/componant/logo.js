class LogoComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
            <div class="logo">
          
                <a href="${basePath}/index.html">
                  <img src="../../assets/images/logo2s.PNG" alt="">
                </a>

            </div>
        `;
  }
}

customElements.define("logo-component", LogoComponent);
{
  /* <a href="${basePath}/index.html">digitatix®</a> */
}
