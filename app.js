const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Service = require("./service");
const Router = require("./router");
const exphbs = require("express-handlebars");
const happyRoutesInfo =
  require("./routeInfo").happyRoutesInfo;
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
const PORT = 3001;

const happyService = new Service(knex);
const happyRouter = new Router(happyService);
app.use(cors());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use("/", happyRouter.router());

app.get("/", (request, response) => {
  response.render("intro", {
    happyRoutesInfo: happyRoutesInfo,
  });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
