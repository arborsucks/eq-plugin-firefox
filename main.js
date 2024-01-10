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

document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll(".bar");

  sliders.forEach(slider => {
    // Add change event listener to each slider
    slider.addEventListener("input", function() {
      // Save slider value to localStorage when it changes
      localStorage.setItem(slider.id, slider.value);
    });

    // Retrieve slider value from localStorage on page load
    const savedValue = localStorage.getItem(slider.id);
    if (savedValue !== null) {
      slider.value = savedValue;
    }
  });
});
