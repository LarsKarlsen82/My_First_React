// Main.jsx
import React from 'react';
import { PageTitle } from '../PageTitle/PageTitle';
import { Greeting } from '../Greeting/Greeting';
import { ListComponent, ListItem } from '../ListItem/ListItem';

export const Main = () => {
  const names = ["Heinz", "Anders", "Tanja", "Indo", "Patrick", "Gunnar"];

  const favoriteFoods = ['Pizza', 'Svinekam', 'Chocolate Cake', 'Burger', 'Moskusokse'];
  const favoriteMovies = ['Terminator', 'The Shawshank Redemption', 'The Matrix', 'Forrest Gump', 'The Dark Knight'];

  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <PageTitle pagetitle="Velkommen til min side som er styret af props" />

      <div style={{ marginTop: '20px' }}>
        <h2>Personlige Hilsener:</h2>
        {names.map((name, index) => (
          <Greeting key={index} name={name} />
        ))}
      </div>

      <div className="list-container">
      <h1>Min Personlige Liste</h1>
      <ListComponent title="Mine Livretter" listItems={favoriteFoods} />
      <ListComponent title="Mine Favoritfilm" listItems={favoriteMovies} />
    </div>
    </main>
  );
};
