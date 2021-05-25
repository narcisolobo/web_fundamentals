// Object literal notation
var monster = {
  id: 1,
  name: "Bulbasaur",
  types: ["poison", "grass"]
};

// start with name of variable
// then a dot
// then the key that contains the value
// Dot Notation
console.log(monster.name);

console.log(monster['name'])

console.log(monster.types[1])

for (var i = 0; i < monster.types.length; i++) {
  console.log(monster.types[i])
}

var pokémon = [
  { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
  { "id": 5, "name": "Charmeleon", "types": ["fire"] },
  { "id": 9, "name": "Blastoise", "types": ["water"] },
  { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
  { "id": 23, "name": "Ekans", "types": ["poison"] },
  { "id": 24, "name": "Arbok", "types": ["poison"] },
  { "id": 25, "name": "Pikachu", "types": ["electric"] },
  { "id": 37, "name": "Vulpix", "types": ["fire"] },
  { "id": 52, "name": "Meowth", "types": ["normal"] },
  { "id": 63, "name": "Abra", "types": ["psychic"] },
  { "id": 67, "name": "Machamp", "types": ["fighting"] },
  { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
  { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
  { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
  { "id": 98, "name": "Krabby", "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
  { "id": 133, "name": "Eevee", "types": ["normal"] },
  { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id > 99) {
    console.log(pokémon[i].name);
  }
}

// console.log the pokémon objects whose id is evenly divisible by 3
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id % 3 == 0) {
    console.log(`Divisible by 3: ${pokémon[i].id}`);
  }
}

// console.log the pokémon objects that have more than one type
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].types.length > 1) {
    console.log(`More than one type: ${pokémon[i].types}`);
  }
}

// console.log the names of the pokémon whose only type is "poison"
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].types[0] == 'poison' && pokémon[i].types.length == 1) {
    console.log(`Only poison type: ${pokémon[i].types}`);
  }
}

// console.log the first type of all the pokémon whose second type is "flying"
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].types.length > 1) {
    if(pokémon[i].types[1] == 'flying') {
      console.log(`Second type flying, first type is: ${pokémon[i].types[0]}`)
    }
  }
}