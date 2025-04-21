const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

const restaurantModal = document.querySelector(".restaurant-modal");
const restaurantBody = document.getElementById("restaurant-modal-body");
const restaurantClose = document.querySelector(".restaurant-close-btn");
const contentMap = {
  carbonara: `
      <h2>Spaghetti alla Carbonara</h2>
      <p>Este querido plato de pasta romano es famoso por su textura cremosa, lograda sin usar nata. En su lugar, se utilizan huevos, queso Pecorino Romano, pancetta y pimienta negra para crear una salsa sedosa y deliciosa.</p>
      <ul>
        <li>Spaghetti <strong>(contiene gluten)</strong></li>
        <li>Huevos <strong>(alérgeno)</strong></li>
        <li>Pecorino Romano <strong>(alérgeno: lácteos)</strong></li>
        <li>Pancetta (tocino curado italiano)</li>
        <li>Pimienta negra</li>
      </ul>
    `,

  cacioepepe: `
      <h2>Cacio e Pepe</h2>
      <p>Un plato minimalista pero lleno de sabor que representa la simplicidad romana. Preparado solo con pasta, queso y pimienta, el Cacio e Pepe ofrece confort con el toque intenso del Pecorino y la pimienta negra recién molida.</p>
      <ul>
        <li>Tonnarelli o spaghetti <strong>(contiene gluten)</strong></li>
        <li>Pecorino Romano <strong>(alérgeno: lácteos)</strong></li>
        <li>Pimienta negra</li>
      </ul>
    `,

  saltimbocca: `
      <h2>Saltimbocca alla Romana</h2>
      <p>Un segundo plato clásico de la cocina romana, el Saltimbocca se prepara con finas lonchas de ternera cubiertas con salvia y prosciutto, selladas en sartén y cocinadas con vino blanco y mantequilla para un sabor sabroso y aromático.</p>
      <ul>
        <li>Filetes de ternera</li>
        <li>Prosciutto (jamón curado italiano)</li>
        <li>Salvia fresca</li>
        <li>Mantequilla <strong>(alérgeno: lácteos)</strong></li>
        <li>Vino blanco seco</li>
      </ul>
    `,

  coda: `
      <h2>Coda alla Vaccinara</h2>
      <p>Este abundante guiso de rabo de buey es un plato tradicional reconfortante de Roma, preparado a fuego lento con tomate, verduras, vino tinto y especias cálidas. Es rico, tierno y lleno de sabor profundo.</p>
      <ul>
        <li>Rabo de buey</li>
        <li>Apio</li>
        <li>Zanahorias</li>
        <li>Cebollas</li>
        <li>Salsa de tomate</li>
        <li>Vino tinto</li>
        <li>Clavos de olor y canela</li>
      </ul>
    `,

  suppli: `
      <h2>Supplì</h2>
      <p>Un popular aperitivo callejero romano, los Supplì son bolas de arroz crujientes y doradas, rellenas con mozzarella derretida. Rebozadas y fritas a la perfección, son irresistibles como entrada o tentempié.</p>
      <ul>
        <li>Arroz Arborio</li>
        <li>Salsa de tomate</li>
        <li>Mozzarella <strong>(alérgeno: lácteos)</strong></li>
        <li>Pan rallado <strong>(alérgeno: gluten)</strong></li>
        <li>Huevos <strong>(alérgeno)</strong></li>
      </ul>
    `,

  pinsa: `
    <h2>Pinsa Romana</h2>
    <p>La pinsa es una focaccia de estilo romano antiguo que precede a la pizza moderna. Se elabora con una mezcla única de harinas (trigo, arroz y soja), lo que le da una textura ligera y aireada, con exterior crujiente e interior suave. A diferencia de la pizza, la pinsa es ovalada y suele llevar ingredientes frescos y de temporada.</p>
    <ul>
      <li>Mezcla de harinas de trigo, arroz y soja <strong>(contiene gluten y soja)</strong></li>
      <li>Aceite de oliva</li>
      <li>Agua</li>
      <li>Sal</li>
      <li>Ingredientes frescos (ej. tomate, mozzarella <strong>(lácteos)</strong>, rúcula, prosciutto)</li>
    </ul>
  `,
};

