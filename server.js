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
      ]),
      db.rating.bulkCreate([
        {puntuaciones:1},
        {puntuaciones:2},
        {puntuaciones:3},
        {puntuaciones:4},
        {puntuaciones:5} 
      ])
    ).then(
       db.product.bulkCreate([
      {name: "FIFA 2023", price: 44.50, image: "https://imgmedia.libero.pe/652x359/libero/original/2023/05/16/6463f23b6cb1bd4fc14c8442.webp", description:"Juego insipirado en el deporte mas fabuloso del mundo, EL FUTBOL. Ahora con su ultima entrega no podras perderte los ultimos cambios que ha vivido este deporte este ultimo año.", categoryId:1},
      {name: "PS5", price: 344.50, image: "https://as01.epimg.net/meristation/imagenes/2020/11/18/noticias/1605740083_818108_1605740214_noticia_normal.jpg", description: "Jugar no tiene límites. Experimenta cargas superrápidas gracias a una unidad de estado sólido (SSD) de alta velocidad, una inmersión más profunda con retroalimentación háptica, gatillos adaptables y audio 3D, además de una nueva generación de increíbles juegos de PlayStation®.", categoryId:2},
      {name: "Teclado Gaming mini mecánico Ozone ", price: 72.99, image: "https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/ozone/4_TECLADOS/tactical/galeria/teclado-gaming-mini-mecanico-ozone-tactical-galeria-2.jpg", description:"Ozone Tactical es un teclado mini mecánico en formato 65 %. Compatible con Windows, Mac, IOS, Linux y Android, este teclado posee un tamaño ideal que se adapta a cualquier setup, perfecto para usarlo tanto en casa como en la oficina y llevártelo donde quiera que vayas, al ser muy cómodo de transportar. Ozone Tactical es un teclado ligero y elegante perfecto para un uso eficaz del espacio. Layout americano.", categoryId:3},
      {name: "COMBO GAMING PREMIUM MCPX", price: 144.90, image: "https://cdn.nedis.com/images/products_high_res/GCK41100BKUS_P51.JPG", description: "En este combo no puedes dejarlo pasar, contiene unos auriculares, teclado y monitor RGX con luces RGB de la ultima calidad y lo ultimo en el mercado",categoryId:4},
      {name: "GTX GeForce RTX 2090", price: 44.50, image: "https://thumb.pccomponentes.com/w-530-530/articles/23/233569/1.jpg", description:"Frequencies: Base Clock Up to 2153MHz; Game Clock Up to 2486MHz; Boost Clock Up to 2689MHz. Gracias a su tecnología tiene nitidez en los detalles más pequeños.", categoryId:5},
    ]),
      db.ProductRating.bulkCreate([
        {ProductId:1,RatingId:4},
        {ProductId:1,RatingId:5},
        {ProductId:1,RatingId:3},
        {ProductId:2,RatingId:4},
        {ProductId:2,RatingId:3},
        {ProductId:3,RatingId:2},
        {ProductId:5,RatingId:1},
        {ProductId:5,RatingId:1},
      ])
    ).then(
      db.comentary.bulkCreate([
        {description: "porfin, estaba esperando con ansias esta actualizacion de graficos", productId:1},
        {description: "porfin, estaba esperando con ansias esta actualizacion de graficos2", productId:1},
        {description: "igual de buenas que las otras plays", productId:2},
      ])
    )
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
