const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User.model.js")(sequelize, Sequelize);
db.category = require("./categories.model.js")(sequelize, Sequelize);
db.product = require("./products.model.js")(sequelize, Sequelize);
db.comentary = require("./comentary.model.js")(sequelize, Sequelize);
db.rating = require("./Rating.model.js")(sequelize, Sequelize);
db.ProductRating = require("./productRating.model.js")(sequelize, Sequelize);

//las relaciones de las tablas
db.product.belongsTo(db.category, { foreignKey: 'categoryId' });
db.comentary.belongsTo(db.product, { foreignKey: 'productId' });
// db.product.belongsToMany(db.rating, { through: db.ProductRating }); 
// db.rating.belongsToMany(db.product, { through: db.ProductRating  });
db.product.hasMany(db.ProductRating)
db.ProductRating.belongsTo(db.product)
db.rating.hasMany(db.ProductRating)
db.ProductRating.belongsTo(db.rating)



module.exports = db;
