import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import BackButton from '../Shared/BackButton';

const EpisodeDetail = () => {
  const { id } = useParams();

  const [episodeDetails, setEpisodeDetails] = useState({});
  const [loading, setLoading] = useState(false);

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
