const path = require('path');
const { authMiddleware, roleMiddleware } = require('./middlewares');
const { insertUser, loginUser } = require('./api/user_create');
const getPatients = require('./api/getPatients');
const { updatePatient, deletePatientById } = require('./api/update_patient');
const { getAppointments, cancelAppointment, createAppointment } = require('./api/appointments');

module.exports = function(app) {
    // Routes for login and logout
    app.get('/login', (req, res) => res.render(path.join(__dirname, '../view', 'login.ejs')));
    app.post('/login', loginUser);
    app.post('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    });

    app.get('/dashboard', authMiddleware, (req, res) => {
        const user = req.session.user;
        res.render('patient_dash', { user });
    });

    app.get('/api/user', authMiddleware, (req, res) => {
        res.json(req.session.user);
    });

    app.post('/api/appointments', authMiddleware, createAppointment);
    app.put('/api/appointments/:id', authMiddleware, updatePatient);
    app.delete('/api/appointments/:id', authMiddleware, cancelAppointment);
    
    app.get('/api/view_patients', authMiddleware, roleMiddleware('patient'), getPatients);
    app.get('/api/search_patients', getPatients); 
    
    app.put('/api/doctor/patients/update/:identityNumber', authMiddleware, roleMiddleware('doctor'), updatePatient);
    app.delete('/api/doctor/patients/:userId/delete', authMiddleware, roleMiddleware('doctor'), deletePatientById);
};
