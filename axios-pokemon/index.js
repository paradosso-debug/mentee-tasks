// const axios = require("axios");

// // Base URL for the Pokémon API
// const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// // Function to fetch Pokémon data
// async function fetchPokemon(name) {
//   try {
//     const response = await axios.get(`${BASE_URL}${name.toLowerCase()}`);
//     return response.data;
//   } catch (error) {
//     console.error(`❌ Error fetching Pokémon: ${name}`);
//     return null;
//   }
// }

// // 🔹 Basic GET Requests (1-10)
// async function basicGetRequests() {
//   console.log("🔥 Fetching Pokémon Data...");

//   // 1. Fetch and log the name of Pikachu
//   const pikachu = await fetchPokemon("pikachu");
//   if (pikachu) console.log(`1️⃣ Pikachu's Name: ${pikachu.name}`);

//   // 2. Fetch and display the height of Charizard
//   const charizard = await fetchPokemon("charizard");
//   if (charizard) console.log(`2️⃣ Charizard's Height: ${charizard.height} dm`);

//   // 3. Fetch and log the weight of Bulbasaur
//   const bulbasaur = await fetchPokemon("bulbasaur");
//   if (bulbasaur) console.log(`3️⃣ Bulbasaur's Weight: ${bulbasaur.weight} hg`);

//   // 4. Fetch and display the base experience of Snorlax
//   const snorlax = await fetchPokemon("snorlax");
//   if (snorlax)
//     console.log(`4️⃣ Snorlax's Base Experience: ${snorlax.base_experience}`);

//   // 5. Fetch and log the Pokémon ID of Eevee
//   const eevee = await fetchPokemon("eevee");
//   if (eevee) console.log(`5️⃣ Eevee's ID: ${eevee.id}`);

//   // 6. Fetch and display the front sprite (image) of Gengar
//   const gengar = await fetchPokemon("gengar");
//   if (gengar)
//     console.log(`6️⃣ Gengar's Sprite: ${gengar.sprites.front_default}`);

//   // 7. Fetch and log all abilities of Jigglypuff
//   const jigglypuff = await fetchPokemon("jigglypuff");
//   if (jigglypuff)
//     console.log(
//       `7️⃣ Jigglypuff's Abilities: ${jigglypuff.abilities
//         .map((a) => a.ability.name)
//         .join(", ")}`
//     );

//   // 8. Fetch and display the types of Dragonite
//   const dragonite = await fetchPokemon("dragonite");
//   if (dragonite)
//     console.log(
//       `8️⃣ Dragonite's Types: ${dragonite.types
//         .map((t) => t.type.name)
//         .join(", ")}`
//     );

//   // 9. Fetch and log the first move listed for Mewtwo
//   const mewtwo = await fetchPokemon("mewtwo");
//   if (mewtwo)
//     console.log(`9️⃣ Mewtwo's First Move: ${mewtwo.moves[0].move.name}`);

//   // 10. Fetch and display the evolution chain ID of Charmander (Evolution requires another API call)
//   const charmander = await fetchPokemon("charmander");
//   if (charmander)
//     console.log(`🔟 Charmander's Evolution Chain ID: ${charmander.id}`);
// }

// // Run the function
// basicGetRequests();
