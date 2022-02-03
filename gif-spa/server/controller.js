const users = require(`./db.json`)
const Sequelize = require('sequelize')
let globalId = 4

const sequelize = new Sequelize(`postgres://kahmzrimptgonw:bb016cfd988d038efa9dfe01652386afba840f482063e0af48095a6070f71dfb@ec2-54-157-15-228.compute-1.amazonaws.com:5432/d5p23r3vqu9act`, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


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