import { Link } from 'react-router-dom';
import gemstones, { zodiacSigns } from '../data/gemstones';
import './Home.css';

const FEATURES = [
  { icon: '🔮', title: 'Zodiac-Based',    desc: 'Enter your date of birth and get gems aligned to your star sign.' },
  { icon: '💫', title: 'Purpose-Driven',  desc: 'Filter by intention — love, wealth, wisdom, health, or protection.' },
  { icon: '💰', title: 'Budget-Aware',    desc: 'We surface gems that match your spending comfort.' },
  { icon: '📖', title: 'Deep Knowledge',  desc: 'Every gem comes with chakra, planet, care, and healing info.' },
];

export default function Home() {
  const featured = gemstones.slice(0, 6);

  return (
    <div className="home">
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero__bg-orbs">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
          <div className="orb orb--3" />
        </div>

        <div className="container hero__content">
          <p className="section-eyebrow">✦ Vedic Gemology &amp; Astrology</p>
          <h1 className="hero__title">
            Discover Your<br />
            <span className="text-gradient">Sacred Gemstone</span>
          </h1>
          <p className="hero__sub">
            Uncover the perfect crystal aligned with your zodiac, chakra, and life's intentions.
            Personalised recommendations rooted in ancient Vedic wisdom.
          </p>
          <div className="hero__ctas">
            <Link to="/recommend" className="btn btn-primary" id="hero-cta-recommend">
              ✨ Get My Recommendation
            </Link>
            <Link to="/explore" className="btn btn-secondary" id="hero-cta-explore">
              Explore All Gems
            </Link>
          </div>

          {/* Floating gem orbs */}
          <div className="hero__gems">
            {gemstones.slice(0, 5).map((g, i) => (
              <div
                key={g.id}
                className="hero__gem-orb"
                style={{
                  '--gem-color': g.color,
                  animationDelay: `${i * 0.6}s`,
                  left: `${[10,25,50,70,85][i]}%`,
                  top:  `${[60,30,75,25,55][i]}%`,
                }}
              >
                {g.emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero__stats container">
          {[
            { num: '12+', label: 'Gemstones' },
            { num: '12',  label: 'Zodiac Signs' },
            { num: '6',   label: 'Chakras' },
            { num: '∞',   label: 'Possibilities' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="home-features container">
        <p className="section-eyebrow">Why GemGuide</p>
        <h2 className="section-title">Ancient wisdom,<br />modern guidance</h2>
        <div className="divider" />
        <div className="home-features__grid">
          {FEATURES.map(f => (
            <div key={f.title} className="home-feature-card glass">
              <div className="home-feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Zodiac Strip ─── */}
      <section className="zodiac-strip">
        <div className="zodiac-strip__track">
          {[...zodiacSigns, ...zodiacSigns].map((z, i) => (
            <Link
              key={i}
              to={`/recommend?zodiac=${z.name}`}
              className="zodiac-chip"
              title={z.dates}
            >
              <span>{z.emoji}</span>
              <span>{z.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Featured Gems ─── */}
      <section className="home-featured container">
        <p className="section-eyebrow">Gemstone Showcase</p>
        <h2 className="section-title">Popular Gems</h2>
        <div className="divider" />
        <div className="home-featured__grid">
          {featured.map((gem, i) => (
            <Link key={gem.id} to={`/gem/${gem.id}`} className="featured-gem-card" id={`featured-${gem.id}`}>
              <div className="featured-gem-card__color" style={{ background: `linear-gradient(135deg, ${gem.color}cc, ${gem.color}33)` }}>
                <span className="featured-gem-card__emoji">{gem.emoji}</span>
              </div>
              <div className="featured-gem-card__info">
                <strong>{gem.name}</strong>
                <span>{gem.planet} · {gem.chakra} Chakra</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="home-cta container">
        <div className="home-cta__inner glass">
          <div className="home-cta__glow" />
          <p className="section-eyebrow">Ready?</p>
          <h2 className="section-title">Find your gemstone today</h2>
          <p>Takes less than a minute. No signup required.</p>
          <Link to="/recommend" className="btn btn-primary" id="bottom-cta">
            ✨ Start My Reading
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="home-footer">
        <p>💎 GemGuide · Built with Vedic Astrology &amp; Modern Tech</p>
        <p className="home-footer__note">For educational purposes only. Always consult a certified astrologer.</p>
      </footer>
    </div>
  );
}
