document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner toutes les balises <img>
  const allImages = document.querySelectorAll("img");
  allImages.forEach((image) => {
    console.log(image.src); // Affiche l'URL de chaque image dans la console
  });

  // Logique de lazy loading
  const lazyImages = document.querySelectorAll("img.lazy");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
});