const restaurantMap = {
  "per-me": `
  <h2>Per Me</h2>
  <p>Per Me es un restaurante de cocina europea moderna dirigido por el chef Giulio Terrinoni, ubicado en el corazón de Roma. Su cocina abierta permite a los comensales observar cómo se preparan los ingredientes frescos y de alta calidad. El menú destaca por sus platos de mariscos, aunque también ofrece opciones con carne inspiradas en Fiuggi, ciudad natal del chef.</p>
  <p>La carta de vinos incluye más de 200 etiquetas provenientes de regiones destacadas como Italia, Francia, Australia y España. Dispone de terraza, ideal para cenar al aire libre en una encantadora calle adoquinada durante los meses cálidos.</p>
  <p><strong>Dirección:</strong> Vicolo del Malpasso, 9, 00186 Roma RM, Italia</p>
  <p><strong>Horario:</strong> Todos los días, de 12:30 p.m. a 3:00 p.m. y de 7:30 p.m. a 10:30 p.m.</p>
  <p><strong>Teléfono:</strong> +39 06 687 7365</p>
  <p><strong>Sitio web:</strong> <a href="https://www.giulioterrinoni.it/eng/the-restaurant/" target="_blank">www.giulioterrinoni.it</a></p>
  <img src="./assets/per-me.webp" alt="Restaurante Per Me" style="width:100%; border-radius: 8px; margin-top: 1rem;">
`,

  "al-ceppo": `
  <h2>Al Ceppo</h2>
  <p>Fundado en 1968, Al Ceppo es un restaurante de lujo situado en Via Panama. Sus menús de temporada y a la carta tienen raíces tradicionales, pero cada plato está elevado por una innovación creativa—ya sea con mariscos frescos o carnes de sabor intenso.</p>
  <p>La selección de vinos incluye más de 700 etiquetas de toda Italia, así como clásicos franceses de Burdeos y Borgoña, ideal para los amantes del vino.</p>
  <p><strong>Dirección:</strong> Via Panama, 2, 00198 Roma RM, Italia</p>
  <p><strong>Horario:</strong> Todos los días, de 12:30 p.m. a 3:00 p.m. y de 7:30 p.m. a 11:00 p.m.</p>
  <p><strong>Teléfono:</strong> +39 06 841 9696</p>
  <p><strong>Sitio web:</strong> <a href="https://www.ristorantealceppo.com/" target="_blank">www.ristorantealceppo.com</a></p>
  <img src="./assets/alceppo.webp" alt="Restaurante Al Ceppo" style="width:100%; border-radius: 8px; margin-top: 1rem;">
`,

  pipero: `
  <h2>Pipero</h2>
  <p>Pipero es un restaurante galardonado con estrella Michelin, fundado por Alessandro Pipero. Ubicado en Corso Vittorio Emanuele II, su espacio refinado y moderno cuenta con grandes ventanales que dejan pasar la luz natural y ofrecen vistas a la hermosa Piazza della Chiesa Nuova.</p>
  <p>El chef Ciro Scamardella se especializa en cocina italiana contemporánea, con menús de temporada que incluyen platos como risotto con mantequilla y anchoas, setas con foie gras y arándanos, y postres de almendra, lichi y rosa.</p>
  <p><strong>Dirección:</strong> Corso Vittorio Emanuele II, 250, 00186 Roma RM, Italia</p>
  <p><strong>Horario:</strong> Todos los días, de 12:00 p.m. a 3:00 p.m. y de 7:00 p.m. a 10:30 p.m.</p>
  <p><strong>Teléfono:</strong> +39 06 6813 9022</p>
  <p><strong>Sitio web:</strong> <a href="https://www.piperoroma.it/eng/" target="_blank">www.piperoroma.it</a></p>
  <img src="./assets/pipero.webp" alt="Restaurante Pipero" style="width:100%; border-radius: 8px; margin-top: 1rem;">
`,
};

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
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
restaurantClose.addEventListener("click", () =>
  restaurantModal.classList.add("hidden")
);

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
  if (e.target === restaurantModal) restaurantModal.classList.add("hidden");
});
