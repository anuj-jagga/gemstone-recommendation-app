import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import './GemCard.css';

export default function GemCard({ gem, rank }) {
  const { toggle, isFav } = useFavourites();
  const fav = isFav(gem.id);

  return (
    <article className="gem-card animate-fade-in" style={{ animationDelay: `${(rank || 0) * 0.07}s` }}>
      {rank !== undefined && rank < 3 && (
        <div className="gem-card__rank">#{rank + 1} Pick</div>
      )}

      <div
        className="gem-card__img-wrap"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${gem.color}88 0%, ${gem.color}22 50%, #0d0d1a 100%)`,
        }}
      >
        {/* Shimmer orbs */}
        <div className="gem-card__orb gem-card__orb--1" style={{ background: gem.color }} />
        <div className="gem-card__orb gem-card__orb--2" style={{ background: gem.color }} />

        {/* Big gem emoji centred */}
        <div className="gem-card__gem-display">
          <span className="gem-card__gem-emoji" style={{ filter: `drop-shadow(0 0 24px ${gem.color})` }}>
            {gem.emoji}
          </span>
          <span className="gem-card__color-name">{gem.colorName}</span>
        </div>

        <button
          className={`gem-card__fav-btn ${fav ? 'gem-card__fav-btn--active' : ''}`}
          onClick={e => { e.preventDefault(); toggle(gem.id); }}
          aria-label={fav ? 'Remove from saved' : 'Save gem'}
          id={`fav-${gem.id}`}
        >
          {fav ? '♥' : '♡'}
        </button>
      </div>

      <div className="gem-card__body">
        <div className="gem-card__tags">
          <span className="badge badge-purple">✨ {gem.chakra}</span>
          <span className="badge badge-gold">🪐 {gem.planet}</span>
        </div>

        <h3 className="gem-card__name">{gem.name}</h3>
        <p className="gem-card__origin">📍 {gem.origin}</p>

        <ul className="gem-card__benefits">
          {gem.benefits.slice(0, 2).map((b, i) => (
            <li key={i}>✦ {b}</li>
          ))}
        </ul>

        <div className="gem-card__footer">
          <div className="gem-card__price">
            <span className="gem-card__price-label">Price</span>
            <span className="gem-card__price-value">{gem.priceRange}</span>
          </div>
          <Link
            to={`/gem/${gem.id}`}
            className="btn btn-primary gem-card__cta"
            id={`gem-view-${gem.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
