document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
      });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide mobile menu when a link is clicked
        if (navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
        }
        
        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Smooth scroll to the target section
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Update active link
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      // Get all sections
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all links
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          
          // Add active class to current section link
          const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    });
    
    // Play button interaction for hypnogram cards
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
      button.addEventListener('click', function() {
        // This would typically trigger a modal with the full hypnogram video/animation
        alert('Hypnogram animation would play here in a full implementation');
      });
    });
    
    // Add placeholder images for demonstration
    const placeholderImages = document.querySelectorAll('.placeholder-img');
    
    placeholderImages.forEach(img => {
      if (!img.src || img.src.endsWith('placeholder-img')) {
        const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        img.style.backgroundColor = randomColor;
        img.style.height = '100%';
        
        // Create a canvas element for the placeholder
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 180;
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = randomColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Image Placeholder', canvas.width / 2, canvas.height / 2);
        
        img.src = canvas.toDataURL();
      }
    });
    
    // Animation for cards on scroll
    const cards = document.querySelectorAll('.card');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
      });
      
      // Add CSS for visible cards
      const style = document.createElement('style');
      style.innerHTML = `
        .card-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `;
      document.head.appendChild(style);
    }
  });