//dont work

const db = require('../db_connect'); // Make sure to replace './db' with the actual path to your database connection file

const getAppointments = (req, res) => {
    // Extract query parameters
    const { start_date, end_date, last_name, amka, status } = req.query;

    // Construct SQL query
    let sql = `SELECT appointments.id, appointments.date, patients.amka AS patient, appointments.status 
               FROM appointments 
               INNER JOIN patients ON appointments.patient_id = patients.user_id 
               WHERE 1`;

    const queryParams = [];

    // Add conditions based on provided parameters
    if (start_date && end_date) {
        sql += ` AND DATE(appointments.date) BETWEEN ? AND ?`;
        queryParams.push(start_date, end_date);
    }
    if (last_name) {
        sql += ` AND users.lastName LIKE ?`;
        queryParams.push(`%${last_name}%`);
    }
    if (amka) {
        sql += ` AND patients.amka = ?`;
        queryParams.push(amka);
    }
    if (status) {
        sql += ` AND appointments.status = ?`;
        queryParams.push(status);
    }

    // Execute the SQL query
    db.query(sql, queryParams, (err, results) => {
        if (err) {
            console.error('Error executing SQL:', err);
            res.status(500).json({ error: 'Error fetching appointments. Please try again later.' });
            return;
        }
        res.json(results);
    });
};

module.exports = getAppointments;