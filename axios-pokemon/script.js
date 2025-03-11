const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemonId = 1;
let isShiny = false;
let searchHistory = [];

// Fetch Pokémon data
async function fetchPokemon(pokemon = currentPokemonId) {
  let search = document.getElementById("search").value.toLowerCase().trim();
  let query = search ? search : pokemon;
  let card = document.getElementById("pokemonCard");

  try {
    card.innerHTML = `<p>Loading...</p>`;
    let response = await axios.get(`${BASE_URL}${query}`);
    let data = response.data;
    currentPokemonId = data.id;
    searchHistory.unshift(data.name);
    searchHistory = searchHistory.slice(0, 5); // Keep last 5 searches

    let sprite = isShiny
      ? data.sprites.front_shiny
      : data.sprites.front_default;
    let isLegendary = await checkLegendary(data.id);

    card.innerHTML = `
            <h2>${data.name.toUpperCase()} (#${data.id})</h2>
            <img src="${sprite}" alt="${data.name}">
            <p><strong>Type:</strong> ${data.types
              .map((t) => t.type.name)
              .join(", ")}</p>
            <p><strong>Height:</strong> ${(data.height / 10).toFixed(2)} m</p>
            <p><strong>Weight:</strong> ${(data.weight / 10).toFixed(2)} kg</p>
            <p><strong>Abilities:</strong> ${data.abilities
              .map((a) => a.ability.name)
              .join(", ")}</p>
            <p><strong>Legendary:</strong> ${isLegendary ? "⭐ Yes" : "No"}</p>
        `;

    showSearchHistory();
  } catch (error) {
    card.innerHTML = `<p style="color:red;">Oops! Pokémon not found</p>`;
  }
}

// ✅ **Fixed Compare Pokémon Function**
async function comparePokemon() {
  let poke1 = prompt("Enter first Pokémon name:").toLowerCase().trim();
  let poke2 = prompt("Enter second Pokémon name:").toLowerCase().trim();

  if (!poke1 || !poke2) {
    alert("Please enter both Pokémon names!");
    return;
  }

  try {
    // Fetch both Pokémon data
    let [response1, response2] = await Promise.all([
      axios.get(`${BASE_URL}${poke1}`),
      axios.get(`${BASE_URL}${poke2}`),
    ]);

    let data1 = response1.data;
    let data2 = response2.data;

    // Show comparison alert with key stats
    alert(`
      🔥 Pokémon Comparison 🔥
      
      ${data1.name.toUpperCase()}  VS  ${data2.name.toUpperCase()}
      ----------------------------------------
      ⚔️ Base Experience: ${data1.base_experience} vs ${data2.base_experience}
      💪 Attack: ${data1.stats[1].base_stat} vs ${data2.stats[1].base_stat}
      🛡️ Defense: ${data1.stats[2].base_stat} vs ${data2.stats[2].base_stat}
      ⚡ Speed: ${data1.stats[5].base_stat} vs ${data2.stats[5].base_stat}
    `);
  } catch (error) {
    alert("One or both Pokémon names are incorrect. Please try again!");
  }
}

// ✅ **Fully Fixed Partial Name Search**
async function fetchPartialMatch() {
  let search = document.getElementById("search").value.toLowerCase().trim();
  if (!search) return alert("Please enter a partial name!");

  try {
    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000"
    );
    let allPokemon = response.data.results;

    let matchedPokemons = allPokemon.filter((poke) =>
      poke.name.includes(search)
    );

    matchedPokemons.sort((a, b) => {
      if (a.name.startsWith(search) && !b.name.startsWith(search)) return -1;
      if (b.name.startsWith(search) && !a.name.startsWith(search)) return 1;
      return a.name.localeCompare(b.name);
    });

    if (matchedPokemons.length > 0) {
      fetchPokemon(matchedPokemons[0].name);
    } else {
      alert("No Pokémon found with that name.");
    }
  } catch (error) {
    alert("Error fetching Pokémon data.");
  }
}

// Next Pokémon (Fixed)
async function nextPokemon() {
  let nextId = currentPokemonId + 1;
  try {
    let response = await axios.get(`${BASE_URL}${nextId}`);
    if (response.status === 200) {
      currentPokemonId = nextId;
      fetchPokemon(currentPokemonId);
    }
  } catch (error) {
    alert("No more Pokémon available!");
  }
}

// Previous Pokémon (Fixed)
async function prevPokemon() {
  if (currentPokemonId > 1) {
    let prevId = currentPokemonId - 1;
    try {
      let response = await axios.get(`${BASE_URL}${prevId}`);
      if (response.status === 200) {
        currentPokemonId = prevId;
        fetchPokemon(currentPokemonId);
      }
    } catch (error) {
      alert("No previous Pokémon available!");
    }
  }
}

// Fetch a random Pokémon
function getRandomPokemon() {
  let randomId = Math.floor(Math.random() * 898) + 1;
  fetchPokemon(randomId);
}

// Toggle shiny mode
function toggleShiny() {
  isShiny = !isShiny;
  fetchPokemon(currentPokemonId);
}

// Fetch 10 random Pokémon
async function fetchTenRandom() {
  let promises = [];
  for (let i = 0; i < 10; i++) {
    let id = Math.floor(Math.random() * 151) + 1;
    promises.push(axios.get(`${BASE_URL}${id}`));
  }
  let results = await Promise.all(promises);
  alert(results.map((p) => p.data.name).join(", "));
}

// Play Pokémon cry
async function playCry() {
  try {
    let response = await axios.get(`${BASE_URL}${currentPokemonId}`);
    let cryUrl = response.data.cries.latest;
    let audio = new Audio(cryUrl);
    audio.play();
  } catch (error) {
    alert("Error fetching Pokémon cry.");
  }
}

// Show search history
function showSearchHistory() {
  let historyList = document.getElementById("searchHistory");
  historyList.innerHTML = searchHistory
    .map((name) => `<li>${name}</li>`)
    .join("");
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Check if Pokémon is legendary
async function checkLegendary(id) {
  let response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  return response.data.is_legendary;
}

// Load first Pokémon on page load
fetchPokemon();
