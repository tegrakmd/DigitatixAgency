class CustomCursor extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="cursor-dot" data-cursor-dot></div>
      <div class="cursor-cercle" data-cursor-cercle></div>
    `;
  }

  connectedCallback() {
    // Récupération des éléments du curseur
    this.dot = this.querySelector("[data-cursor-dot]");
    this.circle = this.querySelector("[data-cursor-cercle]");

    // Ajout des événements de suivi de la souris
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      this.dot.style.left = `${posX}px`;
      this.dot.style.top = `${posY}px`;

      // Ajout d'un léger délai pour le cercle (effet de traînée)
      setTimeout(() => {
        this.circle.style.left = `${posX}px`;
        this.circle.style.top = `${posY}px`;
      }, 100);
    });
  }
}

customElements.define("custom-cursor", CustomCursor);
