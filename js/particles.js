/**
 * Particle Effects
 * Creates floating particles and animated elements
 * Optimized for performance
 */

class ParticleSystem {
  constructor(containerId = "particles-container") {
    this.container = document.getElementById(containerId);
    this.particles = [];
    this.animationFrameId = null;
    this.isEnabled = true;
    this.maxParticles = window.innerWidth < 768 ? 15 : 30;
  }

  /**
   * Initialize particles
   */
  initialize() {
    if (!this.container || !configLoader.isFeatureEnabled("particlesEnabled")) {
      return;
    }

    // Create initial particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.createParticle();
    }

    // Handle window resize
    window.addEventListener("resize", () => this.handleResize());

    // Start animation loop
    this.animate();
  }

  /**
   * Create a new particle
   */
  createParticle() {
    if (this.particles.length >= this.maxParticles) return;

    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Random size (smaller particles)
    const size = Math.random() * 3 + 1;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random duration
    const duration = Math.random() * 20 + 15;

    particle.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      opacity: ${opacity};
      animation: float ${duration}s infinite linear;
      animation-delay: ${Math.random() * 5}s;
    `;

    this.container.appendChild(particle);

    const particleObj = {
      element: particle,
      x,
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size,
      opacity,
    };

    this.particles.push(particleObj);
  }

  /**
   * Update particle positions
   */
  updateParticles() {
    this.particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around screen
      if (particle.x < 0) particle.x = window.innerWidth;
      if (particle.x > window.innerWidth) particle.x = 0;
      if (particle.y < 0) particle.y = window.innerHeight;
      if (particle.y > window.innerHeight) particle.y = 0;

      // Update element
      particle.element.style.left = particle.x + "px";
      particle.element.style.top = particle.y + "px";
    });
  }

  /**
   * Animation loop
   */
  animate() {
    if (!this.isEnabled) {
      this.animationFrameId = requestAnimationFrame(() => this.animate());
      return;
    }

    this.updateParticles();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  /**
   * Handle window resize
   */
  handleResize() {
    const newMaxParticles = window.innerWidth < 768 ? 15 : 30;

    // Add particles if needed
    while (this.particles.length < newMaxParticles) {
      this.createParticle();
    }

    // Remove particles if too many
    while (this.particles.length > newMaxParticles) {
      const particle = this.particles.pop();
      particle.element.remove();
    }

    this.maxParticles = newMaxParticles;
  }

  /**
   * Toggle particles
   */
  toggle() {
    this.isEnabled = !this.isEnabled;
  }

  /**
   * Stop animation
   */
  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.isEnabled = false;
  }

  /**
   * Resume animation
   */
  resume() {
    this.isEnabled = true;
  }
}

/**
 * Floating Leaves Animation
 * Creates animated floating leaves in a specific section
 */
class FloatingLeaves {
  constructor(containerId = "countdown-section") {
    this.container = document.getElementById(containerId);
    this.leaves = [];
  }

  /**
   * Initialize floating leaves
   */
  initialize() {
    if (!this.container) return;

    const leafCount = window.innerWidth < 768 ? 8 : 15;

    for (let i = 0; i < leafCount; i++) {
      this.createLeaf();
    }
  }

  /**
   * Create a floating leaf
   */
  createLeaf() {
    const leaf = document.createElement("div");
    leaf.className = "floating-leaf";

    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 8;
    const x = Math.random() * 100;

    leaf.style.cssText = `
      left: ${x}%;
      animation: floatLeaves ${duration}s infinite ease-in-out;
      animation-delay: ${delay}s;
    `;

    this.container.appendChild(leaf);
    this.leaves.push(leaf);
  }

  /**
   * Stop animation
   */
  stop() {
    this.leaves.forEach((leaf) => {
      leaf.style.animationPlayState = "paused";
    });
  }

  /**
   * Resume animation
   */
  resume() {
    this.leaves.forEach((leaf) => {
      leaf.style.animationPlayState = "running";
    });
  }
}

/**
 * Scroll Reveal Animation
 * Reveals elements as user scrolls
 */
class ScrollReveal {
  constructor() {
    this.elements = [];
    this.observer = null;
  }

  /**
   * Initialize scroll reveal
   */
  initialize() {
    this.elements = document.querySelectorAll("[data-reveal]");

    // Create intersection observer
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    this.elements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  /**
   * Stop observing
   */
  stop() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize particle system globally
let particleSystem = null;
let floatingLeaves = null;
let scrollReveal = null;

document.addEventListener("DOMContentLoaded", () => {
  if (configLoader.isFeatureEnabled("particlesEnabled")) {
    particleSystem = new ParticleSystem();
    particleSystem.initialize();
  }

  floatingLeaves = new FloatingLeaves("countdown-section");
  floatingLeaves.initialize();

  scrollReveal = new ScrollReveal();
  scrollReveal.initialize();
});
