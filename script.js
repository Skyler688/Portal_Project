const cardsList = document.querySelector(".cards");
let cards = [];

const projectLinks = {
  project_1: {
    link: "https://skyler688.github.io/Cat-Photo-App/",
    name: "Cat Photo App",
  },
  project_2: {
    link: "https://skyler688.github.io/AI_Fishclub/",
    name: "AI Fish Club",
  },
  project_3: {
    link: "https://skyler688.github.io/button-and-more/",
    name: "Button & More",
  },
  project_4: {
    link: "https://skyler688.github.io/API-fetch/",
    name: "API Fetch",
  },
  project_5: {
    link: "https://skyler688.github.io/CSS-First-Project/",
    name: "Cafe Menu",
  },
};
console.log(cards);

createCard(projectLinks);

updateDate();

function createCard(projectLinks) {
  cards.push(...Object.values(projectLinks));

  cards.map((item) => {
    //   console.log(item);
    let card = document.createElement("div");
    let cardInner = document.createElement("div");
    let cardFront = document.createElement("div");
    let cardBack = document.createElement("div");
    let projectName = document.createElement("h2");
    let projectLink = document.createElement("a");

    card.classList = "card";
    cardInner.classList = "card-inner";
    cardFront.classList = "card-front";
    cardBack.classList = "card-back";

    projectName.textContent = item.name;
    projectLink.textContent = item.name;

    projectLink.href = item.link;

    cardsList.appendChild(card);
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardFront.appendChild(projectName);
    cardBack.appendChild(projectLink);
  });
}

function updateDate() {
  let currentDate = new Date().toLocaleDateString();
  let date = document.querySelector("#date");

  date.textContent = currentDate;

  let currentYear = new Date().getFullYear();
  let year = document.querySelector("#year");

  year.textContent = currentYear;
}
