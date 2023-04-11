import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Routers from './components/Shared/Routers';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="container is-max-desktop py-4 main">
          <Routers />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
