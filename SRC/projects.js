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
    title: "Crypto App",
    opinion:
      "Es una webapp que te permite ver el valor de las criptomonedas en tiempo real. Esta hecha con React y Styled-Components. La API que use es la de CryptoCompare.",
    tag: "REACT,STYLED-COMPONENTS,API,JAVASCRIPT",
    url: "https://cripto-app-tawny.vercel.app/",
    img: cryptoImage,
  },
  {
    id: 1,
    title: "SISMOTRACK",
    opinion:
      "Es una webapp que con un backend y un front end, se pueden ver los sismos ocurridos, el banckend esta hosteado en Render, esta con Node.js, y el frontend con React, Tailwindcss.",
    tag: "REACT,TAILWINDCSS,API,JAVASCRIPT,NODE.JS,VERCEL,RENDER",
    url: "https://sismo-app-chi.vercel.app/",
    img: sismoImage,
  },
  {
    id: 2,
    title: "YaOficios",
    opinion:
      "Es una webapp que te permite ver  y agregar personas con diferentes oficios, en esta vas a poder encontrar y filtrar por el oficio que necesitas, está pensada (por ahora) para la provincia de San Juan.",
    tag: "REACT,TAILWINDCSS,MONGODB,JAVASCRIPT,CSS",
    url: "https://my-recommend-app.vercel.app/",
    img: YaOfiImgaImage,
  },
  {
    id: 3,
    title: "Vet App",
    opinion:
      "Es una webapp que te permite agregar Mascotas, junto al nombre del dueño, su correo y los sintomas, tambien te deja darle de alta e ir viendo gracias a localStorage cuantos pacientes has tenido.",
    tag: "REACT,TAILWINDCSS,JAVASCRIPT,LOCALSTORAGE",
    url: "https://my-calendar-app-ebon.vercel.app/",
    img: vetImage,
  },
  {
    id: 4,
    title: "Snake Game",
    opinion: "Es un simple juego emulando el clasico snake.",
    tag: "HTML,CSS,JS,SCSS, CANVAS",
    url: "https://snake-js-taupe.vercel.app/",
    img: snakeImage,
  },
  {
    id: 5,
    title: "Voicetext App",
    opinion:
      "Es una web por la cual podes generar de voz a texto todo lo que digas.",
    tag: "HTML,CSS,JS,SCSS",
    url: "https://voicetext.vercel.app/",
    img: voiceImage,
  },
  {
    id: 6,
    title: "Courflix Netflix Clone",
    opinion: "Es una web emulando la conocida plataforma.",
    tag: "HTML,CSS,JS,SCSS",
    url: "https://courflix-vanilla-master.vercel.app/",
    img: courflixImage,
  },
];

// 2. Función que muestra los proyectos
function displayProjects() {
  const projectsContainer = document.querySelector(".section-content");

  projectsData.forEach((project) => {
    const tags = project.tag
      .split(",")
      .map(
        (tag) => `<span class="section-content-images-tag ${tag}">${tag}</span>`
      )
      .join(" ");

    const projectElement = `
      <div class="section-content-images">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <p class="section-content-images-title">${project.title}</p>
          <a href="${project.url}" target="blank_">
            <img src="${project.img}" alt="${project.title}" style="width: 100%; max-width: 100px; height: auto;" />
          </a>
          <p class="section-content-images-opinion">${project.opinion}</p>
          <div>${tags}</div>
        </div>
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
