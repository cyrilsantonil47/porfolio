// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a:not(.contact-btn)");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking on nav items (mobile)
navItems.forEach(item => {
  item.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Add active class to current section in viewport
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// Typing Animation for Hero Section
document.addEventListener("DOMContentLoaded", function () {
  const typedTextSpan = document.querySelector(".hero-typed");
  const textArray = [
    "Web Developer",
    "GoHighLevel Specialist",
    "Customer Service Representative",
    "Telephone Sales Representative"
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1500;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  // Start animation after 1 second
  if (typedTextSpan) {
    setTimeout(type, 1000);
  }
});

// Skills Section
// Animate skills on scroll
  const skillCards = document.querySelectorAll(".skill-card");

  const animateSkills = () => {
    skillCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  // Initial check
  animateSkills();

  // Check on scroll
  window.addEventListener("scroll", animateSkills);


// Timeline Section
// Animate timeline on scroll
  const timelineItems = document.querySelectorAll(".timeline-item");

  const animateTimeline = () => {
    timelineItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 100) {
        setTimeout(() => {
          item.classList.add("visible");
        }, index * 200);
      }
    });
  };

  // Initial check
  animateTimeline();

  // Check on scroll
  window.addEventListener("scroll", animateTimeline);


/*connect us form section*/

document.addEventListener("DOMContentLoaded", function () {
  // Animate contact section on scroll
  const contactSection = document.querySelector(".contact");
  const contactItems = document.querySelectorAll(
    ".contact-item, .form-group"
  );

  const animateContact = () => {
    const sectionTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      contactSection.style.opacity = "1";
      contactSection.style.transform = "translateY(0)";

      contactItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 100);
      });
    }
  };

  // Initial styles for animation
  contactSection.style.opacity = "0";
  contactSection.style.transform = "translateY(30px)";
  contactSection.style.transition = "all 0.6s ease";

  contactItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.5s ease";
  });

  // Initial check
  animateContact();

  // Check on scroll
  window.addEventListener("scroll", animateContact);

  // Form submission handling (example)
  const contactForm = document.querySelector(".form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your form submission logic here
      alert("Message sent successfully!");
      this.reset();
    });
  }
});

//footer secrion
document.addEventListener("DOMContentLoaded", function () {
  // Update copyright year automatically
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Animate footer elements on scroll
  const footer = document.querySelector(".footer");
  const footerItems = document.querySelectorAll(
    ".footer-column, .footer-social, .footer-brand"
  );

  const animateFooter = () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight - 100) {
      footer.style.opacity = "1";
      footer.style.transform = "translateY(0)";

      footerItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 100);
      });
    }
  };

  // Initial styles for animation
  footer.style.opacity = "0";
  footer.style.transform = "translateY(20px)";
  footer.style.transition = "all 0.6s ease";

  footerItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.5s ease";
  });

  // Initial check
  animateFooter();

  // Check on scroll
  window.addEventListener("scroll", animateFooter);
});

//scroll to top
// Back to Top Button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  // Show button after scrolling 500px
  if (window.pageYOffset > 500) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// newsleatter section
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const email = this.querySelector("#newsletter-email").value;

      // Here you would typically send to your backend
      // For demo, we'll show success message
      const successHTML = `
                <div class="newsletter-success">
                    <i class="fas fa-check-circle"></i> Thanks for subscribing!
                </div>
            `;

      // Insert success message
      this.insertAdjacentHTML("afterend", successHTML);

      // Reset form
      this.reset();

      // Hide success after 5 seconds
      setTimeout(() => {
        document.querySelector(".newsletter-success").remove();
      }, 5000);
    });
  }

  // Animation on scroll
  const newsletterSection = document.querySelector(".newsletter");
  if (newsletterSection) {
    newsletterSection.style.opacity = "0";
    newsletterSection.style.transform = "translateY(30px)";
    newsletterSection.style.transition = "all 0.6s ease";

    const animateNewsletter = () => {
      const sectionTop = newsletterSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        newsletterSection.style.opacity = "1";
        newsletterSection.style.transform = "translateY(0)";
      }
    };

    // Initial check
    animateNewsletter();

    // Check on scroll
    window.addEventListener("scroll", animateNewsletter);
  }