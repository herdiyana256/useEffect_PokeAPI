//Kita akan menggunakan PokeApi pada proyek ini dan mengembangkan aplikasi simpel seperti di bawah.

import React from 'react';

const PokeList = ({ pokemonList, setSelectedPokemonName }) => {
  const style = {
    gridContent: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 16,
    },
    card: {
      padding: "16px 8px",
      backgroundColor: "aquamarine",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <div style={style.gridContent}>
      {pokemonList.map((item) => (
        <div
          key={item.name}
          style={style.card}
          onClick={() => setSelectedPokemonName(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default PokeList;
