document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users-container');

    // Fetch users using Async/Await
    async function fetchUsersWithAsyncAwait() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            displayUsers(users, 'Fetched using Async/Await:');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Fetch users using Promises
    function fetchUsersWithPromises() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                displayUsers(users, 'Fetched using Promises:');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Fetch users using Callbacks
    function fetchUsersWithCallbacks(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(null, JSON.parse(xhr.responseText));
            } else {
                callback(new Error('Network response was not ok'));
            }
        };
        xhr.onerror = function() {
            callback(new Error('Network error occurred'));
        };
        xhr.send();
    }

    // Display users on the page
    function displayUsers(users, title) {
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        usersContainer.appendChild(titleElement);

        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.className = 'user';

            const userName = document.createElement('div');
            userName.className = 'user-name';
            userName.textContent = user.name;

            const userEmail = document.createElement('div');
            userEmail.textContent = user.email;

            userElement.appendChild(userName);
            userElement.appendChild(userEmail);

            usersContainer.appendChild(userElement);
        });
    }

    // Fetch and display users using all three methods
    fetchUsersWithAsyncAwait();
    fetchUsersWithPromises();
    fetchUsersWithCallbacks((error, users) => {
        if (error) {
            console.error('There was a problem with the fetch operation:', error);
        } else {
            displayUsers(users, 'Fetched using Callbacks:');
        }
    });
});
