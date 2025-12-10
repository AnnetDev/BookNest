const images = import.meta.glob('../images/hero-images/*.webp', {
    eager: true,
});

const heroImages = Object.values(images).map((img) => img.default);

if (!heroImages || heroImages.length === 0) {
    console.warn("No hero images found in /images/hero-images/");
}

const rotatingImg = document.getElementById('bf-rotating-image');

if (rotatingImg) {
    let currentIndex = 0;

    function switchImage() {
        if (heroImages.length <= 1) return; 

        currentIndex = (currentIndex + 1) % heroImages.length;

        rotatingImg.style.opacity = 0;

        setTimeout(() => {
            rotatingImg.src = heroImages[currentIndex];
            rotatingImg.style.opacity = 1; // fade-in
        }, 400);
    }

    setInterval(switchImage, Math.floor(Math.random() * (5000 - 3000)) + 3000);
} else {
    console.warn("Element #bf-rotating-image not found in DOM");
}
