const cryptoImage = "./SRC/assets/crypto.png"; // Ajusta la ruta según sea necesario
const sismoImage = "./SRC/assets/terremoto.png";
const YaOfiImgaImage = "./SRC/assets/construir.png";
const vetImage = "./SRC/assets/VET.png";
const snakeImage = "./SRC/assets/serpiente.png";
const voiceImage = "./SRC/assets/hablar.png";
const courflixImage = "./SRC/assets/netflix.png";
const projectsData = [
  {
    id: 0,
    title: "PAGATODOYA",
    opinion:
      "Una webapp intuitiva para gestionar tus gastos diarios de forma eficiente. Agrega, edita y elimina movimientos, y obtén reportes detallados de tu actividad financiera mensual.",
    tag: "REACT,CSS,JAVASCRIPT,FIREBASE,PRIMEREACT,VERCEL",
    url: "https://budget-app-gilt-phi.vercel.app/login",
    img: cryptoImage,
  },
  {
    id: 1,
    title: "Crypto App",
    opinion:
      "Sigue el valor de las criptomonedas en tiempo real con esta webapp. Desarrollada con React y Styled-Components, utiliza la API de CryptoCompare para brindarte datos actualizados al instante.",
    tag: "REACT,STYLED-COMPONENTS,API,JAVASCRIPT",
    url: "https://cripto-app-tawny.vercel.app/",
    img: cryptoImage,
  },
  {
    id: 2,
    title: "SISMOTRACK",
    opinion:
      "Visualiza la actividad sísmica en tiempo real con esta plataforma. Con un backend en Node.js y un frontend en React y TailwindCSS, permite consultar datos precisos sobre sismos recientes.",
    tag: "REACT,TAILWINDCSS,API,JAVASCRIPT,NODE.JS,VERCEL,RENDER",
    url: "https://sismo-app-chi.vercel.app/",
    img: sismoImage,
  },
  {
    id: 3,
    title: "YaOficios",
    opinion:
      "Encuentra y publica servicios de oficios fácilmente. Filtra por especialidad y contacta con profesionales en San Juan. Ideal para quienes buscan conectar oferta y demanda de trabajo.",
    tag: "REACT,TAILWINDCSS,MONGODB,JAVASCRIPT,CSS",
    url: "https://my-recommend-app.vercel.app/",
    img: YaOfiImgaImage,
  },
  {
    id: 4,
    title: "Vet App",
    opinion:
      "Una herramienta esencial para el control de pacientes veterinarios. Permite registrar mascotas, dueños y síntomas, con un historial accesible gracias a LocalStorage.",
    tag: "REACT,TAILWINDCSS,JAVASCRIPT,LOCALSTORAGE",
    url: "https://my-calendar-app-ebon.vercel.app/",
    img: vetImage,
  },
  {
    id: 5,
    title: "Snake Game",
    opinion:
      "Revive el clásico Snake en esta versión moderna hecha con JavaScript y Canvas. Ágil, entretenido y perfecto para desafiar tu habilidad.",
    tag: "HTML,CSS,JS,SCSS,CANVAS",
    url: "https://snake-js-taupe.vercel.app/",
    img: snakeImage,
  },
  {
    id: 6,
    title: "Voicetext App",
    opinion:
      "Convierte tu voz en texto en tiempo real. Ideal para transcribir ideas, notas o mensajes de forma rápida y sencilla.",
    tag: "HTML,CSS,JS,SCSS",
    url: "https://voicetext.vercel.app/",
    img: voiceImage,
  },
  {
    id: 7,
    title: "Courflix Netflix Clone",
    opinion:
      "Un clon de Netflix desarrollado desde cero. Explora una interfaz similar a la plataforma original, con un diseño atractivo y responsive.",
    tag: "HTML,CSS,JS,SCSS",
    url: "https://courflix-vanilla-master.vercel.app/",
    img: courflixImage,
  },
];

// 2. Función que muestra los proyectos
function displayProjects() {
  const projectsContainer = document.querySelector(".section-content");

  if (!projectsContainer) {
    console.error("No se encontró el contenedor .section-content en el HTML.");
    return;
  }

  projectsData.forEach((project) => {
    // Validar si project.tag existe antes de hacer split
    const tags = project.tag
      ? project.tag
          .split(",")
          .map(
            (tag) =>
              `<span class="section-content-images-tag ${tag}">${tag}</span>`
          )
          .join(" ")
      : ""; // Si no hay tags, usa una cadena vacía

    const projectElement = `
      <div class="section-content-images">
        <p class="section-content-images-title">${project.title}</p>
        <a href="${project.url}" target="blank_">
          <img src="${project.img}" alt="${project.title}" style="width: 100px; height: auto;" />
        </a>
        <p class="section-content-images-opinion">${project.opinion}</p>
        <div>${tags}</div>
      </div>
    `;

    projectsContainer.insertAdjacentHTML("beforeend", projectElement);
  });
}

// 3. Llamada a la función
document.addEventListener("DOMContentLoaded", displayProjects);

function updateAge() {
  const birthDate = new Date("1995-11-12");
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const m = currentDate.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("age").textContent = age;
}
document.addEventListener("DOMContentLoaded", updateAge);
