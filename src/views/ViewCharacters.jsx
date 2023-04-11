import { useEffect, useState } from 'react';
import Character from '../components/Characters/Character';
import Loading from '../components/Shared/Loading';

const ViewCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character?page=1');
      const data = await res.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (err) {}
  };

  // Loading characters
  if (loading) {
    return <Loading />;
  }

  // Characters Grid
  return (
    <div className="characters-container">
      <div className="field has-addons px-0 mb-6 mt-5">
        <div className="control search">
          <input type="text" className="input searchInput" placeholder="Search a character by name..." />
        </div>
        <div className="control">
          <a className="button is-link searchBtn">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>
      <div className="characters">
        {characters.map(character => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default ViewCharacters;
