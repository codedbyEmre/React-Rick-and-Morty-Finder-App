import { useEffect, useState } from 'react';
import Episode from '../components/Episodes/Episode';
import Loading from '../components/Shared/Loading';

const ViewEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEpisodes();
  }, [page]);

  const getEpisodes = async () => {
    setLoading(true);
    try {
      let apiUrl = `https://rickandmortyapi.com/api/episode/?page=${page}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setEpisodes(data.results);
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

  // Loading episodes
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="episodes-main mt-2">
      {/* Episodes grid */}
      <div className="episode-main">
        {episodes.map(episode => (
          <Episode episode={episode} key={episode.id} />
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
            Episodes: <b className="mr-1">{info.count}</b>
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

export default ViewEpisodes;
