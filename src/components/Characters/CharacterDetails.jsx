import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import BackButton from '../Shared/BackButton';

const CharacterDetails = () => {
  const { id } = useParams();

  const [characterDetails, setCharacterDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getCharacterDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacterDetails(data);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    getCharacterDetails();
  }, []);

  // Loading character details
  if (loading) {
    return <Loading />;
  }

  // Character details
  return (
    <section className="section p-0 mt-3">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card is-flex-direction-column">
              <div className="is-flex card-inner">
                <div className="card-image">
                  <figure className="image">
                    <img src={characterDetails.image} alt={characterDetails.name} />
                  </figure>
                </div>
                <div className="card-content p-0">
                  <div className="content p-5 has-text-grey-light">
                    <h2>
                      <i className="fas fa-person mr-2"></i>
                      {characterDetails.name}
                    </h2>
                    <p className="is-size-6 mb-2 has-text-grey">
                      Character Id: <span className="has-text-dark">{characterDetails.id}</span>
                    </p>
                    <p className="is-size-6 mb-2 has-text-grey">
                      Species: <span className="has-text-dark">{characterDetails.species}</span>
                    </p>
                    <p className="is-size-6 mb-2 has-text-grey">
                      Status: <span className="has-text-dark">{characterDetails.status}</span>
                    </p>
                    <p className="is-size-6 mb-2 has-text-grey">
                      Gender: <span className="has-text-dark">{characterDetails.gender}</span>
                    </p>
                    <p className="is-size-6 mb-2 has-text-grey">
                      Origin: <span className="has-text-dark">{characterDetails.origin?.name}</span>
                    </p>
                    <p className="is-size-6 mb-2 has-text-grey">
                      Created Date:
                      <span className="has-text-dark">{characterDetails.created?.slice(0, 10)}</span>
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
  );
};

export default CharacterDetails;
