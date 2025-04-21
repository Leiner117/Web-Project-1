// MODAL DE PLATOS
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// MODAL DE RESTAURANTES
const restaurantModal = document.querySelector(".restaurant-modal");
const restaurantBody = document.getElementById("restaurant-modal-body");
const restaurantClose = document.querySelector(".restaurant-close-btn");
const contentMap = {
  carbonara: `
      <h2>Spaghetti alla Carbonara</h2>
      <p>This beloved Roman pasta dish is known for its rich, creamy texture made without cream. Instead, it uses eggs, Pecorino Romano cheese, pancetta, and black pepper to create a silky, indulgent sauce.</p>
      <ul>
        <li>Spaghetti <strong>(contains gluten)</strong></li>
        <li>Eggs <strong>(allergen)</strong></li>
        <li>Pecorino Romano <strong>(allergen: dairy)</strong></li>
        <li>Pancetta (Italian cured pork)</li>
        <li>Black pepper</li>
      </ul>
    `,

  cacioepepe: `
      <h2>Cacio e Pepe</h2>
      <p>A minimalist yet flavorful dish that embodies Roman simplicity. Made with just pasta, cheese, and pepper, Cacio e Pepe delivers comfort with a kick of sharp Pecorino and freshly cracked black pepper.</p>
      <ul>
        <li>Tonnarelli or spaghetti <strong>(contains gluten)</strong></li>
        <li>Pecorino Romano <strong>(allergen: dairy)</strong></li>
        <li>Black pepper</li>
      </ul>
    `,

  saltimbocca: `
      <h2>Saltimbocca alla Romana</h2>
      <p>A classic Roman second course, Saltimbocca features tender veal slices topped with sage and prosciutto, pan-seared and simmered in white wine and butter for a savory and aromatic flavor.</p>
      <ul>
        <li>Veal cutlets</li>
        <li>Prosciutto (Italian dry-cured ham)</li>
        <li>Fresh sage</li>
        <li>Butter <strong>(allergen: dairy)</strong></li>
        <li>Dry white wine</li>
      </ul>
    `,

  coda: `
      <h2>Coda alla Vaccinara</h2>
      <p>This hearty oxtail stew is a Roman comfort food traditionally prepared by slow-cooking oxtail with tomatoes, vegetables, red wine, and warm spices. It's rich, tender, and bursting with depth.</p>
      <ul>
        <li>Oxtail</li>
        <li>Celery</li>
        <li>Carrots</li>
        <li>Onions</li>
        <li>Tomato sauce</li>
        <li>Red wine</li>
        <li>Cloves and cinnamon</li>
      </ul>
    `,

  suppli: `
      <h2>Supplì</h2>
      <p>A beloved Roman street food, Supplì are crispy, golden rice balls stuffed with gooey mozzarella. They’re breaded and fried to perfection, making them irresistible appetizers or snacks.</p>
      <ul>
        <li>Arborio rice</li>
        <li>Tomato sauce</li>
        <li>Mozzarella <strong>(allergen: dairy)</strong></li>
        <li>Bread crumbs <strong>(allergen: gluten)</strong></li>
        <li>Eggs <strong>(allergen)</strong></li>
      </ul>
    `,
  pinsa: `
    <h2>Pinsa Romana</h2>
    <p>Pinsa is an ancient Roman-style flatbread that predates modern pizza. It's made with a unique blend of flours (wheat, rice, and soy), giving it a light, airy texture with a crispy outside and soft inside. Unlike pizza, pinsa is oval-shaped and often topped with fresh, seasonal ingredients.</p>
    <ul>
      <li>Blend of wheat, rice, and soy flours <strong>(contains gluten and soy)</strong></li>
      <li>Olive oil</li>
      <li>Water</li>
      <li>Salt</li>
      <li>Fresh toppings (e.g., tomato, mozzarella <strong>(dairy)</strong>, arugula, prosciutto)</li>
    </ul>
  `,
};
const restaurantMap = {
  "per-me": `
  <h2>Per Me</h2>
  <p>Per Me is a modern European restaurant led by chef Giulio Terrinoni, located in the heart of Rome. The open kitchen allows diners to watch fresh, high-quality ingredients being prepared. The menu features outstanding seafood dishes as well as meat-based options inspired by the chef’s hometown of Fiuggi.</p>
  <p>The wine list boasts over 200 labels from top regions including Italy, France, Australia, and Spain. A terrace is available for open-air dining on a charming cobblestone street during warmer months.</p>
  <p><strong>Address:</strong> Vicolo del Malpasso, 9, 00186 Rome RM, Italy</p>
  <p><strong>Hours:</strong> Daily, 12:30 PM – 3:00 PM and 7:30 PM – 10:30 PM</p>
  <p><strong>Phone:</strong> +39 06 687 7365</p>
  <p><strong>Website:</strong> <a href="https://www.giulioterrinoni.it/eng/the-restaurant/" target="_blank">www.giulioterrinoni.it</a></p>
  <img src="./assets/per-me.webp" alt="Per Me Restaurant" style="width:100%; border-radius: 8px; margin-top: 1rem;">
`,

  "al-ceppo": `
  <h2>Al Ceppo</h2>
  <p>Founded in 1968, Al Ceppo is a luxury restaurant located on Via Panama. The seasonal and à la carte menus are rooted in tradition, yet every dish is elevated by creative innovation—whether it’s fresh seafood or richly flavored meat dishes.</p>
  <p>The wine selection includes over 700 labels from all over Italy, as well as French classics from Bordeaux and Burgundy, making it ideal for wine lovers.</p>
  <p><strong>Address:</strong> Via Panama, 2, 00198 Rome RM, Italy</p>
  <p><strong>Hours:</strong> Daily, 12:30 PM – 3:00 PM and 7:30 PM – 11:00 PM</p>
  <p><strong>Phone:</strong> +39 06 841 9696</p>
  <p><strong>Website:</strong> <a href="https://www.ristorantealceppo.com/" target="_blank">www.ristorantealceppo.com</a></p>
  <img src="./assets/alceppo.webp" alt="Al Ceppo Restaurant" style="width:100%; border-radius: 8px; margin-top: 1rem;">
`,

  pipero: `
  <h2>Pipero</h2>
  <p>Pipero is a Michelin-starred restaurant founded by Alessandro Pipero. Located on Corso Vittorio Emanuele II, the refined and modern space features large windows offering natural light and views of the stunning Piazza della Chiesa Nuova.</p>
  <p>Chef Ciro Scamardella specializes in contemporary Italian cuisine, with seasonal menus that include dishes like butter and anchovy risotto, mushrooms with foie gras and blueberries, and almond, lychee, and rose desserts.</p>
  <p><strong>Address:</strong> Corso Vittorio Emanuele II, 250, 00186 Rome RM, Italy</p>
  <p><strong>Hours:</strong> Daily, 12:00 PM – 3:00 PM and 7:00 PM – 10:30 PM</p>
  <p><strong>Phone:</strong> +39 06 6813 9022</p>
  <p><strong>Website:</strong> <a href="https://www.piperoroma.it/eng/" target="_blank">www.piperoroma.it</a></p>
  <img src="./assets/pipero.webp" alt="Pipero Restaurant" style="width:100%; border-radius: 8px; margin-top: 1rem;">
`,
};
// EVENTO GENERAL DE CLICK
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.dataset.id;
    const type = item.dataset.type;

    if (type === "dish") {
      modalBody.innerHTML = contentMap[id] || "<p>Content not available.</p>";
      modal.classList.remove("hidden");
    } else if (type === "restaurant") {
      restaurantBody.innerHTML =
        restaurantMap[id] || "<p>Info not available.</p>";
      restaurantModal.classList.remove("hidden");
    }
  });
});

// CIERRE DE MODALES
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
restaurantClose.addEventListener("click", () =>
  restaurantModal.classList.add("hidden")
);

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
  if (e.target === restaurantModal) restaurantModal.classList.add("hidden");
});
