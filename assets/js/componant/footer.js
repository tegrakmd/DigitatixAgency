class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise "." par défaut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
        <footer class="footer">
          <h1>
            <a href="${basePath}/src/contact.html">AGENCY</a>
          </h1>
          <div class="footer_container">
            <div class="footer_container_item footer_container_item_right">
              <div class="footer_container_item_right_container">
                <!-- Liens -->
                <ul>
                  <li class="header_link_footer">Pages</li>
                  <li>
                    <a href="${basePath}" class="link_footer">
                      Home
                      <i class="ph ph-arrow-up-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/about.html" class="link_footer">
                      Studio
                    <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/service.html" class="link_footer">
                      Service
                     <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/work.html" class="link_footer">
                      Projet
                      <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/contact.html" class="link_footer">
                      Contact
                     <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                </ul>
                
                <!-- Contact -->
           
                
                <!-- Studio -->
                <ul>
                  <li class="header_link_footer">Studio</li>
                  <li>Technopark</li>
                  <li>Agadir 80000</li>
                  <li>RDC</li>
                </ul>
                <!-- Social -->
                <ul>
                  <li class="header_link_footer">Réseaux sociaux</li>
                  <li>
                    <a href="#" class="link_footer">
                      Behance
                    <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link_footer">
                      Instagram
                     <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link_footer">
                      LinkedIn
                      <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link_footer">
                      Telegram
                    <i class="ph ph-arrow-up-right"></i
                >
                    </a>
                  </li>
                </ul>
                
                <!-- Legal -->
                <ul>
                  <li class="header_link_footer">Legal</li>
                  <li>Imprint</li>
                  <li>Privacy Policy</li>
                  <li>Terms and conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      `;
  }
}

customElements.define("footer-component", FooterComponent);
