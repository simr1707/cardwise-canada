import { useState, useEffect } from "react";
import Portfolio from "./Portfolio";

const cards = [
  {
    id: 1,
    name: "Scotiabank Gold American Express",
    issuer: "Scotiabank",
    network: "Amex",
    color: "#C8973A",
    gradient: "linear-gradient(135deg, #C8973A 0%, #F5D070 50%, #A07020 100%)",
    annualFee: 120,
    welcomeBonus: "Up to 45,000 Scene+ pts",
    welcomeValue: "$450",
    interestPurchase: 20.99,
    interestCash: 22.99,
    minIncome: 12000,
    creditScore: "Good (660+)",
    rewardType: "Scene+ Points",
    rewardRate: { groceries: 6, dining: 5, entertainment: 3, gas: 3, transit: 3, travel: 1, other: 1 },
    perks: ["No FX fees", "Travel insurance", "Hotel stay certificates", "Priority Pass lounge access"],
    categories: ["travel", "dining", "groceries"],
    bestFor: ["Frequent travellers", "Foodies", "Groceries spenders"],
    pros: ["No foreign transaction fees", "High earn on groceries & dining", "Comprehensive travel insurance"],
    cons: ["Amex not accepted everywhere", "$120 annual fee"],
    rating: 4.7,
    cardType: "rewards",
  },
  {
    id: 2,
    name: "TD First Class Travel Visa Infinite",
    issuer: "TD Bank",
    network: "Visa",
    color: "#1B4D8E",
    gradient: "linear-gradient(135deg, #1B4D8E 0%, #3A7BD5 100%)",
    annualFee: 139,
    welcomeBonus: "Up to 100,000 TD Points",
    welcomeValue: "$500",
    interestPurchase: 20.99,
    interestCash: 22.99,
    minIncome: 60000,
    creditScore: "Good (680+)",
    rewardType: "TD Rewards Points",
    rewardRate: { groceries: 3, dining: 3, entertainment: 3, gas: 3, transit: 3, travel: 8, other: 2 },
    perks: ["Travel insurance package", "Expedia for TD bonus", "Concierge service", "Travel accident insurance"],
    categories: ["travel", "flexible"],
    bestFor: ["Frequent travellers", "Expedia users", "High income earners"],
    pros: ["8x points on Expedia for TD", "Flexible reward redemption", "Strong welcome bonus"],
    cons: ["$60K income requirement", "$139 annual fee", "TD Points worth less than some competitors"],
    rating: 4.4,
    cardType: "travel",
  },
  {
    id: 3,
    name: "PC Financial World Elite Mastercard",
    issuer: "PC Financial",
    network: "Mastercard",
    color: "#E31837",
    gradient: "linear-gradient(135deg, #E31837 0%, #FF6B6B 100%)",
    annualFee: 0,
    welcomeBonus: "PC Optimum welcome offer",
    welcomeValue: "$20",
    interestPurchase: 20.99,
    interestCash: 22.99,
    minIncome: 80000,
    creditScore: "Good (680+)",
    rewardType: "PC Optimum Points",
    rewardRate: { groceries: 30, dining: 10, entertainment: 3, gas: 3, transit: 3, travel: 3, other: 3 },
    perks: ["30 pts per $1 at Loblaws", "Free roadside assistance", "Travel insurance included", "Price protection"],
    categories: ["groceries", "no-fee"],
    bestFor: ["Loblaws shoppers", "No annual fee seekers", "Grocery spenders"],
    pros: ["No annual fee", "Exceptional at Loblaws grocery stores", "Roadside assistance included"],
    cons: ["High income requirement", "Best value only at Loblaw stores", "Limited travel benefits"],
    rating: 4.3,
    cardType: "cashback",
  },
  {
    id: 4,
    name: "American Express Cobalt",
    issuer: "American Express",
    network: "Amex",
    color: "#2D6A4F",
    gradient: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)",
    annualFee: 155.88,
    welcomeBonus: "Up to 15,000 MR pts/month for 12 mo",
    welcomeValue: "$750+",
    interestPurchase: 20.99,
    interestCash: 21.99,
    minIncome: 0,
    creditScore: "Fair (620+)",
    rewardType: "Amex Membership Rewards",
    rewardRate: { groceries: 5, dining: 5, entertainment: 2, gas: 3, transit: 2, travel: 2, other: 1 },
    perks: ["Hotel + flight point transfers", "Lounge access (Amex Global)", "Front of the Line entertainment", "Travel insurance"],
    categories: ["travel", "dining", "groceries", "flexible"],
    bestFor: ["Millennials", "Foodies", "Points maximizers"],
    pros: ["Flexible Amex MR points", "Excellent dining & food earn", "No minimum income"],
    cons: ["Monthly fee structure ($12.99/mo)", "Amex not accepted everywhere", "Complex reward system"],
    rating: 4.8,
    cardType: "rewards",
  },
  {
    id: 5,
    name: "SimplyCash Preferred Amex",
    issuer: "American Express",
    network: "Amex",
    color: "#4A4A8A",
    gradient: "linear-gradient(135deg, #2C2C6C 0%, #4A4A8A 60%, #6A6AAA 100%)",
    annualFee: 99,
    welcomeBonus: "10% cashback for first 3 months",
    welcomeValue: "$400",
    interestPurchase: 20.99,
    interestCash: 21.99,
    minIncome: 0,
    creditScore: "Good (660+)",
    rewardType: "Cash Back",
    rewardRate: { groceries: 2, dining: 2, entertainment: 2, gas: 2, transit: 2, travel: 2, other: 2 },
    perks: ["Flat 2% everywhere", "Purchase protection", "Extended warranty", "Travel accident insurance"],
    categories: ["cashback", "simple"],
    bestFor: ["Cash back lovers", "Simplicity seekers", "All-around spenders"],
    pros: ["Simple flat-rate cash back", "No category tracking needed", "Great welcome offer"],
    cons: ["Amex not accepted everywhere", "$99 annual fee", "Better rates available for specific categories"],
    rating: 4.2,
    cardType: "cashback",
  },
  {
    id: 6,
    name: "Rogers Red World Elite Mastercard",
    issuer: "Rogers Bank",
    network: "Mastercard",
    color: "#DA1212",
    gradient: "linear-gradient(135deg, #8B0000 0%, #DA1212 60%, #FF4444 100%)",
    annualFee: 0,
    welcomeBonus: "$60 cash back first year",
    welcomeValue: "$60",
    interestPurchase: 19.99,
    interestCash: 22.99,
    minIncome: 80000,
    creditScore: "Good (680+)",
    rewardType: "Cash Back",
    rewardRate: { groceries: 1.5, dining: 1.5, entertainment: 1.5, gas: 1.5, transit: 1.5, travel: 3, other: 1.5 },
    perks: ["3% back on foreign currency", "No foreign transaction fees", "Roam Like Home bonus", "Travel insurance"],
    categories: ["cashback", "travel", "no-fee"],
    bestFor: ["Frequent international travellers", "No-fee card seekers", "Rogers/Fido customers"],
    pros: ["No annual fee", "No foreign transaction fees", "3% cash back on USD/foreign spend"],
    cons: ["High income requirement", "Best for Rogers customers", "Lower base rate vs competitors"],
    rating: 4.1,
    cardType: "cashback",
  },
  {
    id: 7,
    name: "BMO Eclipse Visa Infinite",
    issuer: "BMO",
    network: "Visa",
    color: "#0079C1",
    gradient: "linear-gradient(135deg, #004D80 0%, #0079C1 50%, #00AAFF 100%)",
    annualFee: 120,
    welcomeBonus: "Up to 60,000 BMO Rewards points",
    welcomeValue: "$400",
    interestPurchase: 20.99,
    interestCash: 23.99,
    minIncome: 60000,
    creditScore: "Good (680+)",
    rewardType: "BMO Rewards",
    rewardRate: { groceries: 5, dining: 5, entertainment: 5, gas: 5, transit: 5, travel: 1, other: 1 },
    perks: ["5x on top categories", "Lifestyle Screen credit", "$50 annual lifestyle credit", "Travel insurance"],
    categories: ["dining", "groceries", "lifestyle"],
    bestFor: ["Lifestyle spenders", "Dining & grocery focused", "Urban professionals"],
    pros: ["5x points on 5 key categories", "$50 lifestyle credit offsets fee", "Strong welcome bonus"],
    cons: ["$120 annual fee", "BMO Rewards less flexible", "$60K income requirement"],
    rating: 4.3,
    cardType: "rewards",
  },
  {
    id: 8,
    name: "CIBC Dividend Visa Infinite",
    issuer: "CIBC",
    network: "Visa",
    color: "#8B0000",
    gradient: "linear-gradient(135deg, #5C0000 0%, #8B0000 50%, #C00000 100%)",
    annualFee: 99,
    welcomeBonus: "First year fee waived",
    welcomeValue: "$99",
    interestPurchase: 20.99,
    interestCash: 22.99,
    minIncome: 60000,
    creditScore: "Good (680+)",
    rewardType: "Cash Back",
    rewardRate: { groceries: 4, dining: 2, entertainment: 2, gas: 4, transit: 2, travel: 1, other: 1 },
    perks: ["4% on groceries & gas", "Free first year", "Comprehensive insurance", "CIBC banking perks"],
    categories: ["cashback", "groceries", "gas"],
    bestFor: ["Gas & grocery spenders", "Cash back seekers", "CIBC customers"],
    pros: ["4% back on groceries and gas", "Solid cash back structure", "First year free"],
    cons: ["$60K income requirement", "Lower travel rewards", "1% on general spend"],
    rating: 4.2,
    cardType: "cashback",
  },
  {
    id: 9,
    name: "RBC Avion Visa Infinite",
    issuer: "RBC",
    network: "Visa",
    color: "#003168",
    gradient: "linear-gradient(135deg, #001840 0%, #003168 50%, #0051A5 100%)",
    annualFee: 120,
    welcomeBonus: "Up to 55,000 Avion points",
    welcomeValue: "$1,100+",
    interestPurchase: 20.99,
    interestCash: 22.99,
    minIncome: 60000,
    creditScore: "Good (680+)",
    rewardType: "Avion Rewards",
    rewardRate: { groceries: 1, dining: 1, entertainment: 1, gas: 1, transit: 1, travel: 1.25, other: 1 },
    perks: ["Avion point transfers to airlines", "Comprehensive travel insurance", "Airport lounge access", "RBC Rewards store"],
    categories: ["travel", "flexible"],
    bestFor: ["Frequent flyers", "RBC customers", "Flexible point users"],
    pros: ["Avion points transfer to airlines (Air Canada, BA, etc.)", "High welcome bonus value", "Excellent travel insurance"],
    cons: ["Low everyday earn rate", "$120 annual fee", "$60K income requirement"],
    rating: 4.0,
    cardType: "travel",
  },
  {
    id: 10,
    name: "Tangerine Money-Back Mastercard",
    issuer: "Tangerine",
    network: "Mastercard",
    color: "#FF6600",
    gradient: "linear-gradient(135deg, #CC4400 0%, #FF6600 50%, #FF9933 100%)",
    annualFee: 0,
    welcomeBonus: "Extra 10% back for 2 months",
    welcomeValue: "$100",
    interestPurchase: 19.95,
    interestCash: 19.95,
    rewardType: "Cash Back",
    minIncome: 12000,
    creditScore: "Fair (600+)",
    rewardRate: { groceries: 2, dining: 2, entertainment: 2, gas: 2, transit: 2, travel: 2, other: 0.5 },
    perks: ["Choose 2-3 cash back categories", "No annual fee", "Automatic monthly deposits", "Low income requirement"],
    categories: ["cashback", "no-fee", "flexible"],
    bestFor: ["Budget-conscious users", "First card seekers", "Cash back lovers"],
    pros: ["No annual fee", "Customizable cash back categories", "Low income requirement"],
    cons: ["0.5% on non-bonus categories", "No travel benefits", "Limited perks"],
    rating: 4.1,
    cardType: "cashback",
  },
];

