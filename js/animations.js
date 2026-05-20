/**
 * Animation Controls - PREMIUM CINEMATIC
 * Manages various animation sequences and effects with scroll reveals
 */

class AnimationController {
  constructor() {
    this.envelopeOpened = false;
    this.observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };
  }

  /**
   * Initialize all animations
   */
  initialize() {
    if (!configLoader.isFeatureEnabled("animationsEnabled")) {
      this.skipToContent();
      return;
    }

    // Delay envelope animation slightly for smooth page load
    setTimeout(() => this.startEnvelopeAnimation(), 300);

    // Initialize scroll reveal animations
    this.initScrollReveal();
  }

  /**
   * Initialize Intersection Observer for scroll reveals
   */
  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("revealed")) {
          entry.target.classList.add("revealed");

          // Stagger animation for child elements
          const children = entry.target.querySelectorAll("[data-animate-text]");
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("text-reveal");
            }, index * 80);
          });
        }
      });
    }, this.observerOptions);

    // Observe all reveal elements
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });
  }

  /**
   * Envelope opening animation
   */
  startEnvelopeAnimation() {
    const envelope = document.querySelector(".envelope-container");
    if (!envelope) return;

    envelope.classList.add("opening");

    setTimeout(() => {
      this.slideUpInvitationCard();
    }, 800);
  }

  /**
   * Slide up invitation card
   */
  slideUpInvitationCard() {
    const card = document.querySelector(".invitation-card");
    if (!card) return;

    card.classList.add("slide-up");
    this.envelopeOpened = true;

    setTimeout(() => {
      this.fadeInHeroContent();
    }, 600);
  }

  /**
   * Fade in hero content
   */
  fadeInHeroContent() {
    const hero = document.querySelector(".hero-section");
    if (!hero) return;

    hero.classList.add("fade-in");

    const textElements = hero.querySelectorAll("[data-animate-text]");
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("text-reveal");
      }, index * 150);
    });
  }

  /**
   * Skip to content (if animations disabled)
   */
  skipToContent() {
    const envelope = document.querySelector(".envelope-container");
    if (envelope) {
      envelope.style.display = "none";
    }

    const card = document.querySelector(".invitation-card");
    if (card) {
      card.classList.add("slide-up");
    }

    const hero = document.querySelector(".hero-section");
    if (hero) {
      hero.classList.add("fade-in");
    }

    this.envelopeOpened = true;
  }

  /**
   * Add hover glow effect to element
   */
  addHoverGlow(element) {
    if (!element) return;

    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty("--mouse-x", x + "px");
      element.style.setProperty("--mouse-y", y + "px");
    });

    element.addEventListener("mouseleave", () => {
      element.style.setProperty("--mouse-x", "50%");
      element.style.setProperty("--mouse-y", "50%");
    });
  }

  /**
   * Animate countdown timer
   */
  animateCountdownChange(element, newValue) {
    if (!element) return;
    element.classList.add("count-flip");
    setTimeout(() => {
      element.textContent = newValue;
      element.classList.remove("count-flip");
    }, 150);
  }

  /**
   * Pulse animation on element
   */
  pulse(element, duration = 600) {
    if (!element) return;

    element.style.animation = "none";
    setTimeout(() => {
      element.style.animation = `pulse ${duration}ms ease-out`;
    }, 10);

    setTimeout(() => {
      element.style.animation = "none";
    }, duration);
  }

  /**
   * Bounce animation on element
   */
  bounce(element) {
    if (!element) return;

    element.classList.add("bounce");
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove("bounce");
      },
      { once: true }
    );
  }

  /**
   * Shake animation on element
   */
  shake(element) {
    if (!element) return;

    element.classList.add("shake");
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove("shake");
      },
      { once: true }
    );
  }

  /**
   * Scale animation on element
   */
  scale(element, targetScale = 1.05, duration = 300) {
    if (!element) return;

    const originalScale = element.style.transform || "scale(1)";
    element.style.transition = `transform ${duration}ms var(--ease-in-out-premium)`;
    element.style.transform = `scale(${targetScale})`;

    setTimeout(() => {
      element.style.transform = originalScale;
    }, duration);
  }
}

// Initialize animation controller
const animationController = new AnimationController();

document.addEventListener("DOMContentLoaded", () => {
  configLoader.initialize().then(() => {
    animationController.initialize();

    // Add hover glow to interactive elements
    document.querySelectorAll(".btn, .card").forEach((element) => {
      animationController.addHoverGlow(element);
    });
  });
});
