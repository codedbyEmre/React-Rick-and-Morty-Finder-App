import { Link } from 'react-router-dom';

const Location = ({ location }) => {
  return (
    <Link to={`/location/${location.id}`} className="card">
      <header className="card-header">
        <p className="card-header-title">{location.name}</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-location"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="subtitle is-6 my-2 has-text-grey">
            Location Id: <span className="has-text-dark">{location.id}</span>
          </p>
          <p className="subtitle is-6 my-2 has-text-grey">
            Dimension: <span className="has-text-dark">{location.dimension}</span>
          </p>
          <p className="subtitle is-6 my-2 has-text-grey">
            Type: <span className="has-text-dark">{location.type}</span>
          </p>
          <p className="subtitle is-6 my-2 has-text-grey">
            Created Date: <span className="has-text-dark">{location.created.slice(0, 10)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Location;
