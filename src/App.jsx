import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recommend from './pages/Recommend';
import Explore from './pages/Explore';
import GemDetail from './pages/GemDetail';
import Favourites from './pages/Favourites';
import { FavouritesProvider } from './context/FavouritesContext';

function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/recommend"    element={<Recommend />} />
          <Route path="/explore"      element={<Explore />} />
          <Route path="/gem/:id"      element={<GemDetail />} />
          <Route path="/favourites"   element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </FavouritesProvider>
  );
}

export default App;
