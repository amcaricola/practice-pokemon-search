const peticion = async () => {
  try {
    const peticion = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const respuesta = await peticion.json();

    console.log(respuesta);
  } catch (err) {}
};

// peticion();
