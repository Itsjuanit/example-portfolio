const projectsData = [
  {
    id: 0,
    title: "Crypto App",
    opinion:
      "Es una webapp que te permite ver el valor de las criptomonedas en tiempo real. Esta hecha con React y Styled-Components. La API que use es la de CryptoCompare.",
    tag: "REACT,STYLED-COMPONENTS,API",
    url: "https://cripto-app-tawny.vercel.app/",
    img: "https://drive.google.com/uc?export=download&id=1YXpeKWkWQnsqO6oSg9nK-FAZics_G6Qn",
  },
  {
    id: 1,
    title: "Work App",
    opinion:
      "Es una webapp que te permite ver  y agregar personas con diferentes oficios, en esta vas a poder encontrar y filtrar por el oficio que necesitas, está pensada (por ahora) para la provincia de San Juan.",
    tag: "REACT,TAILWINDCSS,MONGODB",
    url: "https://my-recommend-app.vercel.app/",
    img: "https://drive.google.com/uc?export=download&id=1jlbvOYR0-HY8NeaKTD-FLc4tG41QvZGb",
  },
  {
    id: 2,
    title: "Vet App",
    opinion:
      "Es una webapp que te permite agregar Mascotas, junto al nombre del dueño, su correo y los sintomas, tambien te deja darle de alta e ir viendo gracias a localStorage cuantos pacientes has tenido.",
    tag: "REACT, TAILWINDCSS",
    url: "https://my-calendar-app-ebon.vercel.app/",
    img: "https://drive.google.com/uc?export=download&id=1pWPIkm-zAK_TdQcpYsxLlq7y0G8oAcst",
  },
  {
    id: 3,
    title: "Snake Game",
    opinion: "Es un simple juego emulando el clasico snake.",
    tag: "HTML,CSS,JS,SCSS, CANVAS",
    url: "https://snake-js-taupe.vercel.app/",
    img: "https://drive.google.com/uc?export=download&id=1HNkmW4VGG2zG2lKewH4rff0guRCXpDBp",
  },
  {
    id: 4,
    title: "Voicetext App",
    opinion:
      "Es una web por la cual podes generar de voz a texto todo lo que digas.",
    tag: "HTML,CSS,JS,SCSS",
    url: "https://voicetext.vercel.app/",
    img: "https://drive.google.com/uc?export=download&id=11IFB1NGjdlm4MZp2Lbch1ro98Rad-xFZ",
  },
  {
    id: 5,
    title: "Courflix Netflix Clone",
    opinion: "Es una web emulando la conocida plataforma.",
    tag: "HTML,CSS,JS,SCSS",
    url: "https://courflix-vanilla-master.vercel.app/",
    img: "https://drive.google.com/uc?export=download&id=1QhhtV3v6fdd1s40ngoXv9TZz34QiED-I",
  },
];

function displayProjects() {
  const projectsContainer = document.querySelector(".section-content");

  projectsData.forEach((project) => {
    const tags = project.tag
      .split(",")
      .map((tag) => `<span class="section-content-images-tag">${tag}</span>`)
      .join(" ");

    const projectElement = `
          <div class="section-content-images">
            <div>
              <p class="section-content-images-title">${project.title}</p>
              <a href="${project.url}" target="blank_">
                <img src="${project.img}" alt="${project.title}" />
              </a>
              <p class="section-content-images-opinion">${project.opinion}</p>
              <div>${tags}</div>
            </div>
          </div>
        `;

    projectsContainer.insertAdjacentHTML("beforeend", projectElement);
  });
}

document.addEventListener("DOMContentLoaded", displayProjects);
