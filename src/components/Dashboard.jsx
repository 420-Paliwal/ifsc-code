import IfscLookup from "./IfscLookup";

export default function Dashboard({ setUser }) {
  return (
    <div className="container">
      <button onClick={() => {
        localStorage.removeItem("user");
        setUser(null);
      }}>
        Logout
      </button>

      <hr />
      <IfscLookup />
    </div>
  );
}
