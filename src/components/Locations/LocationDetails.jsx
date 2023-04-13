import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import BackButton from '../Shared/BackButton';
import Character from './../Characters/Character';

const LocationDetails = () => {
  const { id } = useParams();

  const [locationDetails, setLocationDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getLocationDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
      const data = await res.json();
      setLocationDetails(data);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    getLocationDetails();
  }, []);

  // Loading location details
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
                        <i className="fas fa-location mr-3"></i>
                        {locationDetails.name}
                      </h2>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Location Id: <span className="has-text-dark">{locationDetails.id}</span>
                      </p>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Dimension: <span className="has-text-dark">{locationDetails.dimension}</span>
                      </p>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Type: <span className="has-text-dark">{locationDetails.type}</span>
                      </p>
                      <p className="is-size-6 mb-2 has-text-grey">
                        Created Date: <span className="has-text-dark">{locationDetails.created?.slice(0, 10)}</span>
                      </p>
                    </div>
                    {/* Characters grid */}
                    {/* <div className="characters">
                      {locationDetails.residents.map(resident => (
                        <Character key={resident} />
                      ))}
                    </div> */}
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

export default LocationDetails;
