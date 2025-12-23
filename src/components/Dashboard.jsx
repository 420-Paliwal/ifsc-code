import IfscLookup from "./IfscLookup";

export default function Dashboard({ setUser }) {
  return (
    <div className="container">
      <div className="main">
        <button onClick={() => {
        localStorage.removeItem("user");
        setUser(null);
      }}>
        Logout
      </button>
      </div>
      <IfscLookup/>
    </div>
  );
}
