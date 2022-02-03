const users = require(`./db.json`)
const Sequelize = require('sequelize')
require("dotenv").config();
const {DATABASE_URL} = process.env
let globalId = 4

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            require:true,
            rejectUnauthorized: false
        },
    },
});


module.exports = {
    getUsers: (req,res) => res.status(200).send(users),
    getAllFavs: (req, res) => {
        sequelize.query('select * from favoritetest')
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    createUser: (req,res) => {
        let { id, userName, password} = req.body
        let newUser = {
            id: globalId,
            userName,
            password,
            favorites
        }
        users.push(newUser)
        res.status(200).send(houses)
        globalId++
    },
    
}