import { render } from "react-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const WrappedDetails = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("#3d90ff");
  return (
    <StrictMode>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/" className="logo">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<WrappedDetails />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
