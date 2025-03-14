class SectionContact extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise une valeur par défaut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
      <section class="contact">
        <div class="contact_container">
          <div class="contact_wrapper">
            <h1>Adore ce que tu vois</h1>
            <p>
              Boostons votre activité grâce à une stratégie personnalisée qui génère des résultats !
            </p>
          </div>
          <button class="button_primaire">
            <a href="${basePath}/src/contact.html">Entrer en contact</a>
          </button>
        </div>
      </section>
        `;
  }
}

customElements.define("contact-section", SectionContact);
