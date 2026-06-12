const gemstones = [
  {
    id: "amethyst",
    name: "Amethyst",
    color: "#9b59b6",
    colorName: "Purple",
    emoji: "💜",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    zodiac: ["Pisces", "Aquarius", "Capricorn", "Virgo"],
    planet: "Saturn",
    chakra: "Crown",
    element: "Air",
    hardness: "7",
    origin: "Brazil, Uruguay, Madagascar",
    price: "Medium",
    priceRange: "$5 – $50",
    benefits: [
      "Enhances intuition and spiritual awareness",
      "Promotes calm and reduces stress",
      "Aids in meditation and clarity of mind",
      "Protects against negative energies",
    ],
    description:
      "Amethyst is a powerful and protective stone with a high spiritual vibration. It is known for its beautiful violet color and its ability to transmute negative energy into love.",
    healing: "Helps with insomnia, headaches, and anxiety disorders.",
    howToWear: "Wear on the left hand or as a pendant near the heart.",
    careInstructions: "Clean with lukewarm water. Avoid prolonged sunlight exposure.",
    category: "Quartz",
    rarity: "Common",
  },
  {
    id: "ruby",
    name: "Ruby",
    color: "#e74c3c",
    colorName: "Red",
    emoji: "❤️",
    image: "https://images.unsplash.com/photo-1610375461369-d613b564f4c0?w=400&q=80",
    zodiac: ["Aries", "Cancer", "Leo", "Scorpio"],
    planet: "Sun",
    chakra: "Root",
    element: "Fire",
    hardness: "9",
    origin: "Myanmar, Thailand, India",
    price: "High",
    priceRange: "$100 – $10,000+",
    benefits: [
      "Boosts vitality, courage, and passion",
      "Attracts prosperity and abundance",
      "Strengthens leadership qualities",
      "Enhances motivation and confidence",
    ],
    description:
      "Ruby is one of the most valuable gemstones in the world. Its deep red color symbolizes power, passion, and protection. Associated with the Sun, it energizes and activates the root chakra.",
    healing: "Stimulates the heart and improves blood circulation. Helps overcome exhaustion.",
    howToWear: "Wear on the ring finger of the right hand in a gold setting.",
    careInstructions: "Clean with mild soap and warm water. Store separately to prevent scratching.",
    category: "Corundum",
    rarity: "Rare",
  },
  {
    id: "emerald",
    name: "Emerald",
    color: "#27ae60",
    colorName: "Green",
    emoji: "💚",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    zodiac: ["Taurus", "Gemini", "Aries", "Libra"],
    planet: "Mercury",
    chakra: "Heart",
    element: "Earth",
    hardness: "7.5-8",
    origin: "Colombia, Zambia, Brazil",
    price: "High",
    priceRange: "$200 – $5,000+",
    benefits: [
      "Promotes love, compassion, and unity",
      "Enhances memory and mental clarity",
      "Attracts abundance and success",
      "Balances emotions and promotes healing",
    ],
    description:
      "Emerald is the stone of successful love and abundance. Its lush green color represents growth, renewal, and vitality. As the stone of Mercury, it enhances communication and intelligence.",
    healing: "Supports the heart, lungs, and immune system. Helps with recovery from illness.",
    howToWear: "Wear on the little finger of the right hand in a silver setting.",
    careInstructions: "Avoid ultrasonic cleaners. Clean gently with a soft cloth.",
    category: "Beryl",
    rarity: "Rare",
  },
  {
    id: "sapphire",
    name: "Blue Sapphire",
    color: "#2980b9",
    colorName: "Blue",
    emoji: "💙",
    image: "https://images.unsplash.com/photo-1629126002777-0ce09de62d38?w=400&q=80",
    zodiac: ["Virgo", "Libra", "Capricorn", "Aquarius"],
    planet: "Saturn",
    chakra: "Third Eye",
    element: "Water",
    hardness: "9",
    origin: "Sri Lanka, Kashmir, Myanmar",
    price: "High",
    priceRange: "$150 – $8,000+",
    benefits: [
      "Brings wisdom, focus, and mental discipline",
      "Promotes loyalty and trust",
      "Enhances intuition and psychic abilities",
      "Protects against envy and evil eye",
    ],
    description:
      "Blue Sapphire is one of the most powerful gemstones associated with Saturn. It is known for bringing quick results — both positive and negative — making it essential to consult an astrologer before wearing it.",
    healing: "Helps with neurological disorders, concentration, and depression.",
    howToWear: "Wear on the middle finger of the right hand in a silver or platinum setting.",
    careInstructions: "Safe for ultrasonic cleaning. Avoid sudden temperature changes.",
    category: "Corundum",
    rarity: "Rare",
  },
  {
    id: "pearl",
    name: "Pearl",
    color: "#ddd8c4",
    colorName: "White",
    emoji: "🤍",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
    zodiac: ["Cancer", "Pisces", "Scorpio", "Gemini"],
    planet: "Moon",
    chakra: "Crown",
    element: "Water",
    hardness: "2.5-4",
    origin: "Japan, China, Persian Gulf",
    price: "Medium",
    priceRange: "$20 – $500",
    benefits: [
      "Calms emotions and reduces anxiety",
      "Enhances purity, honesty, and integrity",
      "Promotes feminine energy and fertility",
      "Improves relationships and communication",
    ],
    description:
      "Pearl represents the Moon in Vedic astrology. It is a symbol of purity, innocence, and wisdom gained through experience. It calms the mind and reduces anger and emotional instability.",
    healing: "Helps with hormonal imbalances, skin issues, and emotional trauma.",
    howToWear: "Wear on the little finger of the right hand in a silver setting.",
    careInstructions: "Avoid chemicals and perfumes. Wipe with a soft cloth after wearing.",
    category: "Organic",
    rarity: "Common",
  },
  {
    id: "diamond",
    name: "Diamond",
    color: "#a8d8ea",
    colorName: "White/Clear",
    emoji: "💎",
    image: "https://images.unsplash.com/photo-1615655406736-b37887a15501?w=400&q=80",
    zodiac: ["Taurus", "Libra", "Aries", "Leo"],
    planet: "Venus",
    chakra: "Crown",
    element: "Air",
    hardness: "10",
    origin: "South Africa, Russia, India",
    price: "Very High",
    priceRange: "$1,000 – $100,000+",
    benefits: [
      "Attracts love, beauty, and luxury",
      "Enhances creativity and artistic abilities",
      "Promotes clarity, purity, and courage",
      "Amplifies positive energies and intentions",
    ],
    description:
      "Diamond is the king of gems and the hardest natural substance on Earth. Ruled by Venus, it enhances love, relationships, artistic talent, and material comforts.",
    healing: "Helps with brain diseases, sexual disorders, and skin diseases.",
    howToWear: "Wear on the middle or index finger of the right hand in gold or platinum.",
    careInstructions: "Clean with warm soapy water and a soft brush. Store separately.",
    category: "Native Element",
    rarity: "Very Rare",
  },
  {
    id: "citrine",
    name: "Citrine",
    color: "#f39c12",
    colorName: "Yellow",
    emoji: "💛",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
    zodiac: ["Aries", "Gemini", "Leo", "Libra"],
    planet: "Sun",
    chakra: "Solar Plexus",
    element: "Fire",
    hardness: "7",
    origin: "Brazil, Spain, Madagascar",
    price: "Low",
    priceRange: "$5 – $30",
    benefits: [
      "Attracts wealth, success, and prosperity",
      "Boosts self-confidence and creativity",
      "Energizes and invigorates the mind",
      "Dispels negative thoughts and emotions",
    ],
    description:
      "Citrine is known as the 'Merchant's Stone' because of its ability to attract wealth and prosperity. Its sunny yellow color carries the power of the sun, bringing warmth and energy.",
    healing: "Improves digestion, metabolism, and skin conditions.",
    howToWear: "Wear as a ring on the index finger or as a pendant.",
    careInstructions: "Avoid prolonged sunlight. Clean with mild soap and water.",
    category: "Quartz",
    rarity: "Common",
  },
  {
    id: "turquoise",
    name: "Turquoise",
    color: "#1abc9c",
    colorName: "Turquoise",
    emoji: "🩵",
    image: "https://images.unsplash.com/photo-1623521316941-4a7de7d3b51e?w=400&q=80",
    zodiac: ["Sagittarius", "Pisces", "Scorpio", "Aquarius"],
    planet: "Jupiter",
    chakra: "Throat",
    element: "Earth",
    hardness: "5-6",
    origin: "Iran, USA, China",
    price: "Medium",
    priceRange: "$10 – $200",
    benefits: [
      "Enhances communication and self-expression",
      "Provides protection during travel",
      "Promotes healing and well-being",
      "Brings good fortune and luck",
    ],
    description:
      "Turquoise is one of the oldest protective talismans known to humanity. Its blue-green color represents wisdom, tranquility, and protection. It has been used for millennia across many cultures.",
    healing: "Helps with throat issues, immune system, and detoxification.",
    howToWear: "Wear as a bracelet or ring on the dominant hand.",
    careInstructions: "Avoid chemicals and excessive moisture. Clean with a dry cloth.",
    category: "Phosphate",
    rarity: "Uncommon",
  },
  {
    id: "garnet",
    name: "Garnet",
    color: "#c0392b",
    colorName: "Dark Red",
    emoji: "🔴",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&q=80",
    zodiac: ["Capricorn", "Aquarius", "Leo", "Virgo"],
    planet: "Mars",
    chakra: "Root",
    element: "Fire",
    hardness: "6.5-7.5",
    origin: "India, Madagascar, USA",
    price: "Low",
    priceRange: "$5 – $100",
    benefits: [
      "Boosts energy, passion, and vitality",
      "Enhances creativity and sexuality",
      "Provides grounding and stability",
      "Strengthens willpower and commitment",
    ],
    description:
      "Garnet is a powerful energizing and regenerating stone. It revitalizes, purifies, and balances energy, bringing serenity or passion as appropriate. Known for inspiring love and devotion.",
    healing: "Stimulates the metabolism. Helps with blood disorders and rheumatism.",
    howToWear: "Wear on the ring finger or as a pendant.",
    careInstructions: "Clean with warm soapy water. Avoid steam cleaning.",
    category: "Silicate",
    rarity: "Common",
  },
  {
    id: "moonstone",
    name: "Moonstone",
    color: "#b2bec3",
    colorName: "Silvery White",
    emoji: "🌙",
    image: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=400&q=80",
    zodiac: ["Cancer", "Libra", "Scorpio", "Pisces"],
    planet: "Moon",
    chakra: "Third Eye",
    element: "Water",
    hardness: "6-6.5",
    origin: "Sri Lanka, India, Madagascar",
    price: "Medium",
    priceRange: "$10 – $150",
    benefits: [
      "Enhances intuition and psychic abilities",
      "Promotes emotional balance and harmony",
      "Supports new beginnings and transitions",
      "Deepens connections in relationships",
    ],
    description:
      "Moonstone is a stone of new beginnings. Strongly connected to the moon and intuition, it enhances psychic abilities and develops clairvoyance. It calms and relieves stress and emotional instability.",
    healing: "Supports the reproductive system, digestive system, and hormonal cycles.",
    howToWear: "Wear as a pendant or ring on the little finger during full moon rituals.",
    careInstructions: "Avoid ultrasonic cleaners. Clean with mild soap and rinse well.",
    category: "Feldspar",
    rarity: "Uncommon",
  },
  {
    id: "lapisLazuli",
    name: "Lapis Lazuli",
    color: "#2c3e9a",
    colorName: "Deep Blue",
    emoji: "🫐",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
    zodiac: ["Sagittarius", "Taurus", "Libra", "Capricorn"],
    planet: "Jupiter",
    chakra: "Third Eye",
    element: "Water",
    hardness: "5-6",
    origin: "Afghanistan, Chile, Russia",
    price: "Medium",
    priceRange: "$5 – $100",
    benefits: [
      "Promotes wisdom and truthfulness",
      "Enhances intellectual ability and memory",
      "Encourages self-awareness and confidence",
      "Opens the third eye for spiritual insight",
    ],
    description:
      "Lapis Lazuli is one of the most sought-after stones in history. Its deep, celestial blue remains the symbol of royalty and honor, gods and power, spirit and vision. It is a universal symbol of wisdom and truth.",
    healing: "Helps with throat problems, thyroid, and immune system disorders.",
    howToWear: "Wear as a pendant touching the throat chakra or as earrings.",
    careInstructions: "Avoid water and chemicals. Polish with a dry, soft cloth.",
    category: "Metamorphic Rock",
    rarity: "Uncommon",
  },
  {
    id: "jade",
    name: "Jade",
    color: "#52b788",
    colorName: "Green",
    emoji: "🍀",
    image: "https://images.unsplash.com/photo-1603720408453-f0e0c0cfcf0a?w=400&q=80",
    zodiac: ["Taurus", "Libra", "Pisces", "Aries"],
    planet: "Venus",
    chakra: "Heart",
    element: "Earth",
    hardness: "6-7",
    origin: "China, Myanmar, Guatemala",
    price: "Medium",
    priceRange: "$5 – $500+",
    benefits: [
      "Attracts luck, harmony, and prosperity",
      "Promotes love and nurturing energy",
      "Provides protection and wisdom",
      "Encourages self-sufficiency and confidence",
    ],
    description:
      "Jade is a symbol of purity and serenity. Much prized in Eastern cultures, it signifies wisdom gathered in tranquility. In Chinese culture, jade is associated with long life and prosperity.",
    healing: "Aids in kidney, urinary, and reproductive system health.",
    howToWear: "Wear as a bracelet, ring, or pendant. Traditionally worn on the left wrist.",
    careInstructions: "Clean with warm water and mild soap. Avoid ultrasonic cleaners.",
    category: "Silicate",
    rarity: "Uncommon",
  },
];

