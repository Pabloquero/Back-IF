const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const path = require("path");
const Sequelize = require("sequelize");

const db = new Sequelize(
  "if_formularios",
  "admin_fuenzalida",
  "fuenzalida123",
  {
    host: "mysql.betafuenzalida.bylcomunicaciones.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Error: " + err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server iniciado en puerto ${PORT}`));
