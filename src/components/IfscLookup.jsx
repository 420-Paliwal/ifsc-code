import { useState } from "react";

function IfscLookup() {
  const [ifsc, setIfsc] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchBankDetails = async () => {
    setError("");
    setData(null);

    try {
      const res = await fetch(`https://ifsc.razorpay.com/${ifsc}`);
      if (!res.ok) throw new Error("Invalid IFSC Code");

      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>IFSC Code Lookup</h2>

      <input
        type="text"
        placeholder="Enter IFSC Code"
        value={ifsc}
        onChange={(e) => setIfsc(e.target.value.toUpperCase())}
      />

      <button onClick={fetchBankDetails}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <p><b>Bank:</b> {data.BANK}</p>
          <p><b>Branch:</b> {data.BRANCH}</p>
          <p><b>City:</b> {data.CITY}</p>
          <p><b>District:</b> {data.DISTRICT}</p>
          <p><b>State:</b> {data.STATE}</p>
          <p><b>MICR:</b> {data.MICR}</p>
        </div>
      )}
    </div>
  );
}

export default IfscLookup;
