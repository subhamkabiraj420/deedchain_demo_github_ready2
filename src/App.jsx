import { useState } from "react";

function App() {
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState("");
  const [value, setValue] = useState(null);

  const evaluateProperty = () => {
    let basePrice = 3000; // ₹ per sq ft (dummy base rate)

    // Adjust price by location
    if (location.toLowerCase().includes("city")) basePrice += 2000;
    if (location.toLowerCase().includes("suburb")) basePrice -= 500;

    // Adjust price by amenities
    if (amenities.toLowerCase().includes("pool")) basePrice += 1000;
    if (amenities.toLowerCase().includes("parking")) basePrice += 500;

    const estimatedValue = parseInt(area || 0) * basePrice;
    setValue(estimatedValue);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        🏠 DeedChain - Property Evaluation
      </h1>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Evaluate Your Property</h2>

        <input
          type="number"
          placeholder="Enter Area (sq ft)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          type="text"
          placeholder="Enter Location (e.g., City Center, Suburb)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <input
          type="text"
          placeholder="Enter Amenities (e.g., Pool, Parking)"
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <button
          onClick={evaluateProperty}
          className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
        >
          Evaluate
        </button>
      </div>

      {/* Result Section */}
      {value !== null && (
        <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Estimated Value:</h3>
          <p className="text-2xl font-semibold">₹ {value.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
