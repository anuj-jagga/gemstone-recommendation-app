import { Link } from 'react-router-dom';
import gemstones from '../data/gemstones';
import { useFavourites } from '../context/FavouritesContext';
import GemCard from '../components/GemCard';
import './Favourites.css';

export default function Favourites() {
  const { favourites, toggle } = useFavourites();
  const savedGems = gemstones.filter(g => favourites.includes(g.id));

  return (
    <div className="favourites page-padding">
      <div className="container">
        <div className="favourites__header">
          <p className="section-eyebrow">✦ Your Collection</p>
          <h1 className="section-title">Saved Gemstones</h1>
          <div className="divider" />
        </div>

        {savedGems.length === 0 ? (
          <div className="favourites__empty glass">
            <span>🔮</span>
            <h2>Your collection is empty</h2>
            <p>Browse and save gemstones that resonate with you.</p>
            <div className="favourites__empty-ctas">
              <Link to="/recommend" className="btn btn-primary" id="fav-cta-recommend">
                ✨ Get a Recommendation
              </Link>
              <Link to="/explore" className="btn btn-secondary" id="fav-cta-explore">
                Explore All
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p className="favourites__meta">{savedGems.length} gem{savedGems.length !== 1 ? 's' : ''} saved</p>
            <div className="favourites__grid">
              {savedGems.map((gem, i) => (
                <GemCard key={gem.id} gem={gem} rank={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
