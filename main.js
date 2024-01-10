document.addEventListener('DOMContentLoaded', function() {
  const resetButtons = document.querySelectorAll('.reset-btn');
  const sliders = document.querySelectorAll(".bar");

  resetButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      const bar = this.parentNode.querySelector('.bar'); // Get the corresponding input
      bar.value = 0; // Reset its value to 0
      localStorage.setItem(sliders[index].id, bar.value); // Save the reset value to localStorage
    });
  });

  sliders.forEach((slider, index) => {
    // Add change event listener to each slider
    slider.addEventListener('input', function() {
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
