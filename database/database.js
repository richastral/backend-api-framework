const mongoose = require('mongoose')

const ConnectDatabase = () => {

    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
        (data) => {
            console.log(`Mongodb connected with server ${data.connection.host}`)
        }
    )
}
module.exports = ConnectDatabase