const questions = [
  {
    id: "spending",
    question: "Where do you spend the most money each month?",
    icon: "💳",
    options: [
      { value: "groceries", label: "Groceries & Household", icon: "🛒" },
      { value: "dining", label: "Restaurants & Dining Out", icon: "🍽️" },
      { value: "gas", label: "Gas & Transportation", icon: "⛽" },
      { value: "travel", label: "Travel & Flights", icon: "✈️" },
      { value: "other", label: "General Shopping", icon: "🛍️" },
    ],
  },
  {
    id: "goal",
    question: "What's your main goal with a credit card?",
    icon: "🎯",
    options: [
      { value: "cashback", label: "Get cash back on purchases", icon: "💵" },
      { value: "travel", label: "Earn travel rewards & miles", icon: "🌍" },
      { value: "rewards", label: "Flexible points for anything", icon: "⭐" },
      { value: "simple", label: "Keep it simple, no fees", icon: "✅" },
    ],
  },
  {
    id: "fee",
    question: "Are you okay paying an annual fee?",
    icon: "💰",
    options: [
      { value: "no_fee", label: "No fee — ever", icon: "🆓" },
      { value: "low_fee", label: "Up to $100/year is fine", icon: "💲" },
      { value: "any_fee", label: "I'll pay for great rewards", icon: "💎" },
    ],
  },
  {
    id: "income",
    question: "What is your approximate annual income?",
    icon: "📊",
    options: [
      { value: "under_35k", label: "Under $35,000", icon: "📉" },
      { value: "35_60k", label: "$35,000 – $60,000", icon: "📊" },
      { value: "60_80k", label: "$60,000 – $80,000", icon: "📈" },
      { value: "over_80k", label: "Over $80,000", icon: "🏆" },
    ],
  },
  {
    id: "travel",
    question: "How often do you travel internationally?",
    icon: "🌐",
    options: [
      { value: "never", label: "Rarely or never", icon: "🏠" },
      { value: "sometimes", label: "1-2 times per year", icon: "🧳" },
      { value: "often", label: "3+ times per year", icon: "✈️" },
    ],
  },
];