export default gemstones;

export const zodiacSigns = [
  { name: "Aries", emoji: "♈", dates: "Mar 21 – Apr 19", element: "Fire", planet: "Mars" },
  { name: "Taurus", emoji: "♉", dates: "Apr 20 – May 20", element: "Earth", planet: "Venus" },
  { name: "Gemini", emoji: "♊", dates: "May 21 – Jun 20", element: "Air", planet: "Mercury" },
  { name: "Cancer", emoji: "♋", dates: "Jun 21 – Jul 22", element: "Water", planet: "Moon" },
  { name: "Leo", emoji: "♌", dates: "Jul 23 – Aug 22", element: "Fire", planet: "Sun" },
  { name: "Virgo", emoji: "♍", dates: "Aug 23 – Sep 22", element: "Earth", planet: "Mercury" },
  { name: "Libra", emoji: "♎", dates: "Sep 23 – Oct 22", element: "Air", planet: "Venus" },
  { name: "Scorpio", emoji: "♏", dates: "Oct 23 – Nov 21", element: "Water", planet: "Mars" },
  { name: "Sagittarius", emoji: "♐", dates: "Nov 22 – Dec 21", element: "Fire", planet: "Jupiter" },
  { name: "Capricorn", emoji: "♑", dates: "Dec 22 – Jan 19", element: "Earth", planet: "Saturn" },
  { name: "Aquarius", emoji: "♒", dates: "Jan 20 – Feb 18", element: "Air", planet: "Saturn" },
  { name: "Pisces", emoji: "♓", dates: "Feb 19 – Mar 20", element: "Water", planet: "Jupiter" },
];

