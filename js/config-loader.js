/**
 * Configuration Loader
 * Safely loads configuration from config/site-config.js
 * Provides utility functions for accessing config values
 */

class ConfigLoader {
  constructor() {
    this.config = null;
    this.initialized = false;
  }

  /**
   * Initialize and validate configuration
   */
  async initialize() {
    if (this.initialized) return this.config;

    try {
      // Configuration is loaded via script tag in HTML
      if (typeof SITE_CONFIG !== "undefined") {
        this.config = SITE_CONFIG;
        this.initialized = true;
        console.log("✓ Configuration loaded successfully");
        return this.config;
      } else {
        throw new Error("SITE_CONFIG not found");
      }
    } catch (error) {
      console.error("✗ Failed to load configuration:", error);
      this.config = this._getDefaultConfig();
      this.initialized = true;
      return this.config;
    }
  }

  /**
   * Get a configuration value by path
   * @param {string} path - Dot-notation path (e.g., 'student.name')
   * @param {*} defaultValue - Default value if path doesn't exist
   */
  get(path, defaultValue = null) {
    if (!this.initialized) {
      console.warn("ConfigLoader not initialized. Call initialize() first.");
      return defaultValue;
    }

    const keys = path.split(".");
    let value = this.config;

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return defaultValue;
      }
    }

    return value !== undefined ? value : defaultValue;
  }

  /**
   * Get student name
   */
  getStudentName() {
    return this.get("student.name", "Graduate");
  }

  /**
   * Get graduation date as Date object
   */
  getGraduationDate() {
    const dateStr = this.get("graduation.date");
    if (!dateStr) return null;
    return new Date(dateStr + "T00:00:00");
  }

  /**
   * Get graduation time
   */
  getGraduationTime() {
    return this.get("graduation.time", "09:00");
  }

  /**
   * Get invitation message
   */
  getInvitationText() {
    return this.get("messages.invitationText", "");
  }

  /**
   * Get music path
   */
  getMusicPath() {
    return this.get("music.musicPath", "assets/music/graduation-piano.mp3");
  }

  /**
   * Check if music is enabled
   */
  isMusicEnabled() {
    return this.get("music.enabled", true);
  }

  /**
   * Get personal photo path with fallback
   */
  getPhotoPath() {
    return this.get("images.personalPhoto", "private-assets/graduation-photo.png");
  }

  /**
   * Get fallback avatar path
   */
  getFallbackPath() {
    return this.get("images.fallbackAvatar", "assets/default-avatar.png");
  }

  /**
   * Check if feature is enabled
   */
  isFeatureEnabled(feature) {
    return this.get(`performance.${feature}`, true);
  }

  /**
   * Get theme color
   */
  getThemeColor(colorName) {
    return this.get(`theme.${colorName}`, "#10b981");
  }

  /**
   * Default fallback configuration
   */
  _getDefaultConfig() {
    return {
      student: {
        name: "Graduate",
        studentId: "20261234",
      },
      graduation: {
        date: "2026-06-15",
        time: "09:00",
        address: "PTIT Campus, Hanoi, Vietnam",
        schoolName: "Vietnam Posts and Telecommunications Institute",
        schoolAbbr: "PTIT",
        program: "Bachelor of Information Technology",
      },
      messages: {
        mainTitle: "Class of 2026",
        subtitle: "Graduation Day Celebration",
        invitationText: "You are cordially invited to celebrate graduation",
        quote: "From student to professional. The journey continues.",
        thankYou: "Thank you for being part of this journey.",
      },
      map: {
        buttonText: "📍 Check Map",
        url: "https://ptit-map.vercel.app/index.html",
      },
      music: {
        enabled: true,
        musicPath: "assets/music/graduation-piano.mp3",
        buttonAriaLabel: "Toggle background music",
      },
      images: {
        personalPhoto: "private-assets/graduation-photo.png",
        fallbackAvatar: "assets/default-avatar.png",
      },
      performance: {
        lazyLoadImages: true,
        animationsEnabled: true,
        particlesEnabled: true,
      },
    };
  }
}

// Create global instance
const configLoader = new ConfigLoader();
