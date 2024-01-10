// Add event listeners to reset buttons
document.addEventListener('DOMContentLoaded', function() {
  const resetButtons = document.querySelectorAll('.reset-btn');

  resetButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const bar = this.parentNode.querySelector('.bar'); // Get the corresponding input
      bar.value = 0; // Reset its value to 0
    });
  });
});
