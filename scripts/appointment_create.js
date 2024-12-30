document.getElementById('create-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const patientName = document.getElementById('patient-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const doctor = document.getElementById('doctor').value;

    setTimeout(() => {
        document.getElementById('create-results').innerText = `Appointment created for ${patientName} with Dr. ${doctor} on ${new Date(appointmentDate).toLocaleString()}`;
    }, 500);
});
