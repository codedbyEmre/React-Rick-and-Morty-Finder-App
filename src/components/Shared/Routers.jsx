import { Routes, Route } from 'react-router-dom';
import ViewCharacters from './../../views/ViewCharacters';
import CharacterDetails from '../Characters/CharacterDetails';
import ViewEpisodes from './../../views/ViewEpisodes';
import ViewLocations from './../../views/ViewLocations';
import ViewPageNotFound from './../../views/ViewPageNotFound';
import EpisodeDetail from '../Episodes/EpisodeDetail';
import LocationDetails from '../Locations/LocationDetails';

const Routers = () => {
  return (
    <Routes>
      {/* Character routes */}
      <Route index element={<ViewCharacters />} />
      <Route path="/character/:id" element={<CharacterDetails />} />

      {/* Episode routes */}
      <Route path="episodes" element={<ViewEpisodes />} />
      <Route path="/episode/:id" element={<EpisodeDetail />} />

      {/* Locations routes */}
      <Route path="locations" element={<ViewLocations />} />
      <Route path="/location/:id" element={<LocationDetails />} />

      {/* Page not found route */}
      <Route path="*" element={<ViewPageNotFound />} />
    </Routes>
  );
};

export default Routers;
