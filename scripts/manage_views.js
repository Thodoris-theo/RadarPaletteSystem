// Handle switching views for appointments and patients
document.addEventListener('DOMContentLoaded', function () {
    const appointmentsView = document.getElementById('appointments-view');
    const patientsView = document.getElementById('patients-view');
    const manageAppointmentsBtn = document.getElementById('manage-appointments-btn');
    const managePatientsBtn = document.getElementById('manage-patients-btn');

    manageAppointmentsBtn.addEventListener('click', function () {
        appointmentsView.style.display = 'block';
        patientsView.style.display = 'none';

        console.log('Appointments view activated');
    });

    managePatientsBtn.addEventListener('click', function () {
        appointmentsView.style.display = 'none';
        patientsView.style.display = 'block';

        const existingScript = document.getElementById('patients-data-script');
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'patients-data-script';
        script.src = '../src/api/s_view_patients.js';
        document.body.appendChild(script);

        console.log('Patients view activated and script loaded');
    });
});
