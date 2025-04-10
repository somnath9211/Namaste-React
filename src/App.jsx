import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import { SearchProvider } from "./Context/SearchContext";



const AppLayout = () => {
  return (
    <div className="app-layout">
      <SearchProvider>
        <header>
          <Header />
        </header>
        <main>
          <Body />
        </main>
        <footer>
          <p>&copy; 2023 My App</p>
        </footer>
      </SearchProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


