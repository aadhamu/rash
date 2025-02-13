
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (elementPosition < screenPosition) {
        element.classList.add(element.dataset.animation);
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);