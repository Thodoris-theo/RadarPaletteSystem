document.addEventListener('DOMContentLoaded', function () {
    // Fetch user data using fetch API
    fetch('/api/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin', 
    })
        .then((response) => response.json())
        .then((data) => {
            const user = data.user;

            if (user.role === 'patient') {
                const userDataHtml = `
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>First Name: ${user.firstName}</p>
                    <p>Last Name: ${user.lastName}</p>
                    <p>Identity Number: ${user.identity_number}</p>
                    <p>Role: ${user.role}</p>
                `;

                document.getElementById('userData').innerHTML = userDataHtml;
            } else {
                document.getElementById('userData').innerHTML =
                    '<p>You are not authorized to view this information.</p>';
            }
        })
        .catch((error) => {
            console.error('Error fetching user profile:', error);
            document.getElementById('userData').innerHTML =
                '<p>Error fetching user profile.</p>';
        });
});
