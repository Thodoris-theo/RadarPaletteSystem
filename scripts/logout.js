document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logout-button').addEventListener('click', function () {
        fetch('/logout', {
            method: 'POST',
            credentials: 'same-origin',
        })
            .then(() => {
                window.location.href = '/login'; 
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    });
});
