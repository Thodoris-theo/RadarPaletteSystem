document.addEventListener('DOMContentLoaded', () => {
    const startDateSelect = document.getElementById('startDate');
    const endDateSelect = document.getElementById('endDate');
    const healthIssueSelect = document.getElementById('healthIssue');

    const generateDateOptions = (selectElement) => {
        const today = new Date();
        for (let i = 0; i < 365; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const option = document.createElement('option');
            option.value = date.toISOString().split('T')[0];
            option.textContent = date.toISOString().split('T')[0];
            selectElement.appendChild(option);
        }
    };

    generateDateOptions(startDateSelect);
    generateDateOptions(endDateSelect);

    const healthIssues = ['Diabetes', 'Hypertension', 'Asthma', 'Allergies'];
    healthIssues.forEach(issue => {
        const option = document.createElement('option');
        option.value = issue;
        option.textContent = issue;
        healthIssueSelect.appendChild(option);
    });
});
