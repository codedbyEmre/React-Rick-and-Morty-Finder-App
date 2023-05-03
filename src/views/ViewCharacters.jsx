import { useEffect, useState } from 'react';
import Character from '../components/Characters/Character';
import Loading from '../components/Shared/Loading';
import NoItems from '../components/Shared/NoItems';

const ViewCharacters = () => {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCharacters();
  }, [page]);

  const handleSearch = async e => {
    if (e === undefined || e.keyCode === 13) {
      setPage(1);
      getCharacters();
    }
  };

  const getCharacters = async () => {
    setLoading(true);
    try {
      let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
      if (search) {
        apiUrl += `&name=${search}`;
      }
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCharacters(data.results);
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

  // Loading characters
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="characters-container mb-3">
      {/* Search characters */}
      <div className="field has-addons px-0 mb-6 mt-5">
        <div className="control search">
          <input
            onChange={e => setSearch(e.target.value)}
            onKeyUp={handleSearch}
            value={search}
            type="text"
            className="input searchInput"
            placeholder="Search a character by name..."
          />
        </div>
        <div className="control">
          <button onClick={() => handleSearch()} className="button is-link searchBtn" aria-label="search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {!characters || !characters.length ? (
        <NoItems text="No characters found" />
      ) : (
        <>
          {/* Characters grid */}
          <div className="characters">
            {characters.map(character => (
              <Character character={character} key={character.id} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination is-justify-content-between mt-6 px-1">
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
                Characters: <b className="mr-1">{info.count}</b>
              </span>
              <span>
                Page
                <b className="ml-1">
                  {page}/{info.pages}
                </b>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewCharacters;
