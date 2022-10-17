import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;
// Best DX would be to serve using hot reloading, otherwise to view changes made you'll have to stop and start server manually
// Research and implement after tut: https://parceljs.org/features/development/
// Also research other SSR techniques with react

const html = fs.readFileSync("dist/frontend/index.html").toString();
// Using readFileSync, isnt recomeded unless you're starting up your server, it stops invocation of the rest of the code, dont do this in the response cycle to the user

const parts = html.split("No rendered content");
// This parses a string, spliting on text: "not rendered"
// This approach is fragile

// Makes new server
const app = express();

app.use("/frontend", express.static("dist/frontend"));
// Correctly serves all static assets

app.use((req, res) => {
  const reactMarkup = (
    // Here you can write jsx
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});

console.log(`listening on https://localhost:${PORT}`);
app.listen(PORT);

// Learn Remix
