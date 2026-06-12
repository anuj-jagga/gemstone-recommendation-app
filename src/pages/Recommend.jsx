import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getZodiacFromDOB, getRecommendations, zodiacSigns } from '../data/gemstones';
import GemCard from '../components/GemCard';
import './Recommend.css';

const PURPOSES = [
  { value: 'love',         label: '❤️ Love & Relationships' },
  { value: 'wealth',       label: '💰 Wealth & Prosperity' },
  { value: 'health',       label: '🌿 Health & Healing' },
  { value: 'wisdom',       label: '📚 Wisdom & Knowledge' },
  { value: 'protection',   label: '🛡️ Protection & Safety' },
  { value: 'spirituality', label: '🧘 Spirituality & Peace' },
];

const BUDGETS = [
  { value: 'low',    label: '💚 Budget-Friendly (Under $50)' },
  { value: 'medium', label: '💛 Mid-Range (Under $200)' },
  { value: 'high',   label: '💎 Premium (All Ranges)' },
];

const STEPS = ['Birth Details', 'Intention', 'Budget', 'Results'];

export default function Recommend() {
  const [searchParams] = useSearchParams();
  const preZodiac = searchParams.get('zodiac');

  const [step, setStep]         = useState(preZodiac ? 1 : 0);
  const [dob, setDob]           = useState('');
  const [zodiac, setZodiac]     = useState(preZodiac || '');
  const [purpose, setPurpose]   = useState('');
  const [budget, setBudget]     = useState('');
  const [results, setResults]   = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Auto-detect zodiac from DOB
  useEffect(() => {
    if (dob) {
      const z = getZodiacFromDOB(dob);
      if (z) setZodiac(z);
    }
  }, [dob]);

  const detectedSign = zodiac ? zodiacSigns.find(z => z.name === zodiac) : null;

  function handleSubmit() {
    if (!zodiac) return;
    const recs = getRecommendations(zodiac, purpose, budget);
    setResults(recs);
    setStep(3);
    setSubmitted(true);
  }

  function reset() {
    setStep(0); setDob(''); setZodiac('');
    setPurpose(''); setBudget('');
    setResults([]); setSubmitted(false);
  }

  return (
    <div className="recommend page-padding">
      <div className="container">
        {/* Header */}
        <div className="recommend__header">
          <p className="section-eyebrow">✦ Personalised Reading</p>
          <h1 className="section-title">Your Gemstone<br />Recommendation</h1>
          <div className="divider" />
        </div>

        {/* Stepper */}
        <div className="stepper">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`stepper__step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}
            >
              <div className="stepper__dot">{i < step ? '✓' : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* ─── Step 0: Birth Details ─── */}
        {step === 0 && (
          <div className="recommend__step glass animate-fade-in">
            <h2>Enter Your Birth Details</h2>
            <p className="recommend__step-desc">We'll calculate your zodiac sign automatically, or you can pick it manually.</p>

            <div className="recommend__field">
              <label htmlFor="rec-dob">Date of Birth</label>
              <input
                id="rec-dob"
                type="date"
                className="input-field"
                value={dob}
                onChange={e => setDob(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            {detectedSign && (
              <div className="recommend__detected-sign animate-fade-in">
                <span className="sign-emoji">{detectedSign.emoji}</span>
                <div>
                  <strong>{detectedSign.name}</strong>
                  <span>{detectedSign.dates}</span>
                </div>
              </div>
            )}

            <div className="recommend__field">
              <label>Or select your zodiac sign</label>
              <div className="zodiac-grid">
                {zodiacSigns.map(z => (
                  <button
                    key={z.name}
                    id={`zodiac-${z.name.toLowerCase()}`}
                    className={`zodiac-btn ${zodiac === z.name ? 'zodiac-btn--active' : ''}`}
                    onClick={() => setZodiac(z.name)}
                    title={z.dates}
                  >
                    <span>{z.emoji}</span>
                    <span>{z.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setStep(1)}
              disabled={!zodiac}
              id="step0-next"
            >
              Next: Your Intention →
            </button>
          </div>
        )}

        {/* ─── Step 1: Intention ─── */}
        {step === 1 && (
          <div className="recommend__step glass animate-fade-in">
            {detectedSign && (
              <div className="recommend__sign-badge">
                {detectedSign.emoji} {detectedSign.name}
              </div>
            )}
            <h2>What's Your Intention?</h2>
            <p className="recommend__step-desc">Choose the area of life you want to improve. (Optional — skip to see all matches)</p>

            <div className="purpose-grid">
              {PURPOSES.map(p => (
                <button
                  key={p.value}
                  id={`purpose-${p.value}`}
                  className={`purpose-btn ${purpose === p.value ? 'purpose-btn--active' : ''}`}
                  onClick={() => setPurpose(prev => prev === p.value ? '' : p.value)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="recommend__nav">
              <button className="btn btn-ghost" onClick={() => setStep(0)} id="step1-back">← Back</button>
              <button className="btn btn-primary" onClick={() => setStep(2)} id="step1-next">
                Next: Budget →
              </button>
            </div>
          </div>
        )}

        {/* ─── Step 2: Budget ─── */}
        {step === 2 && (
          <div className="recommend__step glass animate-fade-in">
            <h2>What's Your Budget?</h2>
            <p className="recommend__step-desc">We'll filter gems to match your spending comfort. (Optional)</p>

            <div className="budget-grid">
              {BUDGETS.map(b => (
                <button
                  key={b.value}
                  id={`budget-${b.value}`}
                  className={`budget-btn ${budget === b.value ? 'budget-btn--active' : ''}`}
                  onClick={() => setBudget(prev => prev === b.value ? '' : b.value)}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <div className="recommend__nav">
              <button className="btn btn-ghost" onClick={() => setStep(1)} id="step2-back">← Back</button>
              <button className="btn btn-primary" onClick={handleSubmit} id="step2-submit">
                ✨ Show My Gems
              </button>
            </div>
          </div>
        )}

        {/* ─── Step 3: Results ─── */}
        {step === 3 && submitted && (
          <div className="recommend__results animate-fade-in">
            <div className="recommend__results-header">
              <div>
                <p className="section-eyebrow">Your Cosmic Match</p>
                <h2 className="section-title">
                  {detectedSign?.emoji} {results.length} Gem{results.length !== 1 ? 's' : ''} for {zodiac}
                </h2>
                {purpose && <p className="recommend__filter-tags">Filtered by: <span className="badge badge-purple">{purpose}</span></p>}
              </div>
              <button className="btn btn-ghost" onClick={reset} id="results-reset">↩ Start Over</button>
            </div>

            <div className="recommend__grid">
              {results.map((gem, i) => (
                <GemCard key={gem.id} gem={gem} rank={i} />
              ))}
            </div>

            <div className="recommend__disclaimer glass">
              <p>⚠️ <strong>Disclaimer:</strong> These recommendations are for educational purposes. Always consult a certified Vedic astrologer before wearing a gemstone for therapeutic or astrological purposes.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
