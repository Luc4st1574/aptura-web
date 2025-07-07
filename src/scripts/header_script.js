// Define the primary orange color
const primaryOrange = 'hsl(17, 100%, 50%)';

// Get all mobile navigation links (the <a> tags)
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
// Get all mobile navigation list items (the <li> tags, which have the borders)
const mobileNavListItems = document.querySelectorAll('#mobile-menu-overlay nav ul li');

// Function to reset all mobile nav link styles (text, icon, and parent <li> border)
function resetMobileNavStyles() {
  mobileNavLinks.forEach(link => {
    link.style.color = ''; // Reset text color
    const icon = link.querySelector('img');
    if (icon) {
      icon.style.filter = ''; // Reset icon filter
    }
  });
  mobileNavListItems.forEach(item => {
    // Reset the border color for all list items
    item.style.borderColor = '';
  });
}

// Add event listeners to each mobile link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent default link behavior for a moment if needed, but usually not for color change

    // First, reset all other links and their parent li's to their default styles
    resetMobileNavStyles();

    // Apply primary orange to the clicked link's text
    this.style.color = primaryOrange;

    // Apply primary orange to the icon
    const icon = this.querySelector('img');
    if (icon) {
      icon.style.filter = 'hue-rotate(200deg) saturate(300%) brightness(150%)';
    }

    const parentLi = this.closest('li');
    if (parentLi) {
      parentLi.style.borderColor = primaryOrange;
    }

    setTimeout(() => {
      const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.add('translate-x-full');
      }
    }, 150);
  });

  link.addEventListener('mouseenter', function() {
    if (this.style.color !== primaryOrange) {
      this.style.color = primaryOrange;
      const icon = this.querySelector('img');
      if (icon) {
          icon.style.filter = 'hue-rotate(200deg) saturate(300%) brightness(150%)';
      }
      const parentLi = this.closest('li');
      if (parentLi && parentLi.style.borderColor !== primaryOrange) {
        parentLi.style.borderColor = primaryOrange;
      }
    }
  });

  link.addEventListener('mouseleave', function() {
    if (this.style.color === primaryOrange) {
        this.style.color = '';
        const icon = this.querySelector('img');
        if (icon) {icon.style.filter = '';
        }
        const parentLi = this.closest('li');
        if (parentLi) {
          parentLi.style.borderColor = '';
        }
    }
  });
});

// Handle the mobile menu open/close logic (KEEP THIS AS IS)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

if (mobileMenuButton && mobileMenuOverlay) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('translate-x-full');
    resetMobileNavStyles();
  });
}

if (closeMenuButton && mobileMenuOverlay) {
  closeMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('translate-x-full');
    resetMobileNavStyles();
  });
}