function scoreCard(card, answers) {
  let score = 0;
  const { spending, goal, fee, income, travel } = answers;

  // Goal match
  if (goal === card.cardType || (goal === "simple" && card.annualFee === 0)) score += 30;
  else if (goal === "rewards" && card.cardType === "rewards") score += 30;

  // Spending category
  if (spending === "groceries" && card.rewardRate.groceries >= 4) score += 25;
  if (spending === "dining" && card.rewardRate.dining >= 4) score += 25;
  if (spending === "gas" && card.rewardRate.gas >= 3) score += 25;
  if (spending === "travel" && card.cardType === "travel") score += 25;
  if (spending === "other" && card.rewardRate.other >= 2) score += 15;

  // Fee preference
  if (fee === "no_fee" && card.annualFee === 0) score += 20;
  if (fee === "low_fee" && card.annualFee <= 100) score += 15;
  if (fee === "any_fee" && card.annualFee > 100) score += 10;

  // Income check
  const incomeMap = { under_35k: 20000, "35_60k": 45000, "60_80k": 70000, over_80k: 90000 };
  const userIncome = incomeMap[income] || 0;
  if (userIncome >= card.minIncome) score += 15;
  else score -= 50; // Disqualify if income too low

  // Travel
  if (travel === "often" && card.perks.some((p) => p.toLowerCase().includes("lounge"))) score += 15;
  if (travel === "never" && card.categories.includes("no-fee")) score += 10;

  return score;
}

