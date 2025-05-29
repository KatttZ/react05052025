import { useEffect, useState } from "react";

async function FetchData() {
  return new Promise((resolve) => {
    resolve([
      { id: 1, name: "Mario", inStock: true },
      { id: 2, name: "Crash Bandicoot", inStock: true },
      { id: 3, name: "Mega Man", inStock: false },
      { id: 4, name: "Pokemon", inStock: true },
      { id: 5, name: "Sonic", inStock: false },
      { id: 6, name: "Rayman", inStock: true },
      { id: 7, name: "Donkey Kong", inStock: true },
    ]);
  });
}

export default function GameCards() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGamesInfo = async () => {
      const res = await FetchData();
      setGames(res);
    };
    getGamesInfo();
  }, []);

  const handleToggle = (id) => {
    setGames(
      games.map((game) => {
        if (game.id === id) {
          return { ...game, inStock: !game.inStock };
        } else {
          return game;
        }
      })
    );
  };

  return (
    <div>
      <h2>Game Cards</h2>
      {games.map((game) => {
        return (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            inStock={game.inStock}
            onToggle={() => handleToggle(game.id)}
          />
        );
      })}
    </div>
  );
}

export function GameCard({ id, name, inStock, onToggle }) {
  return (
    <div>
      <p>
        {name} - {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button>Edit</button>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}
