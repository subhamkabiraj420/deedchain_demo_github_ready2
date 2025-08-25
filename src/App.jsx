import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ethers } from "ethers";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({ setLocationCoords }) {
  useMapEvents({
    click(e) {
      setLocationCoords([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function App() {
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState("");
  const [coords, setCoords] = useState(null);
  const [value, setValue] = useState(null);
  const [blockchainHash, setBlockchainHash] = useState(null);

  const evaluateProperty = async () => {
    let basePrice = 3000;

    if (location.toLowerCase().includes("city")) basePrice += 2000;
    if (location.toLowerCase().includes("suburb")) basePrice -= 500;

    if (amenities.toLowerCase().includes("pool")) basePrice += 1000;
    if (amenities.toLowerCase().includes("parking")) basePrice += 500;

    if (coords) basePrice += 1500; // Bonus if user selects a map location

    const estimatedValue = parseInt(area || 0) * basePrice;
    setValue(estimatedValue);

    // Simulate storing on blockchain
    const fakeHash = ethers.utils.id(
      `${area}-${location}-${amenities}-${coords}-${estimatedValue}`
    );
    setBlockchainHash(fakeHash);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        🏠 DeedChain - Property Evaluation
      </h1>

      {/* Input Form */}
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

      {/* Map Section */}
      <div className="mt-6 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-2">📍 Select Property Location</h3>
        <MapContainer
          center={[28.6139, 77.209]} // Default: New Delhi
          zoom={12}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coords && <Marker position={coords}></Marker>}
          <LocationMarker setLocationCoords={setCoords} />
        </MapContainer>
      </div>

      {/* Result Section */}
      {value !== null && (
        <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl font-bold">Estimated Value:</h3>
          <p className="text-2xl font-semibold">₹ {value.toLocaleString()}</p>

          {blockchainHash && (
            <div className="mt-2 text-xs break-words">
              <strong>DeedChain TX Hash:</strong> {blockchainHash}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
