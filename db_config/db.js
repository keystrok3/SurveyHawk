
/**
 * Postgres database configuration set up in Sequelize ORM
 * 
*/

const { Sequelize } = require("sequelize");

const sequelize_orm = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "postgres"
    }
);


(async () => {
    try {
        await sequelize_orm.authenticate();
        console.log("Database connection successful");
    } catch (error) {
        console.log(`Database connection failed: ${error}`);
    }
})()

module.exports = { sequelize_orm };