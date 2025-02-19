document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({ paused: true });

  tl.to(".menu-overlay", {
    duration: 1.2,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power3.out",
  });

  tl.from(
    ".menu-link, .btn",
    {
      opacity: 0,
      y: 60,
      stagger: 0.05,
      duration: 0.75,
      ease: "power1.out",
    },
    "<"
  );

  tl.to(
    ".video-preview",
    {
      duration: 1,
      height: "190px",
      ease: "power2.out",
    },
    "<"
  );

  tl.to(
    ".menu-divider",
    {
      duration: 2,
      width: "100%",
      ease: "power4.out",
    },
    "<"
  );

  function openMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "all";
    tl.play();
  }
  function closeMenu() {
    document.querySelector(".menu-overlay").style.pointerEvents = "none";
    tl.reverse();
  }

  document.querySelector(".menu-btn-open").addEventListener("click", openMenu);
  document
    .querySelector(".menu-close-btn")
    .addEventListener("click", closeMenu);
  tl.reverse();
});

class MenuNav extends HTMLElement {
  constructor() {
    super();
    // Récupère le chemin de base depuis l'attribut ou utilise une valeur par défaut
    const basePath = this.getAttribute("base-path") || ".";

    this.innerHTML = `
        <div class="menu-nav menu-btn-open">
          <div class="menu-icon">
            <img src="${basePath}/assets/images/icons/plus.svg" alt="" />
          </div>
          <div class="menu-text">Menu</div>
        </div>
         
        <div class="menu-overlay">
          <div id="menu-nav">
            <div class="logo-overlay">
              <a href="#">digitatix®</a>
            </div>
            <div class="menu-close-btn">
              <i class="ph ph-x"></i>
            </div>
          </div>
          <div class="menu-cols">
            <div class="col">
              <div class="video">
                <div class="video-preview">
                  <img
                    src="${basePath}/assets/images/web/2024_10_31_19_55_IMG_8087.GIF"
                    class="image"
                    alt="User Image" />
                </div>
                <div class="video-details">
                  <p class="icon-rotate">
                    <i class="ph ph-asterisk"></i>
                  </p>
                  <p>digitatix®</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="menu-link">
                <a href="${basePath}/index.html">Home<i class="ph ph-arrow-up-right"></i></a>
              </div>
              <div class="menu-link">
                <a href="${basePath}/src/about.html">Studio <i class="ph ph-arrow-up-right"></i></a>
              </div>
                <div class="menu-link">
                <a href="${basePath}/src/service.html">Service<i class="ph ph-arrow-up-right"></i></a>
              </div>
                <div class="menu-link">
                <a href="${basePath}/src/work.html">Work<i class="ph ph-arrow-up-right"></i></a>
              </div>
              <div class="menu-link">
                <a href="${basePath}/src/contact.html">Contact<i class="ph ph-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
          <div class="menu-footer">
            <div class="menu-divider"></div>
            <div class="menu-footer-copy">
              <div class="slogan">
                <p>Terms and conditions</p>
              </div>
              <div class="socials">
                <a href="#">Behance</a>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Telegram</a>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("menu-nav", MenuNav);
