import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
        <footer>
          <a
            href="https://github.com/cigdembhceci/react-weatherapp-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          coded by Cigdem B
        </footer>
      </div>
    </div>
  );
}
