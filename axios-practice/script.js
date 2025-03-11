const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// ✅ Function to display Pokémon data on UI (Used for multiple tasks)
function displayPokemon(data) {
  document.getElementById("pokemonDetails").innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <p><strong>ID:</strong> ${data.id}</p> <!-- Task 4 -->
        <p><strong>Height:</strong> ${data.height}</p> <!-- Task 2 -->
        <p><strong>Weight:</strong> ${
          data.weight / 10
        } kg</p> <!-- Task 3 & 32 -->
        <img id="pokemonSprite" src="${data.sprites.front_default}" alt="${
    data.name
  }"> <!-- Task 5 -->
    `;
}

// ✅ Task 12 & 14: Handle "Not Found" and Empty Query
function searchPokemon() {
  let name = document.getElementById("searchInput").value.toLowerCase();

  if (!name) {
    document.getElementById("errorMessage").innerText =
      "1️⃣4️⃣ Please enter a Pokémon name!";
    return;
  }

  document.getElementById("loadingMessage").innerText = "1️⃣7️⃣ Loading...";
  document.getElementById("errorMessage").innerText = "";

  axios
    .get(`${baseURL}${name}`)
    .then((response) => {
      displayPokemon(response.data); // Task 1, 2, 3, 4, 5, 32
      document.getElementById("loadingMessage").innerText = "";
    })
    .catch(() => {
      document.getElementById("errorMessage").innerText =
        "1️⃣2️⃣ Pokémon Not Found!";
      document.getElementById("loadingMessage").innerText = "";
    });
}

// ✅ Task 1: Fetch & display Pikachu's name
function fetchPikachu() {
  axios.get(`${baseURL}pikachu`).then((res) => displayPokemon(res.data));
}

// ✅ Task 2: Fetch & display Charizard's height
function fetchCharizard() {
  axios.get(`${baseURL}charizard`).then((res) => displayPokemon(res.data));
}

// ✅ Task 3: Fetch & display Bulbasaur's weight
function fetchBulbasaur() {
  axios.get(`${baseURL}bulbasaur`).then((res) => displayPokemon(res.data));
}

// ✅ Task 4: Fetch & display Eevee's Pokémon ID
function fetchEevee() {
  axios.get(`${baseURL}eevee`).then((res) => displayPokemon(res.data));
}

// ✅ Task 5: Fetch & display Gengar's front sprite
function fetchGengar() {
  axios.get(`${baseURL}gengar`).then((res) => displayPokemon(res.data));
}

// ✅ Task 12: Fetch Invalid Pokémon (handles "Not Found" case)
function fetchInvalidPokemon() {
  searchPokemon("invalidPokemon");
}

// ✅ Task 14: Fetch with an Empty Query
function fetchEmptyQuery() {
  searchPokemon("");
}

// ✅ Task 17: Show "Loading..." while fetching data
function fetchWithLoading() {
  document.getElementById("loadingMessage").innerText = "1️⃣7️⃣ Loading...";
  axios.get(`${baseURL}pikachu`).then((response) => {
    displayPokemon(response.data);
    document.getElementById("loadingMessage").innerText = "";
  });
}

// ✅ Task 21: Fetch two Pokémon at the same time & display them sequentially
function fetchTwoPokemon() {
  Promise.all([
    axios.get(`${baseURL}charmander`),
    axios.get(`${baseURL}squirtle`),
  ]).then((responses) => {
    displayPokemon(responses[0].data); // Show first Pokémon
    setTimeout(() => displayPokemon(responses[1].data), 3000); // Show second after 3 sec
  });
}

// ✅ Task 26: Fetch three random Pokémon & display them sequentially
function fetchThreeRandom() {
  const ids = Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * 898) + 1
  );

  Promise.all(ids.map((id) => axios.get(`${baseURL}${id}`))).then(
    (responses) => {
      responses.forEach((res, index) => {
        setTimeout(() => displayPokemon(res.data), index * 3000);
      });
    }
  );
}

// ✅ Task 32: Fetch & display weight in kilograms using `.map()`
function fetchWeightInKg() {
  axios
    .get(`${baseURL}snorlax`)
    .then((response) => displayPokemon(response.data));
}
