import React, { useState } from "react";

export default function App() {
  const [tokens, setTokens] = useState(0);
  const [income, setIncome] = useState(0);

  const buyToken = () => {
    setTokens(tokens + 1);
    setIncome(income + 10); // mock income split
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🏠 DeedChain Demo</h1>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
        <h2>Property: Beach Villa</h2>
        <p>Location: Goa, India</p>
        <p>Price per Token: $100</p>
        <button onClick={buyToken}>Buy Token</button>
        <p>✅ Your Tokens: {tokens}</p>
        <p>💰 Income Earned: ${income}</p>
      </div>
    </div>
  );
}
