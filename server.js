const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync({ force: true })
  .then(() => {
    db.user.bulkCreate([
      {userName:"admin", Password: 123},
    ]).then(
      db.category.bulkCreate([
        {name:"games"},
        {name:"console"},
        {name:"accessory"},
        {name:"packs"},
        {name:"hardware"} 
      ])
    ).then(
       db.product.bulkCreate([
      {name: "FIFA 2023", price: 44.50, image: "https://imgmedia.libero.pe/652x359/libero/original/2023/05/16/6463f23b6cb1bd4fc14c8442.webp", categoryId:1},
      {name: "PS5", price: 344.50, image: "https://as01.epimg.net/meristation/imagenes/2020/11/18/noticias/1605740083_818108_1605740214_noticia_normal.jpg", categoryId:2},
      {name: "Teclado Gaming mini mecánico Ozone ", price: 72.99, image: "https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/ozone/4_TECLADOS/tactical/galeria/teclado-gaming-mini-mecanico-ozone-tactical-galeria-2.jpg", categoryId:3},
      {name: "COMBO GAMING PREMIUM MCPX", price: 144.90, image: "https://cdn.nedis.com/images/products_high_res/GCK41100BKUS_P51.JPG", categoryId:4},
      {name: "GTX GeForce RTX 2090", price: 44.50, image: "https://thumb.pccomponentes.com/w-530-530/articles/23/233569/1.jpg", categoryId:5},
    ]))
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

require("./app/routes/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
