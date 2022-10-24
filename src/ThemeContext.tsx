import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>(["#ff5765", () => {}]);
// this will work empty: createContext(), important to fill out when using typescript
export default ThemeContext;
