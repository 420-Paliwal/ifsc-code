import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isSignup, setIsSignup] = useState(false);

  if (!user) {
    return (
      <>
        {isSignup ? (
          <Signup setUser={setUser} />
        ) : (
          <Login setUser={setUser} />
        )}

        <p style={{ textAlign: "center" }}>
          {isSignup ? "Already have an account?" : "New user?"}
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </>
    );
  }

  return <Dashboard setUser={setUser} />;
}

export default App;
