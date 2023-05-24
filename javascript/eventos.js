document.addEventListener("DOMContentLoaded", function(event) {
    var galleryItems = document.querySelectorAll(".gallery-item");
    var currentImageIndex = 0;
  
    setInterval(function() {
      galleryItems[currentImageIndex].classList.remove("hidden");
      galleryItems[currentImageIndex].classList.add("hidden");
      currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
      galleryItems[currentImageIndex].classList.remove("hidden");
    }, 3000);
  });
  