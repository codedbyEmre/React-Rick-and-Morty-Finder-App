import { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import BackButton from '../Shared/BackButton';

const EpisodeDetail = () => {
  const { id } = useParams();

  const [episodeDetails, setEpisodeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  // formatted characters arr
  const characters = useMemo(() => {
    let characters = [];
    episodeDetails.characters?.forEach(ep => {
      const splittedCharacters = ep.split('/');
      characters.push(+splittedCharacters[splittedCharacters.length - 1]);
    });
    characters.sort((a, b) => a - b);
    return characters;
  }, [episodeDetails.characters]);

  const getEpisodeDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await res.json();
      setEpisodeDetails(data);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    getEpisodeDetails();
  }, []);

  // Loading character details
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <section className="section p-0 mt-3">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card is-flex-direction-column">
                <div className="is-flex card-inner">
                  <div className="card-content p-0">
                    <div className="content p-5 has-text-grey-light">
                      <h2>
                        <i className="fas fa-tv mr-3"></i>
                        {episodeDetails.name}
                      </h2>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Episode Id: <span className="has-text-dark">{episodeDetails.id}</span>
                      </p>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Episode No: <span className="has-text-dark">{episodeDetails.episode}</span>
                      </p>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Air Date: <span className="has-text-dark">{episodeDetails.air_date}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-5 mt-3 pb-3">
                  <p className="is-size-6 mb-2 has-text-grey">Appeared Character Id(s):</p>
                  <div className="characters-flex">
                    {characters.map(character => (
                      <Link to={`/character/${character}`} key={character} className="character-flex">
                        {character}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to where you are */}
        <BackButton />
      </section>
    </div>
  );
};

export default EpisodeDetail;
