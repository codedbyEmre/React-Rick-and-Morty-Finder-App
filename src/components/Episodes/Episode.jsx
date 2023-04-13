import { Link } from 'react-router-dom';

const Episode = ({ episode }) => {
  return (
    <Link to={`/episode/${episode.id}`} className="card">
      <header className="card-header">
        <p className="card-header-title">{episode.name}</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa-solid fa-tv"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="subtitle is-6 my-2 has-text-grey">
            Episode Id: <span className="has-text-dark">{episode.id}</span>
          </p>
          <p className="subtitle is-6 my-2 has-text-grey">
            Episode No: <span className="has-text-dark">{episode.episode}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Episode;
