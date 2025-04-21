
const restaurantModal = document.getElementById("restaurant-modal");
const restaurantBody = document.getElementById("restaurant-modal-body");
const restaurantClose = document.querySelector(".restaurant-close");
export const restaurantMap = {
    "trattoria-romana": `
      <h2>Trattoria Romana</h2>
      <p>A cozy family-run restaurant near Campo de' Fiori offering traditional Roman cuisine.</p>
      <p><strong>Hours:</strong> Mon–Sun: 12:00 PM – 11:00 PM</p>
      <p><strong>Phone:</strong> +39 06 1234 5678</p>
      <p><a href="https://trattoriaromana.com" target="_blank">Visit Website</a></p>
      <img src="./assets/trattoria-romana-full.webp" alt="Trattoria Interior" style="width:100%; border-radius: 8px; margin-top: 1rem;">
    `,
    "osteria-giulia": `
      <h2>Osteria Giulia</h2>
      <p>An elegant spot blending Roman and Mediterranean flavors with local wines and seasonal dishes.</p>
      <p><strong>Hours:</strong> Tue–Sun: 1:00 PM – 10:00 PM</p>
      <p><strong>Phone:</strong> +39 06 9876 5432</p>
      <p><a href="https://osteriagiulia.it" target="_blank">Visit Website</a></p>
      <img src="./assets/osteria-giulia-full.webp" alt="Osteria Giulia" style="width:100%; border-radius: 8px; margin-top: 1rem;">
    `,
    "da-enzo": `
      <h2>Da Enzo al 29</h2>
      <p>A beloved Roman trattoria in Trastevere known for its authentic atmosphere and iconic dishes like carbonara and tiramisu.</p>
      <p><strong>Hours:</strong> Mon–Sat: 12:30 PM – 3:00 PM, 7:30 PM – 11:00 PM</p>
      <p><strong>Phone:</strong> +39 06 581 2260</p>
      <p><a href="https://www.daenzoal29.com" target="_blank">Visit Website</a></p>
      <img src="./assets/da-enzo-full.webp" alt="Da Enzo al 29" style="width:100%; border-radius: 8px; margin-top: 1rem;">
    `
  };
  
document.querySelectorAll('[data-type="restaurant"]').forEach(item => {
  item.addEventListener("click", () => {
    const id = item.dataset.id;
    restaurantBody.innerHTML = restaurantMap[id] || "<p>Info not available.</p>";
    restaurantModal.classList.remove("hidden");
  });
});

restaurantClose.addEventListener("click", () => {
  restaurantModal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === restaurantModal) {
    restaurantModal.classList.add("hidden");
  }
});
