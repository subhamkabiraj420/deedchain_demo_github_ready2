import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app" style={styles.page}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <h2 style={styles.logo}>⚡ DeedChain</h2>
        <nav>
          <a href="#about" style={styles.link}>About</a>
          <a href="#features" style={styles.link}>Features</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to DeedChain</h1>
        <p>
          A blockchain-powered solution for secure & transparent property
          transactions.
        </p>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Clicked {count} times 🚀
        </button>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>
          DeedChain is a decentralized app that brings trust and automation to
          land registry and property verification.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>✔️ Blockchain-based ownership</li>
          <li>✔️ Fraud prevention</li>
          <li>✔️ Easy property transfers</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} DeedChain. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Simple inline styles
const styles = {
  page: { fontFamily: "Arial, sans-serif", margin: 0, padding: 0 },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#222",
    color: "#fff",
  },
  logo: { margin: 0 },
  link: { color: "#fff", marginLeft: "1rem", textDecoration: "none" },
  hero: {
    textAlign: "center",
    padding: "4rem 2rem",
    background: "#f5f5f5",
  },
  button: {
    marginTop: "1rem",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  section: { padding: "2rem", textAlign: "center" },
  footer: {
    marginTop: "2rem",
    textAlign: "center",
    padding: "1rem",
    background: "#222",
    color: "#fff",
  },
};
