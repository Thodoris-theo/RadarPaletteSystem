const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const { authMiddleware, roleMiddleware } = require('./src/middlewares');
const { insertUser, loginUser } = require('./src/api/user_create');
const getPatients = require('./src/api/getPatients');
const { updatePatient, deletePatientById } = require('./src/api/update_patient');
const { getAppointments, cancelAppointment, createAppointment } = require('./src/api/appointments');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: '4R7u3S&^5kT#8@p9A!j2WqZ',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
}));

// Routes
require('./src/routes')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
