const express = require('express');
const noteRouter = require('./note.route');

const restAPI = (app) => {
    const router = express.Router();
    router.use('/note', noteRouter);
    app.use('/api/v1', router);
}

module.exports = restAPI;