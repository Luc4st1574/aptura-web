// src/scripts/mobileMenu.js
// This script handles the mobile menu close functionality and link clicks.

// The logic is now directly exposed by the function,
// to be called from a client-side context (e.g., MobileMenuButton.astro's script).
export function initializeMobileMenu() {
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // Event listener for closing the mobile menu when the 'X' button is clicked
  if (closeMenuButton && mobileMenuOverlay) {
    closeMenuButton.addEventListener('click', () => {
      mobileMenuOverlay.classList.add('translate-x-full'); // Slide out the menu
      document.body.style.overflow = ''; // Restore scrolling on the main page
    });
  }

  // Event listener to close the menu when any navigation link inside the mobile menu is clicked
  if (mobileMenuOverlay) {
    const mobileNavLinks = mobileMenuOverlay.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('translate-x-full'); // Slide out the menu
        document.body.style.overflow = ''; // Restore scrolling
      });
    });
  }
}