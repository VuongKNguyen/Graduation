/**
 * Central Configuration File
 * All editable content for the graduation invitation
 * Modify values here to customize your invitation
 */

const SITE_CONFIG = {
    // Student Information
    student: {
        name: "Nguyễn Khắc Vương",
        studentId: "B21DCAT226",
    },

    // Graduation Details
    graduation: {
        date: "2026-05-23", // ISO format: YYYY-MM-DD
        time: "16:30", // 24-hour format: HH:MM
        address: "Km10, Nguyen Trai Street, Ha Dong District, Hanoi.",
        schoolName: "Posts and Telecommunications Institute of Technology",
        schoolAbbr: "PTIT",
        program: "Information Security Engineer",
    },

    // Invitation Messages
    messages: {
        mainTitle: "Graduation Invitation",
        subtitle: "PTIT • Information Security • 2026",
        invitationText:
            "Join me in celebrating a meaningful milestone after years of learning, growing, and unforgettable memories at PTIT.",
        quote:
            "Every ending marks the beginning of a new journey.",
        thankYou:
            "Thank you for being part of my university journey 💚",
    },

    // Map Configuration
    map: {
        buttonText: "📍 Check Map",
        url: "https://ptit-map.vercel.app/index.html",
    },

    // Music Configuration
    music: {
        enabled: true,
        musicPath: "./assets/music/graduation-piano.mp3",
        buttonAriaLabel: "Toggle background music",
    },

    // Images
    images: {
        // Local path for personal graduation photo (must be added to .gitignore)
        personalPhoto: "private-assets/graduation-photo.png",
        // Fallback image if personal photo is not available
        fallbackAvatar: "assets/default-avatar.png",
    },

    // Social/Sharing (optional for future use)
    sharing: {
        title: "My Graduation Celebration",
        description: "Join me for my graduation day",
    },

    // Theme Configuration
    theme: {
        primaryColor: "#10b981", // Green pastel
        accentColor: "#34d399", // Light green
        textColor: "#1f2937", // Dark gray
        backgroundColor: "#f9fafb", // Off-white
    },

    // Performance
    performance: {
        lazyLoadImages: true,
        preloadMusic: false,
        particlesEnabled: true,
        animationsEnabled: true,
    },

    // Analytics (optional - can be integrated later)
    analytics: {
        enabled: false,
        trackingId: "", // Add Google Analytics ID if needed
    },
};

// Export for use in modules
if (typeof module !== "undefined" && module.exports) {
    module.exports = SITE_CONFIG;
}
