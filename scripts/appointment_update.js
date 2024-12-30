document.getElementById('update-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const appointmentId = document.getElementById('update-appointment-id').value;
    const newDate = document.getElementById('update-appointment-date').value;
    const status = document.getElementById('update-status').value;

    setTimeout(() => {
        document.getElementById('update-results').innerText = `Appointment ${appointmentId} updated to ${new Date(newDate).toLocaleString()} with status ${status}`;
    }, 500);
});
