document.addEventListener('DOMContentLoaded', ()=> {
    
    const toggleBtn = document.querySelector('.toggleBtn');
    // const svg = document.getElementById('');
    const header = document.getElementsByTagName('header')[0];
    const nav = document.getElementsByTagName('nav')[0];
    const btns = document.querySelectorAll('.btn');
    const curvedSection = document.querySelector('.curved-section');
    const carousel = document.querySelector('.carousel');
    const projects = document.querySelector('.project-section');
    const svg = document.querySelector('.svg');
    // const svg = document.querySelector('.project-section');
    const slideImgs = document.querySelectorAll('.hero-image');
    const slideInterval = 4000;
    var currentSlide = 0;
    var autoSlide;
    var direction;

    const body = document.body;

    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark'); 
        header.classList.toggle('dark');
        nav.classList.toggle('dark');
        btns.forEach(btn=>btn.classList.toggle('dark'))
        curvedSection.classList.toggle('dark');
        svg.classList.toggle('dark');
        projects.classList.toggle('dark');
        this.textContent = this.textContent==='Dark Mode'? 'Light Mode' : 'Dark Mode'
    })

    function showSlide(index, direction) {

        curvedSection.setAttribute('data-direction', direction)

        slideImgs.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('exit')
            }else if (slide.classList.contains('active')) {
                slide.classList.remove('active')
                slide.classList.add('exit')
            }else{
                slide.classList.remove('active', 'exit')
            }
        })
    }

    function nextSlide(){
        currentSlide = (currentSlide + 1) % slideImgs.length;
        showSlide(currentSlide, 'next');
    }

    function prevSlide(){
        currentSlide = (currentSlide - 1 + slideImgs.length) % slideImgs.length;
        showSlide(currentSlide, 'prev');
    }

     // Initial display of the first slide
     showSlide(currentSlide, 'next');
      
     // Auto-slide every few seconds
     clearInterval(autoSlide)
     autoSlide = setInterval(nextSlide, slideInterval);
})

    