export default function App() {
  const [view, setView] = useState("portfolio");
  const [selectedCard, setSelectedCard] = useState(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [compareList, setCompareList] = useState([]);
  const [sortBy, setSortBy] = useState("rating");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards
    .filter((c) => {
      const matchType = filterType === "all" || c.cardType === filterType;
      const matchSearch =
        !searchTerm ||
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchType && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "fee_asc") return a.annualFee - b.annualFee;
      if (sortBy === "fee_desc") return b.annualFee - a.annualFee;
      return 0;
    });

  const handleQuizAnswer = (questionId, value) => {
    const newAnswers = { ...quizAnswers, [questionId]: value };
    setQuizAnswers(newAnswers);
    if (quizStep < questions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      computeRecommendations(newAnswers);
    }
  };

  const generateExplanation = (answers, scored) => {
    const top = scored[0];
    const second = scored[1];
    const third = scored[2];

    const spendingLabel = {
      groceries: "groceries and household essentials",
      dining: "dining and restaurants",
      gas: "gas and transportation",
      travel: "travel and flights",
      other: "general everyday purchases",
    }[answers.spending] || "everyday purchases";

    const goalLabel = {
      cashback: "earning cash back",
      travel: "collecting travel rewards",
      rewards: "accumulating flexible points",
      simple: "keeping things simple with no annual fee",
    }[answers.goal] || "maximizing rewards";

    const feeLabel = {
      no_fee: "you prefer no annual fee",
      low_fee: "you're comfortable with a modest annual fee",
      any_fee: "you're willing to pay for premium rewards",
    }[answers.fee] || "";

    const travelLabel = {
      never: "you rarely travel internationally",
      sometimes: "you travel internationally a couple of times a year",
      often: "you're a frequent international traveller",
    }[answers.travel] || "";

    return `Based on your profile — spending most on ${spendingLabel}, focused on ${goalLabel}, and the fact that ${feeLabel} — the ${top.name} is your strongest match. It earns ${top.rewardRate[answers.spending] || top.rewardRate.other}${top.rewardType === "Cash Back" ? "%" : "x"} on your top spending category and offers ${top.welcomeValue} in welcome value, making it an excellent fit for your goals.

The ${second.name} rounds out your wallet nicely as a complementary option, particularly strong for ${second.bestFor[0].toLowerCase()} and offering ${second.welcomeValue} in welcome bonuses. Since ${travelLabel}, this card adds extra flexibility to your overall rewards strategy.

Rounding out your top three, the ${third.name} is worth keeping on your radar — especially for ${third.bestFor[0].toLowerCase()}. Together, these three cards cover your spending profile well and represent the best available options for Canadians in your situation.`;
  };

  const computeRecommendations = async (answers) => {
    const scored = cards
      .map((c) => ({ ...c, score: scoreCard(c, answers) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    setRecommendations(scored);
    setView("results");
    setAiLoading(true);

    // Small delay to keep the shimmer UX feel
    await new Promise((resolve) => setTimeout(resolve, 900));
    setAiExplanation(generateExplanation(answers, scored));
    setAiLoading(false);
  };

  const toggleCompare = (card) => {
    setCompareList((prev) =>
      prev.find((c) => c.id === card.id)
        ? prev.filter((c) => c.id !== card.id)
        : prev.length < 3
        ? [...prev, card]
        : prev
    );
  };

  if (view === "portfolio") {
    return <Portfolio onLaunchCardwise={() => setView("home")} />;
  }

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#0A0A0F", minHeight: "100vh", color: "#F0EDE8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { scroll-behavior: smooth; }
        body { background: #0A0A0F; }
        .dm { font-family: 'DM Sans', sans-serif; }
        .nav-btn { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #A09880; transition: color 0.2s; padding: 8px 16px; border-radius: 20px; }
        .nav-btn:hover, .nav-btn.active { color: #F0EDE8; background: rgba(255,255,255,0.08); }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .pill { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; font-family: 'DM Sans', sans-serif; }
        .quiz-opt { background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 16px 20px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 14px; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #D0CCC0; }
        .quiz-opt:hover { background: rgba(200,151,58,0.12); border-color: #C8973A; color: #F0EDE8; }
        .star { color: #C8973A; }
        .compare-bar { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(15,13,10,0.97); backdrop-filter: blur(20px); border-top: 1px solid rgba(200,151,58,0.3); padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; z-index: 100; }
        .cta-btn { background: linear-gradient(135deg, #C8973A 0%, #F5D070 100%); color: #0A0A0F; border: none; border-radius: 10px; padding: 12px 28px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: opacity 0.2s; }
        .cta-btn:hover { opacity: 0.9; }
        .cta-btn-outline { background: none; border: 1.5px solid #C8973A; color: #C8973A; border-radius: 10px; padding: 11px 24px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; }
        .cta-btn-outline:hover { background: rgba(200,151,58,0.1); }
        table { border-collapse: collapse; width: 100%; }
        th { font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 1px; padding: 12px 16px; text-align: left; }
        td { font-family: 'DM Sans', sans-serif; font-size: 14px; color: #C0BDB0; padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.05); }
        tr:hover td { background: rgba(255,255,255,0.02); }
        input[type=text], select { background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 10px 16px; color: #F0EDE8; font-family: 'DM Sans', sans-serif; font-size: 14px; outline: none; }
        input[type=text]:focus, select:focus { border-color: #C8973A; }
        select option { background: #1A1A24; }
        .tab { padding: 8px 20px; border-radius: 8px; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; border: none; transition: all 0.2s; }
        .badge-network { display: inline-flex; align-items: center; gap: 4px; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 700; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
        @keyframes shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%); background-size: 200%; animation: shimmer 1.5s infinite; border-radius: 8px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,15,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22, fontWeight: 900, background: "linear-gradient(135deg, #C8973A, #F5D070)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CardWise</span>
          <span className="dm" style={{ fontSize: 11, color: "#888", borderLeft: "1px solid #333", paddingLeft: 10, marginLeft: 2 }}>Canada</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button className="nav-btn" onClick={() => setView("portfolio")} style={{ color: "#00f2fe", fontWeight: "bold" }}>
            ← Portfolio
          </button>
          {["home", "compare", "quiz"].map((v) => (
            <button key={v} className={`nav-btn ${view === v || (view === "results" && v === "quiz") ? "active" : ""}`} onClick={() => { setView(v); if (v === "quiz") { setQuizStep(0); setQuizAnswers({}); setRecommendations([]); setAiExplanation(""); } }}>
              {v === "home" ? "All Cards" : v === "compare" ? "Compare" : "Find My Card"}
            </button>
          ))}
        </div>
      </nav>

      {/* HOME VIEW */}
      {view === "home" && (
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontFamily: "'DM Sans',sans-serif", color: "#C8973A", letterSpacing: 3, fontWeight: 600, marginBottom: 16, textTransform: "uppercase" }}>Canada's Most Complete Credit Card Guide</div>
            <h1 style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: 20 }}>
              Find Your Perfect<br />
              <span style={{ background: "linear-gradient(135deg, #C8973A 0%, #F5D070 60%, #C8973A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Canadian Credit Card</span>
            </h1>
            <p className="dm" style={{ fontSize: 18, color: "#888", maxWidth: 540, margin: "0 auto 32px" }}>
              Detailed comparisons of all major Canadian credit cards — rewards, cashback, travel, and more. Updated 2025.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="cta-btn" onClick={() => { setView("quiz"); setQuizStep(0); }}>
                ✨ Find My Best Card
              </button>
              <button className="cta-btn-outline" onClick={() => setView("compare")}>
                Compare Side-by-Side
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden", marginBottom: 48 }}>
            {[["10", "Cards Reviewed"], ["$0", "Lowest Annual Fee"], ["4.8★", "Top Rated Card"], ["6%", "Best Grocery Rate"]].map(([n, l]) => (
              <div key={l} style={{ background: "#0F0F18", padding: "20px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#C8973A" }}>{n}</div>
                <div className="dm" style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap", alignItems: "center" }}>
            <input type="text" placeholder="Search cards..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: 200 }} />
            <div style={{ display: "flex", gap: 6, background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 4 }}>
              {["all", "cashback", "travel", "rewards"].map((t) => (
                <button key={t} className="tab" onClick={() => setFilterType(t)} style={{ background: filterType === t ? "rgba(200,151,58,0.2)" : "transparent", color: filterType === t ? "#C8973A" : "#888" }}>
                  {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ marginLeft: "auto" }}>
              <option value="rating">Sort: Top Rated</option>
              <option value="fee_asc">Sort: Lowest Fee</option>
              <option value="fee_desc">Sort: Highest Fee</option>
            </select>
          </div>

          {/* Card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px,1fr))", gap: 20 }}>
            {filteredCards.map((card, i) => (
              <div key={card.id} className="card-hover fade-up" style={{ animationDelay: `${i * 0.06}s`, background: "#13131E", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }} onClick={() => { setSelectedCard(card); setView("detail"); }}>
                {/* Card visual */}
                <div style={{ height: 140, background: card.gradient, position: "relative", overflow: "hidden", padding: "20px 24px" }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                  <div style={{ position: "absolute", bottom: -40, left: -10, width: 120, height: 120, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div className="dm" style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: 2, fontmarginbottom: 8 }}>{card.issuer}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{card.name.replace(card.issuer, "").trim()}</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 14, right: 20 }}>
                    <span className="dm" style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.25)", padding: "3px 10px", borderRadius: 20 }}>{card.network}</span>
                  </div>
                </div>

                <div style={{ padding: "20px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div className="dm" style={{ fontSize: 12, color: "#666" }}>Annual Fee</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: card.annualFee === 0 ? "#4CAF50" : "#F0EDE8" }}>
                        {card.annualFee === 0 ? "Free" : `$${card.annualFee}`}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="dm" style={{ fontSize: 12, color: "#666" }}>Welcome Bonus</div>
                      <div className="dm" style={{ fontSize: 13, fontWeight: 600, color: "#C8973A" }}>{card.welcomeValue}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                    <span className="pill" style={{ background: "rgba(200,151,58,0.15)", color: "#C8973A" }}>{card.rewardType}</span>
                    {card.annualFee === 0 && <span className="pill" style={{ background: "rgba(76,175,80,0.15)", color: "#4CAF50" }}>No Fee</span>}
                  </div>

                  {/* Top reward rates */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
                    {Object.entries(card.rewardRate).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([cat, rate]) => (
                      <div key={cat} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
                        <div style={{ fontSize: 16, fontWeight: 800, color: "#C8973A" }}>{rate}{card.rewardType === "Cash Back" ? "%" : "x"}</div>
                        <div className="dm" style={{ fontSize: 10, color: "#666", textTransform: "capitalize", marginTop: 2 }}>{cat}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[1,2,3,4,5].map(s => <span key={s} className="star" style={{ fontSize: 13, opacity: s <= Math.round(card.rating) ? 1 : 0.3 }}>★</span>)}
                      <span className="dm" style={{ fontSize: 12, color: "#666", marginLeft: 4 }}>{card.rating}</span>
                    </div>
                    <button
                      className="dm"
                      onClick={(e) => { e.stopPropagation(); toggleCompare(card); }}
                      style={{ fontSize: 12, background: compareList.find((c) => c.id === card.id) ? "rgba(200,151,58,0.2)" : "rgba(255,255,255,0.06)", border: "none", borderRadius: 8, padding: "5px 12px", cursor: "pointer", color: compareList.find((c) => c.id === card.id) ? "#C8973A" : "#888", fontWeight: 600, transition: "all 0.2s" }}
                    >
                      {compareList.find((c) => c.id === card.id) ? "✓ Comparing" : "+ Compare"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DETAIL VIEW */}
      {view === "detail" && selectedCard && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
          <button className="dm" onClick={() => setView("home")} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 14, marginBottom: 28, display: "flex", alignItems: "center", gap: 6 }}>
            ← Back to all cards
          </button>
          <div className="fade-up">
            {/* Hero */}
            <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 32 }}>
              <div style={{ height: 200, background: selectedCard.gradient, padding: 36, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="dm" style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 3, marginBottom: 10 }}>{selectedCard.issuer} · {selectedCard.network}</div>
                  <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 12 }}>{selectedCard.name}</h1>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {selectedCard.bestFor.map((b) => (
                      <span key={b} className="dm" style={{ fontSize: 12, background: "rgba(0,0,0,0.3)", color: "rgba(255,255,255,0.8)", padding: "4px 12px", borderRadius: 20 }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 32 }}>
              {[
                ["Annual Fee", selectedCard.annualFee === 0 ? "Free" : `$${selectedCard.annualFee}`, "#4CAF50"],
                ["Welcome Bonus", selectedCard.welcomeValue, "#C8973A"],
                ["Purchase Rate", `${selectedCard.interestPurchase}%`, "#F0EDE8"],
                ["Rating", `${selectedCard.rating}/5`, "#C8973A"],
              ].map(([l, v, c]) => (
                <div key={l} style={{ background: "#13131E", borderRadius: 14, padding: "20px", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="dm" style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{l}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: c }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Reward rates */}
            <div style={{ background: "#13131E", borderRadius: 18, padding: 28, marginBottom: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Reward Rates</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: 12 }}>
                {Object.entries(selectedCard.rewardRate).map(([cat, rate]) => (
                  <div key={cat} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: "#C8973A" }}>{rate}{selectedCard.rewardType === "Cash Back" ? "%" : "x"}</div>
                    <div className="dm" style={{ fontSize: 12, color: "#888", textTransform: "capitalize", marginTop: 4 }}>{cat}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons + Perks */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{ background: "#13131E", borderRadius: 18, padding: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#4CAF50" }}>✓ Pros</h3>
                {selectedCard.pros.map((p) => <div key={p} className="dm" style={{ fontSize: 14, color: "#C0BDB0", marginBottom: 10, paddingLeft: 14, borderLeft: "2px solid rgba(76,175,80,0.3)" }}>{p}</div>)}
              </div>
              <div style={{ background: "#13131E", borderRadius: 18, padding: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#FF6B6B" }}>✗ Cons</h3>
                {selectedCard.cons.map((c) => <div key={c} className="dm" style={{ fontSize: 14, color: "#C0BDB0", marginBottom: 10, paddingLeft: 14, borderLeft: "2px solid rgba(255,107,107,0.3)" }}>{c}</div>)}
              </div>
            </div>

            <div style={{ background: "#13131E", borderRadius: 18, padding: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#C8973A" }}>Card Perks & Benefits</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {selectedCard.perks.map((p) => (
                  <div key={p} className="dm" style={{ fontSize: 14, color: "#C0BDB0", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#C8973A", fontSize: 16 }}>◆</span> {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMPARE VIEW */}
      {view === "compare" && (
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Side-by-Side Comparison</h2>
          <p className="dm" style={{ color: "#888", marginBottom: 32 }}>Select up to 3 cards from the All Cards page to compare here.</p>

          {compareList.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 40px", background: "#13131E", borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
              <h3 style={{ fontSize: 22, marginBottom: 12 }}>No cards selected yet</h3>
              <p className="dm" style={{ color: "#888", marginBottom: 24 }}>Go to All Cards and click "+ Compare" on up to 3 cards.</p>
              <button className="cta-btn" onClick={() => setView("home")}>Browse Cards</button>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                    <th style={{ width: 180 }}>Feature</th>
                    {compareList.map((c) => (
                      <th key={c.id}>
                        <div style={{ height: 6, borderRadius: 4, background: c.gradient, marginBottom: 8 }} />
                        <div style={{ color: "#F0EDE8", fontSize: 13 }}>{c.name}</div>
                        <button onClick={() => toggleCompare(c)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 11, marginTop: 4, fontFamily: "'DM Sans',sans-serif" }}>✕ Remove</button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Annual Fee", (c) => c.annualFee === 0 ? <span style={{ color: "#4CAF50", fontWeight: 700 }}>Free</span> : `$${c.annualFee}`],
                    ["Network", (c) => c.network],
                    ["Reward Type", (c) => c.rewardType],
                    ["Welcome Bonus", (c) => <span style={{ color: "#C8973A", fontWeight: 600 }}>{c.welcomeValue}</span>],
                    ["Groceries", (c) => <span style={{ fontWeight: 700 }}>{c.rewardRate.groceries}{c.rewardType === "Cash Back" ? "%" : "x"}</span>],
                    ["Dining", (c) => `${c.rewardRate.dining}${c.rewardType === "Cash Back" ? "%" : "x"}`],
                    ["Gas", (c) => `${c.rewardRate.gas}${c.rewardType === "Cash Back" ? "%" : "x"}`],
                    ["Travel", (c) => `${c.rewardRate.travel}${c.rewardType === "Cash Back" ? "%" : "x"}`],
                    ["Purchase Rate", (c) => `${c.interestPurchase}%`],
                    ["Min Income", (c) => c.minIncome === 0 ? "None" : `$${c.minIncome.toLocaleString()}`],
                    ["Credit Score", (c) => c.creditScore],
                    ["Rating", (c) => <span style={{ color: "#C8973A", fontWeight: 700 }}>{c.rating} ★</span>],
                  ].map(([label, fn]) => (
                    <tr key={label}>
                      <td style={{ color: "#888", fontWeight: 500 }}>{label}</td>
                      {compareList.map((c) => <td key={c.id}>{fn(c)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* QUIZ VIEW */}
      {view === "quiz" && (
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "60px 24px" }}>
          {/* Progress */}
          <div style={{ marginBottom: 48 }}>
            <div className="dm" style={{ fontSize: 12, color: "#888", marginBottom: 10, display: "flex", justifyContent: "space-between" }}>
              <span>Question {quizStep + 1} of {questions.length}</span>
              <span>{Math.round(((quizStep) / questions.length) * 100)}% complete</span>
            </div>
            <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(quizStep / questions.length) * 100}%`, background: "linear-gradient(90deg, #C8973A, #F5D070)", borderRadius: 4, transition: "width 0.4s ease" }} />
            </div>
          </div>

          <div className="fade-up" key={quizStep}>
            <div style={{ fontSize: 40, marginBottom: 20 }}>{questions[quizStep].icon}</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.3, marginBottom: 32 }}>{questions[quizStep].question}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {questions[quizStep].options.map((opt) => (
                <button key={opt.value} className="quiz-opt" onClick={() => handleQuizAnswer(questions[quizStep].id, opt.value)}>
                  <span style={{ fontSize: 22 }}>{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RESULTS VIEW */}
      {view === "results" && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎯</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12 }}>Your Top 3 Cards</h2>
            <p className="dm" style={{ color: "#888" }}>Matched to your spending habits and goals</p>
          </div>

          {/* AI explanation */}
          <div style={{ background: "linear-gradient(135deg, rgba(200,151,58,0.1) 0%, rgba(200,151,58,0.04) 100%)", border: "1px solid rgba(200,151,58,0.25)", borderRadius: 18, padding: 28, marginBottom: 40 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #C8973A, #F5D070)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>✨</div>
              <div>
                <div className="dm" style={{ fontSize: 12, color: "#C8973A", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>AI Recommendation</div>
                {aiLoading ? (
                  <div>
                    {[140, 200, 160].map((w, i) => <div key={i} className="shimmer" style={{ height: 14, width: w, marginBottom: 10 }} />)}
                  </div>
                ) : (
                  <p className="dm" style={{ fontSize: 15, lineHeight: 1.7, color: "#C0BDB0" }}>{aiExplanation}</p>
                )}
              </div>
            </div>
          </div>

          {/* Top cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {recommendations.map((card, i) => (
              <div key={card.id} className="fade-up card-hover" style={{ animationDelay: `${i * 0.1}s`, background: "#13131E", borderRadius: 18, overflow: "hidden", border: i === 0 ? "1px solid rgba(200,151,58,0.4)" : "1px solid rgba(255,255,255,0.07)", display: "flex" }} onClick={() => { setSelectedCard(card); setView("detail"); }}>
                {i === 0 && <div style={{ width: 4, background: "linear-gradient(180deg, #C8973A, #F5D070)" }} />}
                <div style={{ flex: 1, padding: "24px 28px", display: "flex", gap: 24, alignItems: "center" }}>
                  <div style={{ width: 80, height: 52, borderRadius: 10, background: card.gradient, flexShrink: 0, position: "relative" }}>
                    {i === 0 && <div style={{ position: "absolute", top: -10, right: -10, background: "#C8973A", color: "#0A0A0F", borderRadius: 20, fontSize: 9, fontWeight: 800, padding: "2px 8px", fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap" }}>BEST MATCH</div>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <span className="dm" style={{ fontSize: 18, fontWeight: 700, color: "#F0EDE8" }}>#{i + 1}</span>
                      <h3 style={{ fontSize: 16, fontWeight: 700 }}>{card.name}</h3>
                    </div>
                    <div className="dm" style={{ fontSize: 13, color: "#888", marginBottom: 10 }}>
                      {card.annualFee === 0 ? "No annual fee" : `$${card.annualFee}/year`} · {card.rewardType} · {card.network}
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {card.bestFor.slice(0, 2).map((b) => <span key={b} className="pill" style={{ background: "rgba(200,151,58,0.12)", color: "#C8973A" }}>{b}</span>)}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#C8973A", marginBottom: 4 }}>{card.welcomeValue}</div>
                    <div className="dm" style={{ fontSize: 11, color: "#666" }}>Welcome bonus</div>
                    <div className="dm" style={{ fontSize: 12, color: "#C8973A", marginTop: 8 }}>View details →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="cta-btn-outline" onClick={() => { setView("quiz"); setQuizStep(0); setQuizAnswers({}); setRecommendations([]); setAiExplanation(""); }}>
              Retake Quiz
            </button>
          </div>
        </div>
      )}

      {/* Compare bar */}
      {compareList.length > 0 && view === "home" && (
        <div className="compare-bar">
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span className="dm" style={{ fontSize: 14, color: "#888" }}>Comparing {compareList.length}/3:</span>
            {compareList.map((c) => (
              <span key={c.id} className="dm" style={{ fontSize: 13, background: "rgba(255,255,255,0.08)", padding: "5px 12px", borderRadius: 20, color: "#F0EDE8" }}>
                {c.issuer}
                <button onClick={() => toggleCompare(c)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", marginLeft: 6, fontSize: 12 }}>✕</button>
              </span>
            ))}
          </div>
          <button className="cta-btn" onClick={() => setView("compare")}>Compare Now</button>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 40px", marginTop: 80, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 18, fontWeight: 900, background: "linear-gradient(135deg, #C8973A, #F5D070)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CardWise Canada</span>
        <span className="dm" style={{ fontSize: 12, color: "#444" }}>For informational purposes only. Rates subject to change. © 2025</span>
      </footer>
    </div>
  );
}
