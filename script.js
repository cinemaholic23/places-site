function daysLeft(dateString) {
  if (!dateString) return "";
  const now = new Date();
  const target = new Date(dateString);
  const diff = target.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? `Через ${days} дней` : "Уже прошло";
}

function renderCards(list) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  list.forEach((place) => {
    const days = daysLeft(place.date);

    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => window.open(place.map, "_blank");

    card.innerHTML = `
      <img src="${place.image}" alt="${place.title}" />
      <div class="card-content">
        <h3>${place.title}</h3>
        <p>${place.description}</p>
        <div class="meta">${days}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterPlaces(category) {
  if (category === "all") {
    renderCards(places);
  } else {
    renderCards(places.filter((p) => p.category === category));
  }
}

renderCards(places);
