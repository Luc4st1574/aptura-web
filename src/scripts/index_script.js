// Select the banner and the close button by their IDs
const banner = document.getElementById('notification-banner');
const closeButton = document.getElementById('close-banner-button');

// Check if both elements exist on the page before adding the event listener
if (banner && closeButton) {
  // Add an event listener to the button
  closeButton.addEventListener('click', () => {
    // Add the 'hidden' class to the banner to make it disappear
    banner.classList.add('hidden');
  });
}