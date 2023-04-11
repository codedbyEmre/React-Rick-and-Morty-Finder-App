import { Link } from 'react-router-dom';

const Character = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`} className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={character.image} alt={character.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 mb-4">{character.name}</p>
            <p className="subtitle is-6 my-2 has-text-grey">
              Character Id: <span className="has-text-dark">{character.id}</span>
            </p>
            <p className="subtitle is-6 mb-2 has-text-grey">
              Species: <span className="has-text-dark">{character.species}</span>
            </p>
            <p className="subtitle is-6 mb-0 has-text-grey">
              Status: <span className="has-text-dark">{character.status}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Character;
