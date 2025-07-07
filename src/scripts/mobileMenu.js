// src/scripts/mobileMenu.js
// This script handles the mobile menu close functionality and link clicks.

// Wrap the logic in a function that can be explicitly called.
export function initializeMobileMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements by their IDs
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (closeMenuButton && mobileMenuOverlay) {
      closeMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('translate-x-full');
        document.body.style.overflow = '';
      });
    }

    if (mobileMenuOverlay) {
      const mobileNavLinks = mobileMenuOverlay.querySelectorAll('.nav-link');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuOverlay.classList.add('translate-x-full');
          document.body.style.overflow = '';
        });
      });
    }
  });
}