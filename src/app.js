const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersRoutes = require('./routes/usersRouter');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

// ===================== ROUTES ====================
app.use('/api/users', usersRoutes);
// =================== END ROUTES ==================

module.exports = app;