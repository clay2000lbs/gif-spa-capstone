const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json())
app.use(cors());

const {
    getUsers,
    createUser,
    getAllFavs,
    // updateUser
} = require('./controller')
    

app.get(`/api/users`, getUsers)
app.get(`/api/favs`, getAllFavs)
app.post(`/api.users`, createUser)
// app.put(`/api.users:id`, updateUser)

app.listen(4000, () => console.log('API is running on http://localhost:4000'));