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
      {name: "Pack gaming mars", price: 84.90, image: "https://cdn2.depau.es/articulos/448/448/fixed/art_tac-set%20mrcp1_1.jpg", description: "Este combo de teclado, ratón, alfombrilla y auriculares es el pack ideal para completar un equipamiento gaming. El MRCP1 es el set ideal para jugar: sus productos ofrecen calidad y sencillez, además son los accesorios de PC necesarios a satisfacer las necesidades de todo gamer. Pensado especialmente por Mars Gaming para ahorrar tiempo a los jugadores, ¡el MRCP1 es todo lo que necesitas para tus sesiones de juego!",categoryId:4},
      {name: "GTX GeForce RTX 2090", price: 44.50, image: "https://thumb.pccomponentes.com/w-530-530/articles/23/233569/1.jpg", description:"Frequencies: Base Clock Up to 2153MHz; Game Clock Up to 2486MHz; Boost Clock Up to 2689MHz. Gracias a su tecnología tiene nitidez en los detalles más pequeños.", categoryId:5},
      {name: "The Legend Of Zelda: Breath Of The Wild", price: 64.50, image: "https://tierragamer.com/wp-content/uploads/2019/06/Zelda-Breath-Wild-2-Portada.jpg", description:"Olvida todo lo que sabes sobre los juegos de The Legend of Zelda. Entra en un mundo de descubrimientos, exploración y aventura en The Legend of Zelda: Breath of the Wild, un juego de la serie que rompe con las convenciones. Viaja por prados, bosques y cumbres montañosas para descubrir qué ha sido del asolado reino de Hyrule en esta aventura a cielo abierto.", categoryId:1},
      {name: "Star Wars Jedi: Survivor", price: 45.80, image: "https://cdn.akamai.steamstatic.com/steam/apps/1774580/capsule_616x353.jpg?t=1684344870", description:"La historia de Cal Kestis continúa en Star Wars Jedi: Survivor™, un juego de acción y aventuras en tercera persona desarrollado por Respawn Entertainment en colaboración con Lucasfilm Games.", categoryId:1},
      {name: "Street Fighter 6", price: 40.50, image: "https://estaticos-cdn.elperiodico.com/clip/b4711ae5-c327-4916-960a-b3a70ce553c6_alta-libre-aspect-ratio_default_0.jpg", description:"¡Aquí llega el peso pesado de Capcom! Street Fighter™ 6 sale a la venta en todo el mundo el 2 de junio de 2023, y trae consigo una nueva evolución de la saga Street Fighter™. Street Fighter 6", categoryId:1},
      {name: "Spider-Man Remastered", price: 24.39, image: "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808", description:"Marvel's Spider-Man Remastered para PC es una versión renovada del juego de acción y aventura de 2018.", categoryId:1},
      {name: "Age of Empires II: Definitive Edition - Return of Rome", price: 10.90, image: "https://cdn.akamai.steamstatic.com/steam/apps/2141580/capsule_616x353.jpg?t=1685574227", description:"Te damos la bienvenida a Regreso de Roma, un paquete de expansión completamente nuevo que incorpora Age of Empires, el juego que lo empezó todo, a Age of Empires II: Definitive Edition como una nueva experiencia independiente.", categoryId:1},
      {name: "Total War: Warhammer III - Forge of the Chaos Dwarfs", price: 35.75, image: "https://cdn1.epicgames.com/offer/dda64c2956b54f1ba3cd97f6aaee775f/EGS_TotalWarWARHAMMERIIIForgeoftheChaosDwar_SEGA_DLC_S1_2560x1440-c1df54c623a75518d68184d4b1994ea6", description:"The Forge of the Chaos Dwarfs campaign pack introduces a new brutal race, the Chaos Dwarfs, into Total War: WARHAMMER III, usable in both the Realm of Chaos and Immortal Empires campaigns.", categoryId:1},
      {name: "Nintendo Switch", price: 250.50, image: "https://m.media-amazon.com/images/I/41g40oknL0L._AC_UF1000,1000_QL80_.jpg", description: "Nintendo Switch: Cuando quieras, donde quieras, como quieras. ¿Alguna vez has dejado un juego por falta de tiempo? La consola Nintendo Switch puede transformarse para adaptarse a tu situación, de modo que puedes jugar a los juegos que tú quieras por muy ocupado que estés. Es una nueva era en la que no tienes que adaptar tu vida a los videojuegos: ahora es la consola la que se adapta a tu vida. Disfruta de tus juegos cuando quieras, donde quieras y como quieras con modos de juego flexibles.", categoryId:2},
      {name: "XBOX-ONE", price: 320.50, image: "https://m.media-amazon.com/images/I/510LV3K6PnL._AC_UF1000,1000_QL80_.jpg", description: "Xbox One une los mejores juegos exclusivos, como Titanfall y Halo, que ofrecen las experiencias multijugador y de entretenimiento más avanzadas y que no encontrará en ningún otro lugar.", categoryId:2},
      {name: "Auriculares Gaming PS5 ", price: 22.99, image: "https://m.media-amazon.com/images/I/71jCPGfU3oL._AC_UF1000,1000_QL80_.jpg", description:"Este auricular para juegos con conector de audio de 3.5 mm es compatible con controladores de PC, PS4 y Xbox One (tenga en cuenta que los modelos más nuevos tienen un conector para auriculares, los modelos más antiguos requieren un adaptador), Nintendo Switch (audio), Nintendo New 3DS LL / 3DS ( audio), Nintendo 3DS LL / 3DS (audio). Ordenador portátil, PSP, tableta, iPad, ordenador, teléfono móvil.", categoryId:3},
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
