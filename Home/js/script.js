let currentSlide = 0;

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel img');
    const totalSlides = images.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}
