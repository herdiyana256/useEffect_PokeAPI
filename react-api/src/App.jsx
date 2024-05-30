// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from "react";
import PokeList from "./components/PokeList";
import PokeDetail from "./components/PokeDetail";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonName, setSelectedPokemonName] = useState("");
  const [pokemonDetail, setPokemonDetail] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!selectedPokemonName) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemonDetail(data))
      .catch((err) => console.log(err));
  }, [selectedPokemonName]);

  const clear = () => {
    setSelectedPokemonName("");
    setPokemonDetail();
  };

  return (
    <div style={styles.container}>
      <h2>PokeAPI</h2>
      <PokeList
        pokemonList={pokemonList}
        setSelectedPokemonName={setSelectedPokemonName}
      />
      {pokemonDetail && (
        <div>
          <h2>Pokemon Detail</h2>
          <PokeDetail pokemonDetail={pokemonDetail} />
          <button style={styles.button} onClick={() => clear()}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    padding: "80px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "32px",
  },
};

export default App;
