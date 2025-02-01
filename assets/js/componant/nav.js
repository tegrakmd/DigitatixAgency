class MenuNav extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise une valeur par défaut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
        <a href="#" class="menu-nav">
          <div class="menu-icon">
            <img src="${basePath}/assets/images/icons/plus.svg" alt="" />
          </div>
          <div class="menu-text">Menu</div>
        </a>
      `;
  }
}

customElements.define("menu-nav", MenuNav);
