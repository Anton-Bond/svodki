const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersRoutes = require('./routes/usersRouter');
const authRoutes = require('./routes/authRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());

// ===================== ROUTES ====================

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

// =================== END ROUTES ==================

module.exports = app;
