import { useState } from "react";

export default function App() {
  const [view, setView] = useState("landing");

  if (view === "landing") {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h1>OFM Chat OS</h1>
        <p>Run your chats like a system. Not a gamble.</p>
        <button onClick={() => setView("login")}>Access Platform</button>
      </div>
    );
  }

  if (view === "login") {
    return (
      <div style={{ padding: 40 }}>
        <h2>Select Role</h2>
        <button onClick={() => setView("owner")}>Agency Owner</button><br /><br />
        <button onClick={() => setView("manager")}>Manager</button><br /><br />
        <button onClick={() => setView("chatter")}>Chatter</button>
      </div>
    );
  }

  if (view === "owner") {
    return (
      <div style={{ padding: 40 }}>
        <h2>Owner Dashboard</h2>
        <ul>
          <li>Revenue (7d): $48,320</li>
          <li>Conversion: 4.6%</li>
          <li>Avg Time to Sale: 38 min</li>
          <li>Active Models: 12</li>
        </ul>
        <button onClick={() => setView("billing")}>Billing</button>
      </div>
    );
  }

  if (view === "manager") {
    return (
      <div style={{ padding: 40 }}>
        <h2>Manager Alerts</h2>
        <p>⚠️ Link dropped too early</p>
        <p>⚠️ Persona mismatch</p>
      </div>
    );
  }

  if (view === "chatter") {
    return (
      <div style={{ padding: 40 }}>
        <h2>Chatter Assist</h2>
        <p><strong>Fan:</strong> you’re cute 😏 what are you up to?</p>
        <p><strong>Stage:</strong> Flirting | <strong>Lead:</strong> Buyer</p>
        <button>Haha trouble 😅 just relaxing</button><br /><br />
        <button>You always this smooth?</button><br /><br />
        <button>Careful, you’ll make me blush 😌</button>
        <p style={{ color: "red" }}>🚫 Don’t drop link yet</p>
      </div>
    );
  }

  if (view === "billing") {
    return (
      <div style={{ padding: 40 }}>
        <h2>Billing</h2>
        <p>$99 / model / month</p>
        <p>$499 setup fee</p>
        <button>Proceed to Secure Payment</button>
      </div>
    );
  }
}
