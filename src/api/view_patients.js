const db = require('../db_connect');

const getPatients = (startDate, endDate, healthIssue, callback) => {
    let query = `
        SELECT appointment_id, record_id, creation_date, detected_health_issues, treatment
        FROM appointment_history
        WHERE 1=1`;

    const queryParams = [];

    if (startDate) {
        query += ' AND DATE(creation_date) >= ?';
        queryParams.push(startDate);
    }

    if (endDate) {
        query += ' AND DATE(creation_date) <= ?';
        queryParams.push(endDate);
    }

    if (healthIssue) {
        query += ' AND detected_health_issues LIKE ?';
        queryParams.push(`%${healthIssue}%`);
    }

    db.query(query, queryParams, (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

module.exports = getPatients;