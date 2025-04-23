let currentPokemonIndex = 0;
let totalLoadedPokemons = 0; 
let maxPokemons = 40; 


function displayPokemons(pokemons) {
    let pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = ''; 
    pokemons.forEach((pokemon, index) => {
        let card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.onclick = () => openModal(index);
        card.style.backgroundColor = pokemon.backgroundColor;
        card.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <div class="card-content">
                <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                ${pokemon.types.map(type => `<span class="type-badge ${type}">${type}</span>`).join('')}
            </div>`;pokemonContainer.appendChild(card);});
    }
    
    function openModal(index) {
    currentPokemonIndex = index;
    let pokemon = staticPokemons[currentPokemonIndex];
    document.getElementById('pokemon-name').textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById('pokemon-image').src = pokemon.sprites.front_default;
    document.getElementById('hp-bar').style.width = `${pokemon.stats[0].base_stat}%`;
    document.getElementById('attack-bar').style.width = `${pokemon.stats[1].base_stat}%`;
    document.getElementById('defense-bar').style.width = `${pokemon.stats[2].base_stat}%`;
    document.getElementById('special-attack-bar').style.width = `${pokemon.stats[3].base_stat}%`;
    document.getElementById('special-defense-bar').style.width = `${pokemon.stats[4].base_stat}%`;
    document.getElementById('speed-bar').style.width = `${pokemon.stats[5].base_stat}%`;
    
    
    
    let buttonGroup = document.getElementById('button-group');
    buttonGroup.innerHTML = `
        <button onclick="showInfo('X')">Pokédex data</button>
        <button onclick="showInfo('Y')">Training </button>
        <button onclick="showInfo('Z')">Breeding </button>`;
    
    document.getElementById('pokemon-modal').style.display = 'flex';
    }
    
    function closeModal() {
    document.getElementById('pokemon-modal').style.display = 'none';
    }
    
    function navigatePokemon(direction) {
    currentPokemonIndex += direction;
    if (currentPokemonIndex < 0) {
        currentPokemonIndex = staticPokemons.length - 1;
    } else if (currentPokemonIndex >= staticPokemons.length) {
        currentPokemonIndex = 0;
    }
    openModal(currentPokemonIndex);
    }
    
    function showInfo(buttonType) {
    let pokemon = staticPokemons[currentPokemonIndex];
    let infoContent = document.getElementById('info-content');
    infoContent.innerHTML = `<p>${pokemon.buttonInfos[buttonType]}</p>`;
    document.getElementById('info-modal').style.display = 'flex';
    }
    
    
    function closeInfoModal() {
    document.getElementById('info-modal').style.display = 'none';
    }
    
let staticPokemons = [
{
    id:'1',
    name: 'bulbasaur',
    types: ['grass', 'poison'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    stats: [
        { base_stat: 45 }, 
        { base_stat: 49 }, 
        { base_stat: 49 }, 
        { base_stat: 65 }, 
        { base_stat: 65 }, 
        { base_stat: 45 }  
    ],
    buttonInfos: {
        X: `<table>Pokédex data<br>
        <ul><li>National №	0001</li>
        <li>Type	Grass Poison</li>
        <li>Species	Seed Pokémon</li>
        <li>Height	0.7 m (2′04″)</li>
        <li>Weight	6.9 kg (15.2 lbs)</li>
        <li>Abilities	1. Overgrow</li>
        <li>Chlorophyll (hidden ability)</li>
        <li>Local №	0001 (Red/Blue/Yellow)</li>
        <li>0226 (Gold/Silver/Crystal)</li>
        <li>0001 (FireRed/LeafGreen)</li>
        <li>0231 (HeartGold/SoulSilver)</li>
        <li>0080 (X/Y — Central Kalos)</li>
        <li>0001 (Let's Go Pikachu/Let's Go Eevee)</li>
        <li>0068 (The Isle of Armor)</li>
        <li>0164 (The Indigo Disk)
        <li>Bulbasaur hat eine spezielle Attacke: Samenbombe.</li></ul></table>`,

        Y: `<table>Training <br>
        <ul><li>EV yield	1 Sp. Atk</li>
        <li>Catch rate	45 (5.9% with PokéBall, full HP)</li>
        <li>Base Friendship	50 (normal)</li>
        <li>Base Exp.	64</li>
        <li>Growth Rate	Medium Slow</li></ul></table>`,
        Z: `<table>Breeding <br>
        <li>Egg Groups	Grass, Monster
        <li>Gender	87.5% male, 12.5% female
        <li>Egg cycles	20 (4,884–5,140 steps)Bulbasaur liebt sonnige Plätze</li></ul></table>`,
        
    },
    backgroundColor: '#78C850'
},
{

    id:'2',
    name: 'charmander',
    types: ['fire'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
    stats: [
        { base_stat: 39 },
        { base_stat: 52 }, 
        { base_stat: 43 }, 
        { base_stat: 60 }, 
        { base_stat: 50 }, 
        { base_stat: 65 }  
    ],
    buttonInfos: {
        X: `<table>Pokedex Data <br>
        <ul><li> National №	0004
        <li> Type	Fire</li>
        <li>Species	Lizard Pokémon</li>
        <li>Height	0.6 m (2′00″)</li>
        <li>Weight	8.5 kg (18.7 lbs)</li>
        <li>Abilities	1. Blaze</li>
        <li>Solar Power (hidden ability)</li>
        <li>Local №	0004 (Red/Blue/Yellow)</li>
        <li>0229 (Gold/Silver/Crystal)</li>
        <li>0004 (FireRed/LeafGreen)</li>
        <li>0234 (HeartGold/SoulSilver)</li>
        <li>0083 (X/Y — Central Kalos)</li>
        <li>0004 (Let's Go Pikachu/Let's Go Eevee)</li>
        <li>0378 (Sword/Shield)
        <li>0167 (The Indigo Disk)</li>
        <li>"Charmander entwickelt sich zu Charmeleon."
        <li>"Charmander lebt gerne in heißen Gegenden."</li> 
        <li>"Charmander hat eine Flammen-Typ Fähigkeit."</li>
        <li>"Charmander kann Feuersturm einsetzen."</li></ul></table>`,
        Y: `<table>Training <br>
        <ul><li>EV yield	1 Speed</li>
        <li>Catch rate	45 (5.9% with PokéBall, full HP)</li>
        <li>Base Friendship	50 (normal)</li>
        <li>Base Exp.	62</li>
        <li>Growth Rate	Medium Slow
       </li></ul></table>`,
        Z: `<table>Breeding <br>
        <ul><li>Egg Groups	Dragon, Monster</li>
        <li>Gender	87.5% male, 12.5% female</li>
        <li>Egg cycles	20 (4,884–5,140 steps)
        </li></ul></table>`,
        
    },
    backgroundColor: '#F08030'
},
{
    id:'3',
    name: 'squirtle',
    types: ['water'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' },

    stats: [
        { base_stat: 44 }, 
        { base_stat: 48 }, 
        { base_stat: 65 }, 
        { base_stat: 50 }, 
        { base_stat: 64 }, 
        { base_stat: 43 }  
    ],
    buttonInfos: {
        X: `<table>Pokédex data<br>
        <li>National №	0007</li>
        <li>Type	Water</li>
        <li>Species	Tiny Turtle Pokémon</li>
        <li>Height	0.5 m (1′08″)</li>
        <li>Weight	9.0 kg (19.8 lbs)</li>
        <li>Abilities	1. Torrent</li>
        <li>Rain Dish (hidden ability)</li>
        <li>Local №	0007 (Red/Blue/Yellow)</li>
        <li>0232 (Gold/Silver/Crystal)</li>
        <li>0007 (FireRed/LeafGreen)</li>
        <li>0237 (HeartGold/SoulSilver)</li>
        <li>0086 (X/Y — Central Kalos)</li>
        <li>0007 (Let's Go Pikachu/Let's Go Eevee)</li>
        <li>0071 (The Isle of Armor)</li>
        <li>0170 (The Indigo Disk)</li>
        <li>"Squirtle kann Aquaknarre einsetzen."</li>
        <li>"Squirtle entwickelt sich zu Wartortle."</li>
        <li>"Squirtle hat eine Wasser-Typ Fähigkeit."</li>
        <li>"Squirtle schwimmt gerne in klaren Seen."</li></ul></table>`,
        
        Y: `<table>Training<br>
        <ul><li>EV yield	1 Defense</li>
        <li>Catch rate	45 (5.9% with PokéBall, full HP)</li>
        <li>Base Friendship	50 (normal)</li>
        <li>Base Exp.	63</li>
        <li>Growth Rate	Medium Slow</li></ul></table>`,
        Z:`<table>Breeding<li>
        <li>Egg Groups	Monster, Water 1</li>
        <li>Gender	87.5% male, 12.5% female</li>
        <li>Egg cycles	20 (4,884–5,140 steps)</li></ul></table>` ,
        
    },
    backgroundColor: '#6890F0'
},
{
    id:'4',
    name: 'pikachu',
    types: ['electric'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' },
    stats: [
        { base_stat: 35 }, 
        { base_stat: 55 }, 
        { base_stat: 40 }, 
        { base_stat: 50 }, 
        { base_stat: 50 }, 
        { base_stat: 90 }  
    ],
    buttonInfos: {
        X: `<table>Pokédex data
        <ul><li>National №	0025</li>
        <li>Type	Electric</li>
        <li>Species	Mouse Pokémon</li>
        <li>Height	0.4 m (1′04″)</li>
        <li>Weight	6.0 kg (13.2 lbs)</li>
        <li>Abilities	1. Static</li>
        <li>Lightning Rod (hidden ability)</li>
        <li>Local №	0025 (Yellow/Red/Blue)</li>
        <li>0022 (Gold/Silver/Crystal)</li>
        <li>0156 (Ruby/Sapphire/Emerald)</li>
        <li>0025 (FireRed/LeafGreen)</li>
        <li>0104 (Diamond/Pearl)</li>
        <li>0104 (Platinum)</li>
        <li>0022 (HeartGold/SoulSilver)</li>
        <li>0036 (X/Y — Central Kalos)</li>
        <li>0163 (Omega Ruby/Alpha Sapphire)</li>
        <li>0025 (Sun/Moon — Alola dex)</li>
        <li>0032 (U.Sun/U.Moon — Alola dex)</li>
        <li>0025 (Let's Go Pikachu/Let's Go Eevee)</li>
        <li>0194 (Sword/Shield)</li>
        <li>0104 (Brilliant Diamond/Shining Pearl)</li>
        <li>0056 (Legends: Arceus)</li>
        <li>0074 (Scarlet/Violet)"Pikachu entwickelt sich zu Raichu.</li>
        <li>0085 (The Isle of Armor)</li>
        <li>0021 (The Teal Mask)"Pikachu kann Donnerblitz einsetzen."</li>
        <li>"Pikachu hat eine Elektro-Typ Fähigkeit."</li></ul></table>`,
        
        Y: `<table>Training<br>
        <ul><li>EV yield</li>
        <li>2 Speed</li>
        <li>Catch rate	190 (24.8% with PokéBall, full HP)</li>
        <li>Base Friendship	50 (normal)</li>
        <li>Base Exp.112</li>
        <li>Growth Rate	Medium Fast</li></ul></table>`,
        Z: `<table>Breeding
        Egg Groups	Fairy, Field
        Gender	50% male, 50% female
        Egg cycles	10 (2,314–2,570 steps)</table>`,
         
    },
    backgroundColor: '#F8D030'
},
{
    id:'5',
    name: 'jigglypuff',
    types: ['fairy', 'normal'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png' },
    stats: [
        { base_stat: 115 }, 
        { base_stat: 45 }, 
        { base_stat: 20 }, 
        { base_stat: 45 }, 
        { base_stat: 25 }, 
        { base_stat: 20 }  
    ],
    buttonInfos: {
        X: "Jigglypuff entwickelt sich zu Wigglytuff.",
        Y: "Jigglypuff hat eine Feen-Typ Fähigkeit.",
        Z: "Jigglypuff liebt es, zu singen.",
        W: "Jigglypuff kann Schlummerlied einsetzen."
    },
    backgroundColor: '#EE99AC'
},
{
    name: 'meowth',
    types: ['normal'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png' },
    stats: [
        { base_stat: 40 }, 
        { base_stat: 45 }, 
        { base_stat: 35 }, 
        { base_stat: 40 }, 
        { base_stat: 40 }, 
        { base_stat: 90 }  
    ],
    buttonInfos: {
        X: "Meowth entwickelt sich zu Persian.",
        Y: "Meowth hat eine Normal-Typ Fähigkeit.",
        Z: "Meowth liebt glänzende Gegenstände.",
        W: "Meowth kann Münzregen einsetzen."
    },
    backgroundColor: '#A8A878'
},

{
    name: 'Frigibax',
    types: ['dragon', 'Ice'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png' },
    stats: [
        { base_stat: 65 },
        { base_stat: 75 },
        { base_stat: 45 },
        { base_stat: 35 },
        { base_stat: 45 },
        { base_stat: 55 },

    ],
    buttonInfos: {
        X: "Frigibax entwickelt sich zu Arctibax.",
        Y: "Frigibax hat eine Dragon-Thermal-Exchange Fähigkeit.",
        Z: "Frigibax liebt es seine Feinde, mit Ice-Kristallen zu atakieren.",
        W: "Frigibax kann sich in einem Icebrocken umwandeln."
    },
    backgroundColor: '#F08030'
},
{
    name: 'Arctibax',
    types: ['dragon', 'Ice'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png' },
    stats: [
        { base_stat: 90 },
        { base_stat: 95 },
        { base_stat: 66 },
        { base_stat: 45 },
        { base_stat: 65 },
        { base_stat: 62 }
    ],
    buttonInfos: {
        X: "Arctibax entwickelt sich zu Baxcalibur.",
        Y: "Arctibax hat eine Dragon-Thermal-Exchange Fähigkeit, jedoch stärker als Frigibax.",
        Z: "Arctibax liebt glänzende Gegenstände.",
        W: "Arctibax kann Münzregen einsetzen."
    },
    backgroundColor: '#F08030'
},
{
    name: 'Baxcalibur',
    types: ['dragon', 'Ice'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png' },
    stats: [
        { base_stat: 115 },
        { base_stat: 145 },
        { base_stat: 92 },
        { base_stat: 75 },
        { base_stat: 86 },
        { base_stat: 87 }
    ],
    buttonInfos: {
        X: "Ist ein pseudolegendäres Pokemon.",
        Y: "Jigglypuff hat eine Feen-Typ Fähigkeit.",
        Z: "Jigglypuff liebt es, zu singen.",
        W: "Jigglypuff kann Schlummerlied einsetzen."
    },
    backgroundColor: '#F08030'
},
{
    name: 'Gimmighoul',
    types: ['ghost'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png' },
    stats: [
        { base_stat: 45 },
        { base_stat: 30 },
        { base_stat: 70 },
        { base_stat: 75 },
        { base_stat: 70 },
        { base_stat: 10 }
    ],
    buttonInfos: {
        X: `<table> Pokédex data <br>
        <ul> <li>National №	0999 </li> 
        <li>Type ghost  </li>
        <li>Species	Coin Chest Pokémon </li>
        <li>Height	0.3 m (1′00″) </li>
        <li>Weight	5.0 kg (11.0 lbs) </li>
        <li>Abilities	1. Rattled </li>
        <li>Local №	0391 (Scarlet/Violet). </li></ul> </table>

        `,
        Y: `<table>Training <br>
        <ul> <li>EV yield	1 Sp. Atk
        <li>Catch rate	45 (5.9% with PokéBall, full HP)</li>
        <li>Base Friendship	50 (normal)</li>
        <li>Base Exp.	60</li>
          <li>Growth Rate	Slow </li></ul> </table>`,
        Z: `<table> Breeding <br>
        <ul><li> Egg Groups	Undiscovered</li>
        <li>Gender	Genderless</li>
        <li>Egg cycles	50 (12,594–12,850 steps)</li></ul> </table>`,

    },
     backgroundColor: '#7d66b4'
},
{
    name: 'Gholdengo',
    types: ['steel', 'ghost'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png' },
    stats: [
        { base_stat: 87 },
        { base_stat: 60 },
        { base_stat: 95 },
        { base_stat: 133 },
        { base_stat: 91 },
        { base_stat: 84 }
    ],
    buttonInfos: {
        X: `
        <table>Pokédex data <br>
        <ul> <li>National №	1000</li>
        <li>Type	STEEL GHOST</li>
        <li>Species	Coin Entity Pokémon</li>
        <li>Height	1.2 m (3′11″)</li>
        <li>Weight	30.0 kg (66.1 lbs)</li>
        <li>Abilities	1. Good as Gold</li>
        <li>Local №	0392 (Scarlet/Violet)</li> </ul> </table>`,
        Y: `<.table>Training <br>
        <ul><li>EV yield	2 Sp. Atk</li>
        <li>Catch rate	45 (5.9% with PokéBall, full HP)</li>
        <li>Base Friendship	50 (normal)</li>
        <li>Base Exp.	275</li>
        <li>Growth Rate	Slow</li> </ul> </table>`,
        Z: `<table>Breeding <br>
        <ul><li>Egg Groups	Undiscovered</li>
        <li>Gender	Genderless</li>
        <li>Egg cycles	50 (12,594–12,850 steps)</li> </ul> </table>`,

    },
        backgroundColor: '#7d66b4'
}, {
    name: 'Wo-Chien',
    types: ['dark', 'grass'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png' },
    stats: [
        { base_stat: 85 },
        { base_stat: 85 },
        { base_stat: 100 },
        { base_stat: 95 },
        { base_stat: 135 },
        { base_stat: 70 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul><li>National №	1001</li>
<li>Type	DARK GRASS</li>
<li>Species	Ruinous Pokémon</li>
<li>Height	1.5 m (4′11″)</li>
<li>Weight	74.2 kg (163.6 lbs)</li>
<li>Abilities	1. Tablets of Ruin</li>
<li>ocal №	0393 (Scarlet/Violet)</li> </ul> </table>`,

        Y: `<table>Training <br>
<ul><li>EV yield	3 Sp. Def</li>
<li>Catch rate	6 (0.8% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	285</li>
<li>Growth Rate	Slow</li> </ul> </table>`,
        Z: `<table>Breeding <br>
</ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li> </ul> </table>`,

    },
    backgroundColor: '#78C850'
},
{
    name: 'Chien-Pao',
    types: ['dark', 'ice'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png' },
    stats: [
        { base_stat: 80 },
        { base_stat: 120 },
        { base_stat: 80 },
        { base_stat: 90 },
        { base_stat: 65 },
        { base_stat: 135 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul> <li>National №	1002</li>
<li>Type	DARK ICE</li>
<li>Species	Ruinous Pokémon</li>
<li>Height	1.9 m (6′03″)</li>
<li>Weight	152.2 kg (335.5 lbs)</li>
<li>Abilities	1. Sword of Ruin</li>
<li>Local №	0394 (Scarlet/Violet)</li> </ul> </table>`,
        Y: `<table>Training <br>
<ul><li>EV yield	3 Speed</li>
<li>Catch rate	6 (0.8% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	285</li>
<li>Growth Rate	Slow</li> </ul> </table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li> </ul> </table>`,

    }
},
{
    name: 'Ting-Lu',
    types: ['dark', 'ground'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png' },
    stats: [
        { base_stat: 155 },
        { base_stat: 110 },
        { base_stat: 125 },
        { base_stat: 55 },
        { base_stat: 80 },
        { base_stat: 45 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul> <li>National №	1003</li>
<li>Type	DARK GROUND</li>
<li>Species	Ruinous Pokémon</li>
<li>Height	2.7 m (8′10″)</li>
<li>Weight	699.7 kg (1542.6 lbs)</li>
<li>Abilities	1. Vessel of Ruin</li>
<li>Local №	0395 (Scarlet/Violet)</li> </ul> </table>`,
        Y: `<table>Training
<ul><li>EV yield	3 Defense</li>
<li>Catch rate	6 (0.8% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	285</li>
<li>Growth Rate	Slow</li> </ul> </table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li> </ul> </table>`,

    },
  
        backgroundColor: 'brown'

},
{
    name: 'Chi-Yu',
    types: ['dark', 'fire'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png' },
    stats: [
        { base_stat: 55 },
        { base_stat: 80 },
        { base_stat: 80 },
        { base_stat: 135 },
        { base_stat: 120 },
        { base_stat: 100 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br

<ul><li>National №	1004</li>
<li>Type	DARK FIRE</li>
<li>Species	Ruinous Pokémon</li>
<li>Height	0.4 m (1′04″)</li>
<li>Weight	4.9 kg (10.8 lbs)</li>
<li>Abilities	1. Beads of Ruin</li>
<li>Local №	0396 (Scarlet/Violet)</li></ul></table>`,
        Y: `<table>Training <br>
<ul><li>EV yield	3 Sp. Atk</li>
<li>Catch rate	6 (0.8% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	285</li>
<li>Growth Rate	Slow</li></ul></table>`,
        Z: `<table>Breeding
</ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li></ul></table>`,

    },
    backgroundColor: '#F08030'
},
   
{
    name: 'Roaring Moon',
    types: ['dragon', 'dark'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png' },
    stats: [
        { base_stat: 105 },
        { base_stat: 139 },
        { base_stat: 71 },
        { base_stat: 55 },
        { base_stat: 101 },
        { base_stat: 119 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul><li>National №	1005</li>
<li>Type	DRAGON DARK</li>
<li>Species	Paradox Pokémon</li>
<li>Height	2.0 m (6′07″)</li>
<li>Weight	380.0 kg (837.8 lbs)</li>
<li>Abilities	1. Protosynthesis</li>
<li>Local №	0397 (Scarlet/Violet)</li></ul> </table>
`,
        Y: `<table>Training <br>
<ul><li>EV yield	3 Attack</li>
<li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	295</li>
<li>Growth Rate	Slow</li></ul></table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li></ul></table>`,

    },
    backgroundColor: '#F08030'},
{
    name: 'Iron Valiant',
    types: ['fairy', 'fighting'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png' },
    stats: [
        { base_stat: 74 },
        { base_stat: 130 },
        { base_stat: 90 },
        { base_stat: 120 },
        { base_stat: 60 },
        { base_stat: 116 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul><li>National №	1006</li>
<li>Type	FAIRY FIGHTING</li>
<li>Species	Paradox Pokémon</li>
<li>Height	1.4 m (4′07″)</li>
<li>Weight	35.0 kg (77.2 lbs)</li>
<li>Abilities	1. Quark Drive</li>
<li>Local №	0398 (Scarlet/Violet)</li></ul></table>`,
        Y: `<table> Training <br>
<ul><li>EV yield	3 Attack</li>
<li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	295</li>
<li>Growth Rate	Slow</li></ul></table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li></ul></table>`,

    },
    backgroundColor: '#EE99AC'
},
{
    name: 'Koraidon',
    types: ['fighting', 'dragon'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png' },
    stats: [
        { base_stat: 100 },
        { base_stat: 135 },
        { base_stat: 115 },
        { base_stat: 85 },
        { base_stat: 100 },
        { base_stat: 135 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data<br>
<ul> <li>National №	1007</li>
<li>Type	FIGHTING DRAGON</li>
<li>Species	Paradox Pokémon</li>
<li>Height	2.5 m (8′02″)</li>
<li>Weight	303.0 kg (668.0 lbs)</li>
<li>Abilities	1. Orichalcum Pulse</li>
<li>Local №	0399 (Scarlet/Violet)</li></ul></table>
`,
        Y: `<table>Training <br>
<ul><li>EV yield	3 Attack</li>
<li>Catch rate	3 (0.4% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	335</li>
<li>Growth Rate	Slow</li></ul></table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li></ul></table>`,

    },
    backgroundColor: 'red'
},
{
    name: 'Miraidon',
    types: ['electric', 'dragon'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png' },
    stats: [
        { base_stat: 100 },
        { base_stat: 85 },
        { base_stat: 100 },
        { base_stat: 135 },
        { base_stat: 115 },
        { base_stat: 135 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul><li>National №	1008</li>
<li>Type	ELECTRIC DRAGON</li>
<li>Species	Paradox Pokémon</li>
<li>Height	3.5 m (11′06″)</li>
<li>Weight	240.0 kg (529.1 lbs)</li>
<li>Abilities	1. Hadron Engine</li>
<li>Local №	0400 (Scarlet/Violet)</li></ul></table>`,
        Y: `<table>Training <br>
<ul><li>EV yield	3 Sp. Atk</li>
<li>Catch rate	3 (0.4% with PokéBall, full HP)</li>
<li>Base Friendship	0 (lower than normal)</li>
<li>Base Exp.	335</li>
<li>Growth Rate	Slow</li></ul></table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	50 (12,594–12,850 steps)</li> </ul> </table>`,

    },
    backgroundColor: 'yellow'
},
{
    name: 'Walking Wake',
    types: ['water', 'dragon'],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png' },
    stats: [
        { base_stat: 99 },
        { base_stat: 83 },
        { base_stat: 91 },
        { base_stat: 125 },
        { base_stat: 83 },
        { base_stat: 109 }
    ],
    buttonInfos: {
        X: `<table>Pokédex data <br>
<ul><li>National №	1009</li>
<li>Type	WATER DRAGON</li>
<li>Species	Paradox Pokémon</li>
<li>Height	3.5 m (11′06″)</li>
<li>Weight	280.0 kg (617.3 lbs)</li>
<li>Abilities	1. Protosynthesis</li>
<li>Local №	0241 (The Indigo Disk)</li></ul></table>`,
        Y: `<table>Training <br>
<ul><li>EV yield	3 Sp. Atk</li>
<li>Catch rate	5 (0.7% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Slow</li></ul></table>`,
        Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	Genderless</li>
<li>Egg cycles	— </li></ul></table>`,

    },
    backgroundColor: 'blue'
}

];

document.getElementById('load-more').addEventListener('click', () => {
let additionalPokemons = [
  
    {
        name: 'Hydreigon',
        types: ['dark', 'dragon'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png' },
        stats: [
            { base_stat: 90 },
            { base_stat: 130 },
            { base_stat: 88 },
            { base_stat: 70 },
            { base_stat: 108 },
            { base_stat: 104 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br> 
                <ul><li>National №	0635</li>
                <li>Type	Dark Dragon</li>
                <li>Species	Brutal Pokémon</li>
                <li>Height	1.8 m (5′11″)</li>
                <li>Weight	160.0 kg (352.7 lbs)</li>
                <li>Abilities	1. Levitate</li>
                <li>Local №	0141 (Black/White)</li>
                <li>0275 (Black 2/White 2)</li>
                <li>0144 (X/Y — Mountain Kalos)</li>
                <li>0388 (Sword/Shield)</li>
                <li>0372 (Scarlet/Violet)</li>
                <li>0138 (The Crown Tundra)</li></ul></table>`,
            Y: `<table>Training <br>
                <ul><li>EV yield	3 Sp. Atk
                <li>Catch rate	45 (5.9% with PokéBall, full HP)
                <li>Base Friendship	35 (lower than normal)
                <li>Base Exp.	300
                <li>Growth Rate	Slow</li> </ul></table>`,
            Z: `<table>Breeding <br>
                <ul><li>Breeding
                <ul><li>Egg Groups	Dragon</li>
                <li>Gender	50% male, 50% female</li>
                <li>Egg cycles	40 (10,024–10,280 steps)</li> </ul></table>`,

        },
        backgroundColor: '#F08030'
    },
    {
        name: 'Iron Jugulis',
        types: ['dark', 'flying'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png' },
        stats: [
            { base_stat: 80 },
            { base_stat: 80 },
            { base_stat: 110 },
            { base_stat: 95 },
            { base_stat: 80 },
            { base_stat: 40 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data<br>
                <ul><li>National №	0993</li>
                <li>Type	Dark Flying</li>
                <li>Species	Paradox Pokémon</li>
                <li>Height	1.3 m (4′03″)</li>
                <li>Weight	111.0 kg (244.7 lbs)</li>
                <li>Abilities	1. Quark Drive</li>
                <li>Local №	0385 (Scarlet/Violet)</li> </ul></table>`,
            Y: `</table>Training <br>
                <ul><li> EV yield	3 Sp. Atk</li>
                <li>Catch rate	30 (3.9% with PokéBall, full HP)</li>
                <li>Base Friendship	0 (lower than normal)</li>
                <li>Base Exp.	285</li>
                <li>Growth Rate	Slow </li></ul></table>`,
            Z: `<table>Breeding <br>
                <ul><li>Egg Groups	Undiscovered
                <li>Gender	Genderless
                <li>Egg cycles	50 (12,594–12,850 steps</li></ul></table>`,

        },
        backgroundColor: 'magenta'
    },
    {
        name: 'Iron Moth',
        types: ['fire', 'poison'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png' },
        stats: [
            { base_stat: 40 },
            { base_stat: 45 },
            { base_stat: 45 },
            { base_stat: 74 },
            { base_stat: 54 },
            { base_stat: 50 }
        ],
        buttonInfos: {
            X: `<table>
            <ul><li>Pokédex data <br></li>
            <li>National №	0994</li>
            <li>Type	Fire Poison</li>
            <li>Species	Paradox Pokémon</li>
            <li>Height	1.2 m (3′11″)</li>
            <li>Weight	36.0 kg (79.4 lbs)</li>
            <li>Abilities	1. Quark Drive</li>
            <li>Local №	0386 (Scarlet/Violet)</li></ul></table>`,
            Y: `<table>Training<br>
            <ul><li>EV yield	3 Sp. Atk</li>
            <li>Catch rate	30 (3.9% with PokéBall, full HP)</li>
            <li>Base Friendship	0 (lower than normal)</li>
            <li>Base Exp.	285</li>
            <li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding <br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	50 (12,594–12,850 steps)/li></ul></table>`,

        },
       backgroundColor: '#F08030'
    },
    {
        name: 'Iron Thorns',
        types: ['rock', 'electric'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png' },
        stats: [
            { base_stat: 71 },
            { base_stat: 60 },
            { base_stat: 106 },
            { base_stat: 1212 },
            { base_stat: 80 },
            { base_stat: 70 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
            <ul><li>National №	0995</li>
            <li>Type Rock Electric</li>
            <li>Species	Paradox Pokémon</li>
            <li>Height	1.6 m (5′03″)</li>
            <li>Weight	303.0 kg (668.0 lbs)</li>
            <li>Abilities	1. Quark Drive</li>
            <li>Local №	0387 (Scarlet/Violet)</li></ul></table>`,
            Y: `<table>Training<br>
            <ul><li>
            <ul><li>EV yield	3 Attack</li>
            <li>Catch rate	30 (3.9% with PokéBall, full HP)</li>
            <li>Base Friendship	0 (lower than normal)</li>
            <li>Base Exp.	285</li>
            <li>Growth Rate	Slow</li></ul></table></li>`,
            Z: `<table>Breeding<br>
            <ul><li>
            <li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	50 (12,594–12,850 steps)</li></ul></table>`,

        },
        backgroundColor: 'rgb(38, 35, 35)'
    },

    {
        name: 'Iron Leaves',
        types: ['grass', 'psychic'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png' },
        stats: [
            { base_stat: 90 },
            { base_stat: 130 },
            { base_stat: 88 },
            { base_stat: 70 },
            { base_stat: 108 },
            { base_stat: 104 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
            <ul><li>National №	1010</li>
            <li>Type	GRASS PSYCHIC</li>
            <li>Species	Paradox Pokémon</li>
            <li>Height	1.5 m (4′11″)</li>
            <li>Weight	125.0 kg (275.6 lbs)</li>
            <li>Abilities	1. Quark Drive</li>
            <li>Local №	0242 (The Indigo Disk)</li>`,
            Y: `<table>Training <br>
            <ul><li>EV yield	3 Attack</li>
            <li>Catch rate	5 (0.7% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Slow</li> </ul></table>`,
            Z: `<table>Breeding <br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	—</li> </ul></table>`,

        },
        backgroundColor: '#78C850'
    },
    {
        name: 'Dipplin',
        types: ['grass', 'dragon'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png' },
        stats: [
            { base_stat: 80 },
            { base_stat: 80 },
            { base_stat: 110 },
            { base_stat: 95 },
            { base_stat: 80 },
            { base_stat: 40 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
            <ul><li>National №	1011</li>
            <li>Type	GRASS DRAGON</li>
            <li>Species	Candy Apple Pokémon</li>
            <li>Height	0.4 m (1′04″)</li>
            <li>Weight	4.4 kg (9.7 lbs)</li>
            <li>Abilities	1. Supersweet Syrup</li>
            <li>2. Gluttony</li>
            <li>Sticky Hold (hidden ability)</li>
            <li>Local №	0036 (The Teal Mask)</li> </ul></table>`,
            Y: `</table>Training <br>
            <ul><li>EV yield	2 Defense</li>
            <li>Catch rate	45 (5.9% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Erratic </li></ul></table>`,
            Z: `<table>Breeding <br>
            <ul><li>Egg Groups	Dragon, Grass </li>
            <li>Gender	50% male, 50% female</li>
            <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#78C850'
    },
    {
        name: 'Poltchageist',
        types: ['grass', 'ghost'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png' },
        stats: [
            { base_stat: 40 },
            { base_stat: 45 },
            { base_stat: 45 },
            { base_stat: 74 },
            { base_stat: 54 },
            { base_stat: 50 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
<li>National №	1012</li>
<li>Type	GRASS GHOST</li>
<li>Species	Matcha Pokémon</li>
<li>Height	0.1 m (0′04″)</li>
<li>Weight	1.1 kg (2.4 lbs)</li>
<li>Abilities	1. Hospitality</li>
<li>Heatproof (hidden ability)</li>
<li>Local №	0076 (The Teal Mask)</li></ul></table>`,
            Y: `<table>Training <br>
</ul><li>EV yield	1 Sp. Atk</li>
<li>Catch rate	120 (15.7% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Medium Fast</li></ul></table>`,
            Z: `<table>Breeding <br>
</ul><li>Egg Groups	Amorphous, Mineral</li>
<li>Gender	Genderless</li>
<li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: 'brown'
    },
    {
        name: 'Sinistcha',
        types: ['grass', 'ghost'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png' },
        stats: [
            { base_stat: 71 },
            { base_stat: 60 },
            { base_stat: 106 },
            { base_stat: 1212 },
            { base_stat: 80 },
            { base_stat: 70 }
        ],
        buttonInfos: {
            X: `
<table>Pokédex data <br>
<ul><li>National №	1013</li>
<li>Type	GRASS GHOST</li>
<li>Species	Matcha Pokémon</li>
<li>Height	0.2 m (0′08″)</li>
<li>Weight	2.2 kg (4.9 lbs)</li>
<li>Abilities	1. Hospitality</li>
<li>Heatproof (hidden ability)</li>
<li>Local №	0077 (The Teal Mask)</li></ul></table>`,
            Y: `<table>Training <br>
<ul><li>EV yield	2 Sp. Atk</li>
<li>Catch rate	60 (7.8% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Medium Fast </li></ul></table>`,
            Z: `<table>Breeding<br>
<ul><li>Egg Groups	Amorphous, Mineral</li>
<li>Gender	Genderless</li>
<li>Egg cycles	—</li></ul></table>`,

        },
          backgroundColor: '#7d66b4'
    },
    {
        name: 'Okidogi',
        types: ['poison', 'fighting'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png' },
        stats: [
            { base_stat: 88 },
            { base_stat: 128 },
            { base_stat: 115 },
            { base_stat: 58 },
            { base_stat: 86 },
            { base_stat: 80 }
        ],
        buttonInfos: {
            X: `
<table>Pokédex data<br>
<ul><li>National №	1014</li>
<li>Type	POISON FIGHTING</li>
<li>Species	Retainer Pokémon</li>
<li>Height	1.8 m (5′11″)</li>
<li>Weight	92.0 kg (202.8 lbs)</li>
<li>Abilities	1. Toxic Chain</li>
<li>Guard Dog (hidden ability)</li>
<li>Local №	0197 (The Teal Mask)</li></ul></table>`,
            Y: `<table>Training<br>
<li>EV yield	3 Attack</li>
<li>Catch rate	3 (0.4% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Slow </li></ul><table>`,
            Z: `<table>Breeding <br>
<li>Egg Groups	Undiscovered</li>
<li>Gender	100% male, 0% female</li>
<li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#A040A0'
    },
    {
        name: 'Munkidori',
        types: ['poison', 'psychic'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png' },
        stats: [
            { base_stat: 88 },
            { base_stat: 75 },
            { base_stat: 66 },
            { base_stat: 130 },
            { base_stat: 90 },
            { base_stat: 106 }
        ],
        buttonInfos: {
            X: `
<table>National №	1015<br>
<ul><li>Type	POISON PSYCHIC</li>
<li>Species	Retainer Pokémon</li>
<li>Height	1.0 m (3′03″)</li>
<li>Weight	12.2 kg (26.9 lbs)</li>
<li>Abilities	1. Toxic Chain</li>
<li>Frisk (hidden ability)</li>
<li>Local №	0198 (The Teal Mask)</li></ul></table>`,
            Y: `<table>Training <br>
<ul><li>EV yield	3 Sp. Atk</li>
<li>Catch rate	3 (0.4% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Slow</li></ul></table>`,
            Z: `Breeding
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	100% male, 0% female</li>
<li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: 'yellow'
    },
    {
        name: 'Fezandipiti',
        types: ['poison', 'fairy'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png' },
        stats: [
            { base_stat: 88 },
            { base_stat: 91 },
            { base_stat: 82 },
            { base_stat: 70 },
            { base_stat: 125 },
            { base_stat: 99 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data<br>
<ul><li>National №	1016</li>
<li>Type	POISON FAIRY</li>
<li>Species	Retainer Pokémon</li>
<li>Height	1.4 m (4′07″)</li>
<li>Weight	30.1 kg (66.4 lbs)</li>
<li>Abilities	1. Toxic Chain</li>
<li>Technician (hidden ability)</li>
<li>Local №	0199 (The Teal Mask)</li></ul></table>`,
            Y: `<table>Training <br>
<ul><li>EV yield	3 Sp. Def</li>
<li>Catch rate	3 (0.4% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	100% male, 0% female</li>
<li>Egg cycles	—</li></ul></table>`,

        },
       backgroundColor: '#EE99AC'
    },
    {
        name: 'Ogerpon',
        types: ['grass'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png' },
        stats: [
            { base_stat: 80 },
            { base_stat: 120 },
            { base_stat: 84 },
            { base_stat: 60 },
            { base_stat: 96 },
            { base_stat: 110 }
        ],
        buttonInfos: {
            X: `
<table>Pokédex data <br>
<ul><li> National №	1017</li>
<li>Type	GRASS</li>
<li>Species	Mask Pokémon</li>
<li>Height	1.2 m (3′11″)</li>
<li>Weight	39.8 kg (87.7 lbs)</li>
<li>Abilities	1. Defiant</li>
<li>Embody Aspect (hidden ability)</li>
<li>Local №	0200 (The Teal Mask)</li></ul></table>
`,
            Y: `<table>Training <br>
<ul><li>EV yield	3 Attack</li>
<li>Catch rate	5 (0.7% with PokéBall, full HP)</li>
<li>Base Friendship	—</li>
<li>Base Exp.	—</li>
<li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding <br>
<ul><li>Egg Groups	Undiscovered</li>
<li>Gender	0% male, 100% female</li>
<li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#78C850'
    },
    {
        name: 'Archaludon',
        types: ['steel', 'dragon'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png' },
        stats: [
            { base_stat: 90 },
            { base_stat: 105 },
            { base_stat: 130 },
            { base_stat: 125 },
            { base_stat: 65 },
            { base_stat: 85 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
                <ul><li>National №	1018</li>
                <li>Type	STEEL DRAGON</li>
                <li>Species	Alloy Pokémon</li>
                <li>Height	2.0 m (6′07″)</li>
                <li>Weight	60.0 kg (132.3 lbs)</li>
                <li>Abilities	1. Stamina</li>
                <li>2. Sturdy</li>
                <li>Stalwart (hidden ability)</li>
                <li>Local №	0162 (The Indigo Disk)</li>`,
            Y: `Training
                <ul><li>EV yield	3 Defense</li>
                <li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
                <li>Base Friendship	—</li>
                <li>Base Exp.	—</li>
                <li>Growth Rate	Medium Fast</li></ul></table>`,
            Z: `<table>Breeding <br>
                <ul><li>Egg Groups	Dragon, Mineral</li>
                <li>Gender	50% male, 50% female</li>
                <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#F08030'
    },
    {
        name: 'Hydrapple',
        types: ['grass', 'dragon'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png' },
        stats: [
            { base_stat: 106 },
            { base_stat: 80 },
            { base_stat: 110 },
            { base_stat: 120 },
            { base_stat: 80 },
            { base_stat: 44 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
                <ul><li>National №	1019</li>
                <li>Type	GRASS DRAGON</li>
                <li>Species	—</li>
                <li>Height	1.8 m (5′11″)</li>
                <li>Weight	93.0 kg (205.0 lbs)</li>
                <li>Abilities	1. Supersweet Syrup</li>
                <li>2. Regenerator</li>
                <li>Sticky Hold (hidden ability)</li>
                <li>Local №	0163 (The Indigo Disk)</li></ul></table>
                `,
            Y: `<table>Training <br>
                <ul><li>EV yield	3 Sp. Atk</li>
                <li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
                <li>Base Friendship	—</li>
                <li>Base Exp.	—</li>
                <li>Growth Rate	Erratic</li></ul></table>`,
            Z: `<table>Breeding<br>
                <ul><li>Egg Groups	Dragon, Grass</li>
                <li>Gender	50% male, 50% female</li>
                <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: 'green'
    },
    {
        name: 'Gouging Fire',
        types: ['fire', 'dragon'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png' },
        stats: [
            { base_stat: 105 },
            { base_stat: 115 },
            { base_stat: 121 },
            { base_stat: 65 },
            { base_stat: 93 },
            { base_stat: 91 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data <br>
                <ul><li>National №	1020</li>
                <li>Type	FIRE DRAGON</li>
                <li>Species	Paradox Pokémon</li>
                <li>Height	3.5 m (11′06″)</li>
                <li>Weight	590.0 kg (1300.7 lbs)</li>
                <li>Abilities	1. Protosynthesis</li>
                <li>Local №	0236 (The Indigo Disk)</li></ul></table>`,
            Y: `<table>Training <br>
                <ul><li>EV yield	3 Defense</li>
                <li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
                <li>Base Friendship	—</li>
                <li>Base Exp.	—</li>
                <li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding <br>
                <ul><li>Egg Groups	Undiscovered</li>
                <li>Gender	Genderless</li>
                <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#F08030'
    },
    {
        name: 'Raging Bolt',
        types: ['electric', 'dragon'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png' },
        stats: [
            { base_stat: 125 },
            { base_stat: 73 },
            { base_stat: 91 },
            { base_stat: 137 },
            { base_stat: 89 },
            { base_stat: 75 }
        ],
        buttonInfos: {
            X: `
            <table>Pokédex data <br>
            <ul><li>National №	1021</li>
            <li>Type	ELECTRIC DRAGON</li>
            <li>Species	Paradox Pokémon</li>
            <li>Height	5.2 m (17′01″)</li>
            <li>Weight	480.0 kg (1058.2 lbs)</li>
            <li>Abilities	1. Protosynthesis</li>
            <li>Local №	0237 (The Indigo Disk)</li></ul></table>`,
            Y: `<table>Training <br>
            <ul><li>EV yield	3 Sp. Atk</li>
            <li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding <br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#F8D030'
    },
    {
        name: 'Iron Boulder',
        types: ['rock', 'physic'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png' },
        stats: [
            { base_stat: 90 },
            { base_stat: 120 },
            { base_stat: 80 },
            { base_stat: 68 },
            { base_stat: 108 },
            { base_stat: 124 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data<br>
            <ul><li>National №	1022</li>
            <li>Type	ROCK PSYCHIC</li>
            <li>Species	Paradox Pokémon</li>
            <li>Height	1.5 m (4′11″)</li>
            <li>Weight	162.5 kg (358.3 lbs)</li>
            <li>Abilities	1. Quark Drive</li>
            <li>Local №	0239 (The Indigo Disk)</li></ul></table>`,
            Y: `<table>Training <br>
            <ul><li>EV yield	3 Speed</li>
            <li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding<br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: 'rgb(38, 35, 35)'
    },
    {
        name: 'Iron Crown',
        types: ['steel', 'psychic'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png' },
        stats: [
            { base_stat: 90 },
            { base_stat: 72 },
            { base_stat: 100 },
            { base_stat: 122 },
            { base_stat: 108 },
            { base_stat: 98 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data<br>
            <ul><li>National №	1023</li>
            <li>Type	STEEL PSYCHIC</li>
            <li>Species	Paradox Pokémon</li>
            <li>Height	1.6 m (5′03″)</li>
            <li>Weight	156.0 kg (343.9 lbs)</li>
            <li>Abilities	1. Quark Drive</li>
            <li>Local №	0238 (The Indigo Disk)</li></ul></table>`,
            Y: `<table>Training<br>
            <ul><li>EV yield	3 Sp. Atk</li>
            <li>Catch rate	10 (1.3% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Slow</li>`,
            Z: `<table>Breeding<br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: 'yellow'
    },
    {
        name: 'Terapagos',
        types: ['normal'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png' },
        stats: [
            { base_stat: 90 },
            { base_stat: 65 },
            { base_stat: 85 },
            { base_stat: 65 },
            { base_stat: 85 },
            { base_stat: 60 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data<br>
            <ul><li>National №	1024</li>
            <li>Type	NORMAL</li>
            <li>Species	Tera Pokémon</li>
            <li>Height	0.2 m (0′08″)</li>
            <li>Weight	6.5 kg (14.3 lbs)</li>
            <li>Abilities	1. Tera Shift</li>
            <li>Local №	0240 (The Indigo Disk)</li></ul></table>`,
            Y: `<table>Training<br>
            <ul><li>EV yield	1 Defense</li>
            <li>Catch rate	255 (33.3% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding<br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	50% male, 50% female</li>
            <li>Egg cycles	—</li></ul></table>`,


        },
            backgroundColor: '#A8A878'
    },
    {
        name: 'Pecharunt',
        types: ['poison', 'ghost'],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png' },
        stats: [
            { base_stat: 88 },
            { base_stat: 160 },
            { base_stat: 88 },
            { base_stat: 88 },
            { base_stat: 88 },
            { base_stat: 88 }
        ],
        buttonInfos: {
            X: `<table>Pokédex data<br>
            <ul>National №	1025</li>
            <li>Type	POISON GHOST</li>
            <li>Species	Subjugation Pokémon</li>
            <li>Height	0.3 m (1′00″)</li>
            <li>Weight	0.3 kg (0.7 lbs)</li>
            <li>Abilities	1. Poison Puppetee</li>
            <li>Local №	0243 (The Indigo Disk)</li></ul></table>`,
            Y: `<table>Training <br>
            <ul><li>EV yield	3 Defense</li>
            <li>Catch rate	3 (0.4% with PokéBall, full HP)</li>
            <li>Base Friendship	—</li>
            <li>Base Exp.	—</li>
            <li>Growth Rate	Slow</li></ul></table>`,
            Z: `<table>Breeding<br>
            <ul><li>Egg Groups	Undiscovered</li>
            <li>Gender	Genderless</li>
            <li>Egg cycles	—</li></ul></table>`,

        },
        backgroundColor: '#A040A0'
    }
];


staticPokemons.push(...additionalPokemons);
displayPokemons(staticPokemons);
});

displayPokemons(staticPokemons);


document.getElementById('search-bar').addEventListener('input', function () {
let query = this.value.toLowerCase();
let filteredPokemons = staticPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query));
displayPokemons(filteredPokemons);
});

displayPokemons(staticPokemons);



document.getElementById('load-more').addEventListener('click', function() {
    // Verstecke den "Load More"-Button sofort nach dem Klick
    this.style.display = 'none';

    // Zeige den Lade-Spinnerr
    let spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex';
    
    setTimeout(function() {
        // Verstecke den Lade-Spinnerr
        spinner.style.display = 'none';
        
        // Lade neue Pokémon-Daten
        let newPokemons = loadNewPokemons();
        totalLoadedPokemons += newPokemons.length;
        
        // Wenn alle Pokémon geladen sind, "Load More"-Button verborgen halten
        if (totalLoadedPokemons >= maxPokemons) {
            document.getElementById('load-more').style.display = 'none'; 
        }
    }, 5000);
});



