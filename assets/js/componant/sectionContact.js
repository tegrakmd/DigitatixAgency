class SectionContact extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise une valeur par défaut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
      <section class="contact">
        <div class="contact_container">
          <div class="contact_wrapper">
            <h1>Love what you see</h1>
            <p>
              Let's Boost your business with a custom strategy that drivers
              results!
            </p>
          </div>
          <button class="button_primaire">
            <a href="${basePath}/src/contact.html">Get in touch</a>
          </button>
        </div>
      </section>
        `;
  }
}

customElements.define("contact-section", SectionContact);
