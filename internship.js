// Initialize GSAP animations
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Header animation
  gsap.from(".header-content", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  // Internship cards animation
  gsap.utils.toArray(".internship-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onComplete: () => card.classList.add("visible"),
      }
    );
  });

  // Form animation
  gsap.fromTo(
    ".form-container",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".application-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onComplete: () =>
        document.querySelector(".form-container").classList.add("visible"),
    }
  );

  // Filter buttons functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const internshipCards = document.querySelectorAll(".internship-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      const filter = btn.textContent.trim();

      // Show all cards if "All" is selected
      if (filter === "All") {
        internshipCards.forEach((card) => {
          card.style.display = "block";
        });
        return;
      }

      // Filter cards based on category
      internshipCards.forEach((card) => {
        const title = card.querySelector("h3").textContent;
        const isFrontend =
          title.includes("Frontend") || title.includes("Bootstrap");
        const isBackend =
          title.includes("Backend") ||
          title.includes("Java") ||
          title.includes("Python");
        const isFullStack = title.includes("MERN");
        const isDatabase = title.includes("Database");
        const isTools = title.includes("GitHub") || title.includes("Postman");

        let showCard = false;

        switch (filter) {
          case "Frontend":
            showCard = isFrontend;
            break;
          case "Backend":
            showCard = isBackend;
            break;
          case "Full Stack":
            showCard = isFullStack;
            break;
          case "Database":
            showCard = isDatabase;
            break;
          case "Tools":
            showCard = isTools;
            break;
        }

        card.style.display = showCard ? "block" : "none";
      });
    });
  });



});
