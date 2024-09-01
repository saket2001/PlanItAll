// next.config.js
const withPWA = require("next-pwa")({
  dest: "public", // Output folder for service worker and other files
  disable: process.env.NODE_ENV === "development", // Disable in development
  register: true, // Automatically register the service worker
  skipWaiting: true, // Skip the waiting lifecycle for new service workers
});

module.exports = withPWA({
  // Your existing Next.js config options here
});
