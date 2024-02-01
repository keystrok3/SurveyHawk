
/**
 * User model
 * 
 * 
*/

// const bcrypt = require('bcrypt');

const { Model, DataTypes } = require("sequelize");
const { sequelize_orm } = require('../db_config/db');


class User extends Model {

}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: DataTypes.STRING(128),
        allowNull: false,
    }
}, 

{
    // hooks: {
    //     beforeCreate: async () => {
    //         console.log('password: ', this.password)
    //         const hashedPassword = await bcrypt.hash(this.password, 10);
    //         this.password = hashedPassword;
    //     }
    // },
    sequelize: sequelize_orm,
    tableName: 'usertable',
    modelName: 'User'
});

User
.sync()
.then(() => console.log('Table created'))
.catch(console.error);

module.exports = User;


