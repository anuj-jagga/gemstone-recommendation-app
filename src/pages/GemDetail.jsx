import { useParams, Link, useNavigate } from 'react-router-dom';
import gemstones from '../data/gemstones';
import { useFavourites } from '../context/FavouritesContext';
import GemCard from '../components/GemCard';
import './GemDetail.css';

export default function GemDetail() {
  const { id }     = useParams();
  const navigate   = useNavigate();
  const { toggle, isFav } = useFavourites();

  const gem = gemstones.find(g => g.id === id);

  if (!gem) {
    return (
      <div className="detail-notfound page-padding container">
        <h1>Gem not found 🔮</h1>
        <Link to="/explore" className="btn btn-primary">← Back to Explore</Link>
      </div>
    );
  }

  const fav     = isFav(gem.id);
  const related = gemstones.filter(g => g.id !== gem.id && (g.planet === gem.planet || g.chakra === gem.chakra)).slice(0, 3);

  const rarityColors = {
    'Common':    '#27ae60',
    'Uncommon':  '#f39c12',
    'Rare':      '#9b72cf',
    'Very Rare': '#e74c3c',
  };

  return (
    <div className="gem-detail page-padding">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="gem-detail__breadcrumb">
          <button className="btn btn-ghost" onClick={() => navigate(-1)} id="detail-back">← Back</button>
          <span>/</span>
          <Link to="/explore">Explore</Link>
          <span>/</span>
          <span>{gem.name}</span>
        </nav>

        {/* Hero split */}
        <div className="gem-detail__hero glass">
          <div className="gem-detail__img-col">
            <div
              className="gem-detail__img-wrap"
              style={{
                background: `radial-gradient(ellipse at 35% 40%, ${gem.color}99 0%, ${gem.color}33 50%, #0d0d1a 100%)`,
              }}
            >
              <div className="gem-detail__orb gem-detail__orb--1" style={{ background: gem.color }} />
              <div className="gem-detail__orb gem-detail__orb--2" style={{ background: gem.color }} />
              <div className="gem-detail__gem-display">
                <span
                  className="gem-detail__gem-emoji"
                  style={{ filter: `drop-shadow(0 0 40px ${gem.color})` }}
                >
                  {gem.emoji}
                </span>
                <span className="gem-detail__color-name">{gem.colorName}</span>
              </div>
            </div>
          </div>

          <div className="gem-detail__info-col">
            <div className="gem-detail__badges">
              <span className="badge badge-purple">✨ {gem.chakra} Chakra</span>
              <span className="badge badge-gold">🪐 {gem.planet}</span>
              <span className="badge badge-teal">🌊 {gem.element}</span>
              <span
                className="badge"
                style={{ background: `${rarityColors[gem.rarity]}22`, color: rarityColors[gem.rarity], border: `1px solid ${rarityColors[gem.rarity]}44` }}
              >
                💎 {gem.rarity}
              </span>
            </div>

            <div className="gem-detail__title-row">
              <h1 className="gem-detail__name">
                {gem.emoji} {gem.name}
              </h1>
              <button
                id={`detail-fav-${gem.id}`}
                className={`gem-detail__fav ${fav ? 'gem-detail__fav--active' : ''}`}
                onClick={() => toggle(gem.id)}
                aria-label={fav ? 'Remove from saved' : 'Save gem'}
              >
                {fav ? '♥ Saved' : '♡ Save'}
              </button>
            </div>

            <p className="gem-detail__desc">{gem.description}</p>

            <div className="gem-detail__stat-grid">
              <div className="gem-detail__stat">
                <span>Hardness</span>
                <strong>{gem.hardness} Mohs</strong>
              </div>
              <div className="gem-detail__stat">
                <span>Category</span>
                <strong>{gem.category}</strong>
              </div>
              <div className="gem-detail__stat">
                <span>Price Range</span>
                <strong className="price-highlight">{gem.priceRange}</strong>
              </div>
              <div className="gem-detail__stat">
                <span>Origin</span>
                <strong>{gem.origin}</strong>
              </div>
            </div>

            <div className="gem-detail__zodiacs">
              <p className="gem-detail__label">Compatible Zodiac Signs</p>
              <div className="gem-detail__zodiac-list">
                {gem.zodiac.map(z => (
                  <Link key={z} to={`/recommend?zodiac=${z}`} className="badge badge-gold gem-detail__zodiac-badge" id={`zodiac-link-${z.toLowerCase()}`}>
                    {z}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        <div className="gem-detail__sections">
          <div className="gem-detail__section glass">
            <h2>✦ Benefits</h2>
            <ul className="gem-detail__benefit-list">
              {gem.benefits.map((b, i) => (
                <li key={i}><span className="gem-detail__benefit-dot" style={{ background: gem.color }} />{b}</li>
              ))}
            </ul>
          </div>

          <div className="gem-detail__section glass">
            <h2>🌿 Healing Properties</h2>
            <p>{gem.healing}</p>
          </div>

          <div className="gem-detail__section glass">
            <h2>💍 How to Wear</h2>
            <p>{gem.howToWear}</p>
          </div>

          <div className="gem-detail__section glass">
            <h2>🧼 Care Instructions</h2>
            <p>{gem.careInstructions}</p>
          </div>
        </div>

        {/* Related gems */}
        {related.length > 0 && (
          <div className="gem-detail__related">
            <p className="section-eyebrow">Similar Vibration</p>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Related Gemstones</h2>
            <div className="divider" />
            <div className="gem-detail__related-grid">
              {related.map((g, i) => <GemCard key={g.id} gem={g} rank={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
