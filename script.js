document.getElementById("orderForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      // ✅ Redirect to WhatsApp after successful submission
      window.location.href = "https://wa.link/4ah7bz";
    } else {
      alert("Form submission failed. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please check your internet connection.");
  }
});
