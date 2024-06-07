var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

function showPage(page) {
    const pages = document.querySelectorAll('.job-page');
    pages.forEach(pageElement => {
        pageElement.style.display = 'none';
    });
    const currentPageJobs = document.querySelectorAll(`.page-${page}`);
    currentPageJobs.forEach(job => {
        job.style.display = 'table-row';
    });
}

// Show the first page by default
showPage(1);


document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('nav a.center-scroll');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = window.innerHeight / 2 - targetElement.clientHeight / 2;
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

