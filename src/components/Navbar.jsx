import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import './Navbar.css';

export default function Navbar() {
  const { favourites } = useFavourites();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-gem">💎</span>
          <span className="navbar__logo-text">GemGuide</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/"           end   onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/recommend"        onClick={() => setMenuOpen(false)}>Get Recommendation</NavLink>
          <NavLink to="/explore"          onClick={() => setMenuOpen(false)}>Explore</NavLink>
          <NavLink to="/favourites"       onClick={() => setMenuOpen(false)}>
            Saved
            {favourites.length > 0 && (
              <span className="navbar__fav-count">{favourites.length}</span>
            )}
          </NavLink>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          id="navbar-burger"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
