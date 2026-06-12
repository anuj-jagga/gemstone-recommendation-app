import { useState, useMemo } from 'react';
import gemstones from '../data/gemstones';
import GemCard from '../components/GemCard';
import './Explore.css';

const ALL_ELEMENTS = ['Fire', 'Earth', 'Water', 'Air'];
const ALL_CHAKRAS  = ['Root', 'Heart', 'Crown', 'Third Eye', 'Throat', 'Solar Plexus'];
const ALL_PRICES   = ['Low', 'Medium', 'High', 'Very High'];

export default function Explore() {
  const [search,    setSearch]    = useState('');
  const [element,   setElement]   = useState('');
  const [chakra,    setChakra]    = useState('');
  const [price,     setPrice]     = useState('');
  const [sort,      setSort]      = useState('name');

  const filtered = useMemo(() => {
    let list = [...gemstones];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(g =>
        g.name.toLowerCase().includes(q) ||
        g.colorName.toLowerCase().includes(q) ||
        g.planet.toLowerCase().includes(q) ||
        g.zodiac.some(z => z.toLowerCase().includes(q))
      );
    }

    if (element) list = list.filter(g => g.element === element);
    if (chakra)  list = list.filter(g => g.chakra  === chakra);
    if (price)   list = list.filter(g => g.price   === price);

    if (sort === 'name')     list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'hardness') list.sort((a, b) => parseFloat(b.hardness) - parseFloat(a.hardness));
    if (sort === 'rarity') {
      const r = ['Common', 'Uncommon', 'Rare', 'Very Rare'];
      list.sort((a, b) => r.indexOf(b.rarity) - r.indexOf(a.rarity));
    }

    return list;
  }, [search, element, chakra, price, sort]);

  function clearFilters() {
    setSearch(''); setElement(''); setChakra(''); setPrice(''); setSort('name');
  }

  const hasFilters = search || element || chakra || price;

  return (
    <div className="explore page-padding">
      <div className="container">
        {/* Header */}
        <div className="explore__header">
          <p className="section-eyebrow">✦ Full Collection</p>
          <h1 className="section-title">Explore All Gemstones</h1>
          <div className="divider" />
        </div>

        {/* Filters */}
        <div className="explore__filters glass">
          <input
            id="explore-search"
            type="text"
            className="input-field explore__search"
            placeholder="🔍  Search by name, planet, zodiac..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className="explore__filter-row">
            <select id="filter-element" className="input-field" value={element} onChange={e => setElement(e.target.value)}>
              <option value="">All Elements</option>
              {ALL_ELEMENTS.map(el => <option key={el}>{el}</option>)}
            </select>

            <select id="filter-chakra" className="input-field" value={chakra} onChange={e => setChakra(e.target.value)}>
              <option value="">All Chakras</option>
              {ALL_CHAKRAS.map(c => <option key={c}>{c}</option>)}
            </select>

            <select id="filter-price" className="input-field" value={price} onChange={e => setPrice(e.target.value)}>
              <option value="">All Prices</option>
              {ALL_PRICES.map(p => <option key={p}>{p}</option>)}
            </select>

            <select id="explore-sort" className="input-field" value={sort} onChange={e => setSort(e.target.value)}>
              <option value="name">Sort: A–Z</option>
              <option value="hardness">Sort: Hardness</option>
              <option value="rarity">Sort: Rarity</option>
            </select>
          </div>

          <div className="explore__filter-meta">
            <span className="explore__count">{filtered.length} gem{filtered.length !== 1 ? 's' : ''} found</span>
            {hasFilters && (
              <button className="btn btn-ghost" onClick={clearFilters} id="clear-filters">
                ✕ Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="explore__grid">
            {filtered.map((gem, i) => (
              <GemCard key={gem.id} gem={gem} rank={i} />
            ))}
          </div>
        ) : (
          <div className="explore__empty glass">
            <span>🔮</span>
            <h3>No gems found</h3>
            <p>Try adjusting your filters or search term.</p>
            <button className="btn btn-secondary" onClick={clearFilters}>Clear All</button>
          </div>
        )}
      </div>
    </div>
  );
}
