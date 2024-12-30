
const db = require('../db_connect');

const cancelAppointment = (req, res) => {
    const { appointmentId } = req.body;

    // Check if appointment can be cancelled
    const checkQuery = 'SELECT status FROM appointments WHERE id = ?';
    db.query(checkQuery, [appointmentId], (err, result) => {
        if (err) {
            console.error('Error querying database:', err);
            res.json({ success: false });
            return;
        }

        if (result.length === 0) {
            res.json({ success: false, message: 'Appointment not found.' });
        } else {
            const status = result[0].status;
            if (status !== 'attended' && status !== 'completed') {
                // Appointment can be cancelled
                const cancelQuery = 'UPDATE appointments SET status = ? WHERE id = ?';
                db.query(cancelQuery, ['cancelled', appointmentId], (err, result) => {
                    if (err) {
                        console.error('Error cancelling appointment:', err);
                        res.json({ success: false });
                    } else {
                        res.json({ success: true });
                    }
                });
            } else {
                res.json({ success: false, message: 'Appointment cannot be cancelled as it has already been attended or completed.' });
            }
        }
    });
};

module.exports = {
    cancelAppointment
};
