// Exécuter le préchargement dès que le DOM est prêt
document.addEventListener("DOMContentLoaded", function () {
  // Get all images and videos
  const media = document.querySelectorAll("img, video");

  // Précharger chaque média
  media.forEach((element) => {
    // Pour les images
    if (element.tagName === "IMG" && element.src) {
      const img = new Image();
      img.src = element.src;
    }
    // Pour les vidéos
    else if (element.tagName === "VIDEO" && element.src) {
      const video = document.createElement("video");
      video.src = element.src;
      video.preload = "auto";
    }
  });
});
