/**
 * Animation Controls
 * Manages various animation sequences and effects
 */

class AnimationController {
  constructor() {
    this.envelopeOpened = false;
  }

  /**
   * Initialize all animations
   */
  initialize() {
    if (!configLoader.isFeatureEnabled("animationsEnabled")) {
      // Skip animations, show content immediately
      this.skipToContent();
      return;
    }

    // Delay envelope animation slightly for smooth page load
    setTimeout(() => this.startEnvelopeAnimation(), 300);
  }

  /**
   * Envelope opening animation
   */
  startEnvelopeAnimation() {
    const envelope = document.querySelector(".envelope-container");
    if (!envelope) return;

    // Add animation class
    envelope.classList.add("opening");

    // Trigger card slide up
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

    // Fade in hero content
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

    // Animate text elements
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
    element.classList.add("count-flip");
    setTimeout(() => {
      element.textContent = newValue;
      element.classList.remove("count-flip");
    }, 300);
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
}

// Initialize animation controller
const animationController = new AnimationController();

document.addEventListener("DOMContentLoaded", () => {
  // Wait for config to load
  configLoader.initialize().then(() => {
    animationController.initialize();

    // Add hover glow to interactive elements
    document.querySelectorAll(".btn, .card").forEach((element) => {
      animationController.addHoverGlow(element);
    });
  });
});
