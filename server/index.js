const express = require("express");
const morgan = require("morgan");

const HomeRoutes = require("./src/routes/home");

const app = express();

app.set("case sensitive routing", true);
app.set("appName", "Meli-backend");
app.set("port", 4500);

// It's needed to understand body
app.use(morgan("dev"));
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(HomeRoutes);

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
