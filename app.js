/**
 * API Controller
 */

const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Setup
let corsURLs = process.env.CORS_URLS.split(',');

app.use(cors({
    credentials: true,
    origin: corsURLs
}));

