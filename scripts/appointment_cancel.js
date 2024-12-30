document.getElementById('cancelAppointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const appointmentId = document.getElementById('appointmentId').value;

    setTimeout(() => {
        document.getElementById('cancel-results').innerText = `Appointment ${appointmentId} has been cancelled.`;
    }, 500);
});
