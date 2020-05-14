const express = require("express");
const app = express();
const homeRoutes = require("./routes/home");
const heroesRoutes = require('./routes/heroes');
const contactoRoutes = require('./routes/contacto');

app.listen(3030, () => console.log("Running on 3030"));

app.use("/", homeRoutes)
app.use('/heroes', heroesRoutes)
app.use('/contacto', contactoRoutes)