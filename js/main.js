/**
 * Main Application Logic
 * Handles countdown timer, music player, and interactive features
 */

class GraduationApp {
  constructor() {
    this.musicPlayer = null;
    this.isPlaying = false;
    this.countdownInterval = null;
  }

  /**
   * Initialize the application
   */
  async initialize() {
    console.log("🎓 Initializing Graduation App...");

    // Initialize config
    await configLoader.initialize();

    // Populate content from config
    this.populateContent();

    // Setup event listeners
    this.setupEventListeners();

    // Initialize countdown timer
    this.initCountdown();

    // Setup image with fallback
    this.setupImageFallback();

    // Setup music player if enabled
    if (configLoader.isMusicEnabled()) {
      this.setupMusicPlayer();
    }

    console.log("✓ Application initialized successfully");
  }

  /**
   * Populate HTML with content from config
   */
  populateContent() {
    // Student name
    const nameElement = document.getElementById("student-name");
    if (nameElement) {
      nameElement.textContent = configLoader.getStudentName();
    }

    // Main title
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
      titleElement.textContent = configLoader.get("messages.mainTitle");
    }

    // Subtitle
    const subtitleElement = document.getElementById("subtitle");
    if (subtitleElement) {
      subtitleElement.textContent = configLoader.get("messages.subtitle");
    }

    // Invitation text
    const invitationElement = document.getElementById("invitation-text");
    if (invitationElement) {
      invitationElement.textContent = configLoader.getInvitationText();
    }

    // School name
    const schoolElement = document.getElementById("school-name");
    if (schoolElement) {
      schoolElement.textContent = configLoader.get("graduation.schoolName");
    }

    // Address
    const addressElement = document.getElementById("graduation-address");
    if (addressElement) {
      addressElement.textContent = configLoader.get("graduation.address");
    }

    // Date and time
    const dateStr = configLoader.get("graduation.date");
    const timeStr = configLoader.get("graduation.time");
    const dateTimeElement = document.getElementById("graduation-datetime");
    if (dateTimeElement && dateStr && timeStr) {
      const date = new Date(dateStr);
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      dateTimeElement.textContent = `${formattedDate} at ${timeStr}`;
    }

    // Quote
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.textContent = configLoader.get("messages.quote");
    }

    // Thank you message
    const thankYouElement = document.getElementById("thank-you");
    if (thankYouElement) {
      thankYouElement.textContent = configLoader.get("messages.thankYou");
    }

    // Map button
    const mapButton = document.getElementById("map-button");
    if (mapButton) {
      mapButton.textContent = configLoader.get("map.buttonText");
      mapButton.href = configLoader.get("map.url");
    }

    // Music toggle button aria-label
    const musicButton = document.getElementById("music-toggle");
    if (musicButton) {
      musicButton.setAttribute(
        "aria-label",
        configLoader.get("music.buttonAriaLabel")
      );
    }
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Map button - open in new tab
    const mapButton = document.getElementById("map-button");
    if (mapButton) {
      mapButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(mapButton.href, "_blank", "noopener,noreferrer");
      });
    }

    // Music toggle button
    const musicButton = document.getElementById("music-toggle");
    if (musicButton) {
      musicButton.addEventListener("click", () => this.toggleMusic());
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Handle visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.pauseMusic();
      }
    });
  }

  /**
   * Initialize countdown timer
   */
  initCountdown() {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    const graduationDate = configLoader.getGraduationDate();
    if (!graduationDate) {
      countdownElement.innerHTML = "Date not configured";
      return;
    }

    // Update immediately
    this.updateCountdown(graduationDate, countdownElement);

    // Update every second
    this.countdownInterval = setInterval(() => {
      this.updateCountdown(graduationDate, countdownElement);
    }, 1000);
  }

  /**
   * Update countdown display
   */
  updateCountdown(graduationDate, countdownElement) {
    const now = new Date().getTime();
    const distance = graduationDate.getTime() - now;

    if (distance < 0) {
      countdownElement.innerHTML =
        '<div class="countdown-unit"><div class="countdown-value">🎓</div><div class="countdown-label">Congratulations!</div></div>';
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="countdown-unit">
        <div class="countdown-value">${String(days).padStart(2, "0")}</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-unit">
        <div class="countdown-value">${String(hours).padStart(2, "0")}</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-unit">
        <div class="countdown-value">${String(minutes).padStart(2, "0")}</div>
        <div class="countdown-label">Minutes</div>
      </div>
      <div class="countdown-unit">
        <div class="countdown-value">${String(seconds).padStart(2, "0")}</div>
        <div class="countdown-label">Seconds</div>
      </div>
    `;
  }

  /**
   * Setup image with fallback handling
   */
  setupImageFallback() {
    const photoElement = document.getElementById("graduation-photo");
    if (!photoElement) return;

    const primaryPath = configLoader.getPhotoPath();
    const fallbackPath = configLoader.getFallbackPath();

    photoElement.src = primaryPath;

    // Fallback to default avatar if image fails to load
    photoElement.addEventListener("error", () => {
      console.warn(`Image not found: ${primaryPath}, using fallback`);
      photoElement.src = fallbackPath;
    });

    // Lazy load if enabled
    if (configLoader.isFeatureEnabled("lazyLoadImages")) {
      photoElement.loading = "lazy";
    }
  }

  /**
   * Setup music player
   */
  setupMusicPlayer() {
    this.musicPlayer = document.getElementById("bg-music");
    if (!this.musicPlayer) {
      // Create music player if it doesn't exist
      this.musicPlayer = document.createElement("audio");
      this.musicPlayer.id = "bg-music";
      this.musicPlayer.loop = true;
      this.musicPlayer.volume = 0.3;
      document.body.appendChild(this.musicPlayer);
    }

    const musicPath = configLoader.getMusicPath();
    this.musicPlayer.src = musicPath;

    // Handle music loading errors
    this.musicPlayer.addEventListener("error", () => {
      console.warn(`Music file not found: ${musicPath}`);
    });
  }

  /**
   * Toggle background music
   */
  toggleMusic() {
    if (!this.musicPlayer) {
      console.warn("Music player not initialized");
      return;
    }

    const button = document.getElementById("music-toggle");

    try {
      if (this.isPlaying) {
        this.musicPlayer.pause();
        this.isPlaying = false;
        if (button) {
          button.classList.remove("playing");
          button.setAttribute("aria-pressed", "false");
        }
      } else {
        // Handle autoplay restrictions
        const playPromise = this.musicPlayer.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.isPlaying = true;
              if (button) {
                button.classList.add("playing");
                button.setAttribute("aria-pressed", "true");
              }
            })
            .catch(() => {
              console.warn("Autoplay prevented. User interaction required.");
            });
        }
      }
    } catch (error) {
      console.error("Error toggling music:", error);
    }
  }

  /**
   * Pause music
   */
  pauseMusic() {
    if (this.musicPlayer && this.isPlaying) {
      this.musicPlayer.pause();
      this.isPlaying = false;

      const button = document.getElementById("music-toggle");
      if (button) {
        button.classList.remove("playing");
        button.setAttribute("aria-pressed", "false");
      }
    }
  }

  /**
   * Cleanup
   */
  destroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    if (this.musicPlayer) {
      this.musicPlayer.pause();
      this.musicPlayer = null;
    }
  }
}

// Initialize app when DOM is ready
const app = new GraduationApp();

document.addEventListener("DOMContentLoaded", () => {
  app.initialize();
});

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  app.destroy();
});
