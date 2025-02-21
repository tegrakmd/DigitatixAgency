// // ... existing code ...

// // Fonction pour précharger les images
// function preloadImages() {
//   // Liste de tous les chemins d'images à précharger
//   const imagePaths = [
//     "./assets/images/bg/hero bg.avif",
//     "./assets/images/Branding/bic_da-s_cover1_zpc1_revision=1500000000036_4_0.webp",
//     "./assets/images/web/tnonf_da-s_thumnail_new_7g6a_revision=1500000000036_4_0.webp",
//     "./assets/images/app/methodor-insight_fi9t_revision=1500000000036_4_0.webp",
//     "./assets/images/web/hipicon-insight_0e5b_revision=1500000000036_4_0.webp",
//     "./assets/images/Branding/hipicon_cover_soon_uviz_revision=1500000000036_4_0.webp",
//     "./assets/images/web/4.avif",
//     "../assets/images/bg/hero bg.avif",
//     "../assets/images/Branding/bic_da-s_cover1_zpc1_revision=1500000000036_4_0.webp",
//     "../assets/images/web/tnonf_da-s_thumnail_new_7g6a_revision=1500000000036_4_0.webp",
//     "../assets/images/app/methodor-insight_fi9t_revision=1500000000036_4_0.webp",
//     "../assets/images/web/hipicon-insight_0e5b_revision=1500000000036_4_0.webp",
//     "../assets/images/Branding/hipicon_cover_soon_uviz_revision=1500000000036_4_0.webp",
//     "../assets/images/web/4.avif",
//     "../../assets/images/bg/hero bg.avif",
//     "../../assets/images/Branding/bic_da-s_cover1_zpc1_revision=1500000000036_4_0.webp",
//     "../../assets/images/web/tnonf_da-s_thumnail_new_7g6a_revision=1500000000036_4_0.webp",
//     "../../assets/images/app/methodor-insight_fi9t_revision=1500000000036_4_0.webp",
//     "../../assets/images/web/hipicon-insight_0e5b_revision=1500000000036_4_0.webp",
//     "../../assets/images/Branding/hipicon_cover_soon_uviz_revision=1500000000036_4_0.webp",
//     "../../assets/images/web/4.avif",
//   ];

//   // Précharger chaque image
//   imagePaths.forEach((path) => {
//     const img = new Image();
//     img.src = path;
//   });
// }

// // Exécuter le préchargement quand la page est chargée
// document.addEventListener("DOMContentLoaded", preloadImages);

// // ... existing code ...
window.addEventListener("load", function () {
  // Get all images and videos
  const media = document.querySelectorAll("img, video");
  const mediaUrls = Array.from(media).map((el) => el.src || el.currentSrc);

  // Preload each media file
  mediaUrls.forEach((url) => {
    if (url) {
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = url.endsWith(".mp4") ? "video" : "image";
      preloadLink.href = url;
      document.head.appendChild(preloadLink);
    }
  });
});
