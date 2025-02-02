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
                  <li class="header_link_footer">Links</li>
                  <li>
                    <a href="#" class="link_footer">
                      Home
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Exemple de SVG (remplacez le contenu par le vôtre) -->
                        <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/about.html" class="link_footer">
                      Studio
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/service.html" class="link_footer">
                      Services
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/work.html" class="link_footer">
                      Works
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${basePath}/src/contact.html" class="link_footer">
                      Contact
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                
                <!-- Contact -->
                <ul>
                  <li class="header_link_footer">Contact</li>
                  <li><a href="#" class="link_footer">www.digitatix.io</a></li>
                  <li><a href="#" class="link_footer">digitatix@gmail.io</a></li>
                </ul>
                
                <!-- Studio -->
                <ul>
                  <li class="header_link_footer">Studio</li>
                  <li>9 quao Androe</li>
                  <li>Rockfiead 69001</li>
                  <li>Ontario</li>
                  <li>RDC</li>
                </ul>
                
                <!-- Social -->
                <ul>
                  <li class="header_link_footer">Social</li>
                  <li>
                    <a href="#" class="link_footer">
                      Behance
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C..." fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link_footer">
                      Instagram
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C..." fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link_footer">
                      LinkedIn
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C..." fill="currentColor"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link_footer">
                      Telegram
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 4C..." fill="currentColor"></path>
                      </svg>
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
