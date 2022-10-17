import { Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";
import { SearchParams } from "./SearchParams";
import WrappedDetails from "./Details";

const App = () => {
  const theme = useState("#3d90ff");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <header>
          <Link to="/" className="logo">
            Adopt Me!
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<WrappedDetails />} />
        </Routes>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
