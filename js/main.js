// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to sections
  const fadeElements = document.querySelectorAll('.section-title, .project-card, .contact-item');
  
  // Intersection Observer for fade-in animations
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Apply the observer to each element
  fadeElements.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
  });
  
  // Create random particles
  function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      // Random size
      const size = 0.2 + Math.random() * 0.3;
      
      // Random animation delay
      const delay = Math.random() * 5;
      
      // Apply styles
      particle.style.top = `${top}%`;
      particle.style.left = `${left}%`;
      particle.style.width = `${size}rem`;
      particle.style.height = `${size}rem`;
      particle.style.animationDelay = `${delay}s`;
      
      // Add to container
      particlesContainer.appendChild(particle);
    }
  }
  
  // Initialize particles
  createParticles();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
