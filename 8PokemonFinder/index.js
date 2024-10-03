const input = document.getElementById("search");
const button = document.getElementById("submit");
const nameF = document.getElementById("pokemonName");
const iconF = document.getElementById("pokemonIcon");
const shnyF = document.getElementById("pokemonShny");
const typeF = document.getElementById("type");
const heightF = document.getElementById("height");
const weightF = document.getElementById("weight");
const hpF = document.getElementById("hp");
const attackF = document.getElementById("attack");
const specialAttackF = document.getElementById("specialAttack");
const defenseF = document.getElementById("defense");
const specialDefenseF = document.getElementById("specialDefense");
const speedF = document.getElementById("speed");
const abilitiesF = document.getElementById("ability");

button.onclick = searchPokemon;

function searchPokemon() {
    const pokemonName = input.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
        if (!response.ok){
            throw new Error("404: Pokemon not found");
        }
        return response.json();
    })
    .then((data) => {
        const pokemon = data;
        console.log(pokemon);
        const name = pokemon.name;
        const id = pokemon.id;
        const icon = pokemon.sprites.other["official-artwork"].front_default;
        const shny = pokemon.sprites.other["official-artwork"].front_shiny;
        const typeArray = pokemon.types.map((type) => type.type.name);
        const height = pokemon.height;
        const weight = pokemon.weight;
        const hp = pokemon.stats[0].base_stat;
        const attack = pokemon.stats[1].base_stat;
        const specialAttack = pokemon.stats[3].base_stat;
        const defense = pokemon.stats[2].base_stat;
        const specialDefense = pokemon.stats[4].base_stat;
        const speed = pokemon.stats[5].base_stat;
        const abilitiesArray = pokemon.abilities.map((ability) => ability.ability.name);
        nameF.textContent = `${name} (#${id.toString().padStart(4, '0')})`;
        iconF.src = icon;
        shnyF.src = shny;
        typeF.innerHTML = "";
        for (let i = 0; i < typeArray.length; i++){
            let element = document.createElement('li');
            let img = `<img src="TypeIcons/${typeArray[i]}.png" alt="${typeArray[i]}" class="typeIcon">`;
            let text = `<h3>${typeArray[i].charAt(0).toUpperCase() + typeArray[i].slice(1)}</h3>`;
            element.id = `type${i}`;
            element.classList.add("typeItem");
            element.classList.add(`${typeArray[i]}Type`);
            element.insertAdjacentHTML('beforeend', img);
            element.insertAdjacentHTML('beforeend', text);
            typeF.insertAdjacentElement('beforeend', element);
        }
        heightF.textContent = `Height: ${height / 10}`;
        weightF.textContent = `Weight: ${weight / 10}`;
        hpF.textContent = `HP: ${hp}`;
        attackF.textContent = `Attack: ${attack}`;
        specialAttackF.textContent = `Special Attack: ${specialAttack}`;
        defenseF.textContent = `Defense: ${defense}`;
        specialDefenseF.textContent = `Special Defense: ${specialDefense}`;
        speedF.textContent = `Speed: ${speed}`;
        abilitiesF.innerHTML = "";
        for (let i = 0; i < abilitiesArray.length; i++){
            let element = document.createElement('li');
            element.textContent = abilitiesArray[i].charAt(0).toUpperCase() + abilitiesArray[i].slice(1);
            element.id = `ability${i}`;
            element.classList.add("ability");
            abilitiesF.insertAdjacentElement('beforeend', element);
        }
    }).catch((error) => console.error(error));
}