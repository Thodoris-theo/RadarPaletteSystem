document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const lastName = document.getElementById('last-name').value;
    const amka = document.getElementById('amka').value;
    const status = document.getElementById('status').value;

    setTimeout(() => {
        document.getElementById('appointment-results').innerHTML = `
            <p>Search results for appointments:</p>
            <ul>
                <li>Appointment 1</li>
                <li>Appointment 2</li>
            </ul>
        `;
    }, 500);
});
