import express, { Express } from "express";
import path from "path";
require("dotenv").config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 8050;

app.use(express.json());
app.use(express.static(path.join("dist")));

app.get("/", (req, res) => {
  // res.sendFile("/dist/index.html");
  res.send("hi");
});

app.listen(port, () => console.log(`[ server ]   - listening on port ${port}`));