export function getZodiacFromDOB(dob) {
  if (!dob) return null;
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

export function getRecommendations(zodiac, purpose, budget) {
  let results = gemstones.filter((g) => g.zodiac.includes(zodiac));

  if (purpose) {
    const purposeMap = {
      love: ["Heart", "Root"],
      wealth: ["Solar Plexus", "Root"],
      health: ["Crown", "Heart", "Root"],
      wisdom: ["Third Eye", "Crown", "Throat"],
      protection: ["Root", "Crown"],
      spirituality: ["Crown", "Third Eye"],
    };
    const targetChakras = purposeMap[purpose] || [];
    if (targetChakras.length > 0) {
      const primaryResults = results.filter((g) => targetChakras.includes(g.chakra));
      if (primaryResults.length > 0) results = primaryResults;
    }
  }

  if (budget) {
    const budgetMap = {
      low: ["Low"],
      medium: ["Low", "Medium"],
      high: ["Low", "Medium", "High", "Very High"],
    };
    const allowed = budgetMap[budget] || [];
    const filtered = results.filter((g) => allowed.includes(g.price));
    if (filtered.length > 0) results = filtered;
  }

  if (results.length === 0) results = gemstones.slice(0, 4);

  results = results.sort((a, b) => {
    const aIdx = a.zodiac.indexOf(zodiac);
    const bIdx = b.zodiac.indexOf(zodiac);
    return aIdx - bIdx;
  });

  return results.slice(0, 6);
}
