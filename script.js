document.addEventListener("DOMContentLoaded", function () {
  const ageForm = document.getElementById("ageForm");

  ageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Get the value entered in the age input field
    const ageInput = document.getElementById("ageInput").value;

    // Check if the entered age is valid and if it's under 18
    const message =
      isValidAge(ageInput) && parseInt(ageInput) < 18
        ? "You are under 18"
        : "You are an adult";

    // Display the message
    alert(message);
  });

  function isValidAge(age) {
    // Convert age to a number
    const ageNumber = parseInt(age);

    // Check if ageNumber is a valid number and greater than 0
    return !isNaN(ageNumber) && ageNumber > 0;
  }
});
