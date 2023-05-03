import { useEffect, useState } from 'react';
import Location from '../components/Locations/Location';
import Loading from '../components/Shared/Loading';

const ViewLocations = () => {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocations();
  }, [page]);

  const getLocations = async () => {
    setLoading(true);
    try {
      let apiUrl = `https://rickandmortyapi.com/api/location/?page=${page}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setLocations(data.results);
      setInfo(data.info);
      setLoading(false);
    } catch (err) {}
  };

  const changePage = type => {
    if (type === 'prev') {
      setPage(page - 1);
    } else if (type === 'next') {
      setPage(page + 1);
    }
  };

  // Loading locations
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="locations mt-2">
      {/* Locations grid */}
      <div className="location">
        {locations.map(location => (
          <Location location={location} key={location.id} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination is-justify-content-between mt-6 mb-3 px-1">
        <div className="pagination-buttons">
          <button
            onClick={() => changePage('prev')}
            disabled={page === 1 ?? true}
            className="button is-link"
            aria-label="previous button"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Prev
          </button>
          <button
            onClick={() => changePage('next')}
            disabled={page === info.pages ?? true}
            className="button is-link ml-3"
            aria-label="next button"
          >
            Next
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
        <div className="pagination-stats is-size-5">
          <span className="mr-3">
            Locations: <b className="mr-1">{info.count}</b>
          </span>
          <span>
            Page
            <b className="ml-1">
              {page}/{info.pages}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewLocations;
