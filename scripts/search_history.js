function searchHistory() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const healthIssue = document.getElementById('healthIssue').value;

    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            startDate,
            endDate,
            healthIssue,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.length > 0) {
                data.forEach((record) => {
                    const recordDiv = document.createElement('div');
                    recordDiv.innerHTML = `
                        <p>Appointment ID: ${record.appointment_id}</p>
                        <p>Record ID: ${record.record_id}</p>
                        <p>Creation Date: ${record.creation_date}</p>
                        <p>Detected Health Issues: ${record.detected_health_issues}</p>
                        <p>Treatment: ${record.treatment}</p>
                        <hr>
                    `;
                    resultsDiv.appendChild(recordDiv);
                });
            } else {
                resultsDiv.innerHTML = '<p>No records found.</p>';
            }
        })
        .catch((error) => console.error('Error fetching appointment history:', error));
}
