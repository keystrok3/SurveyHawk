const bcrypt = require('bcrypt');

const User = require("../models/user");


/**
 * Creates a new user in the database using methods imported from models/user.js
 * input: firstName, surname, email, password, role(student OR examiner)
*/
const register = async (req, res, next) => {

    const { firstName, surname, email, password, role } = req.body;
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const new_user = await User.create({ 
            firstName: firstName, 
            surname: surname, 
            email: email, 
            password: hashedPassword, 
            role: role 
        });

        res.status(201).json({ success: true, new_user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error });
    }
};


module.exports = { register }