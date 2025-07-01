// Mobile Navigation Toggle
document.querySelector(".mobile-toggle").addEventListener("click", function () {
  const nav = document.querySelector("nav ul");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Form Submission
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
//   e.preventDefault();

  // Form validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name && email && phone && message) {
    // In a real scenario, you would send this data to your server
    alert(
      "Thank you for your enquiry! Our team will contact you within 24 hours."
    );
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (window.innerWidth <= 992) {
        document.querySelector("nav ul").style.display = "none";
      }
    }
  });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate elements on scroll
gsap.utils
  .toArray(".service-card, .feature-card, .testimonial-card")
  .forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    });
  });

// Stats counter animation
const counters = document.querySelectorAll(".stat-number");

counters.forEach((counter) => {
  // Extract numeric part from text (e.g. "100 %" becomes 100)
  const target = parseFloat(counter.innerText.replace(/[^\d.]/g, ''));
  const isPercent = counter.innerText.includes("%");
  const isPlus = counter.innerText.includes("+");

  const count = { value: 0 };

  gsap.to(count, {
    value: target,
    duration: 2,
    scrollTrigger: {
      trigger: counter,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      counter.innerText =
        Math.ceil(count.value) +
        (isPercent ? " %" : "") +
        (isPlus ? "+" : "");
    },
  });
});

