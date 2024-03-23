/**
 * Main entry point for API
 */
require('dotenv').config();
const app = require('./app')
const http = require("http");
const ConnectDatabase = require('./database/database');

//connecting to database
ConnectDatabase()

process.on('uncaughtException', (err) => {
    // TODO: Remove shutdown and provider error
    console.log(`Error: ${err.message}`)
    // console.log('Shutting down the server due to uncaught exception')
    process.exit(1)
})

let server = http.createServer(app);

server = server.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on port http://localhost:${ process.env.API_PORT }`)
})