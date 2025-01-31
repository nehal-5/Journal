document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('entry-form');
    const entryTitle = document.getElementById('entry-title');
    const entryContent = document.getElementById('entry-content');
    const entryList = document.getElementById('entry-list');
    
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    
    const journalSection = document.getElementById('entries-section');
    const loginSection = document.getElementById('login-section');
    const mainContent = document.getElementById('main-content');

    // Predefined user credentials (For demonstration purposes only)
    const validUsername = 'nehal';
    const validPassword = 'taher';

    // Function to create an entry card
    function createEntry(title, content) {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        
        const entryTitle = document.createElement('h3');
        entryTitle.textContent = title;
        
        const entryContent = document.createElement('p');
        entryContent.textContent = content;

        entryDiv.appendChild(entryTitle);
        entryDiv.appendChild(entryContent);

        return entryDiv;
    }

    // Load entries from localStorage and display them
    function loadEntries() {
        const storedEntries = JSON.parse(localStorage.getItem('entries')) || [];
        storedEntries.forEach(entry => {
            const newEntry = createEntry(entry.title, entry.content);
            entryList.appendChild(newEntry);
        });
    }

    // Save entries to localStorage
    function saveEntries() {
        const entries = [];
        document.querySelectorAll('.entry').forEach(entryDiv => {
            const title = entryDiv.querySelector('h3').textContent;
            const content = entryDiv.querySelector('p').textContent;
            entries.push({ title, content });
        });
        localStorage.setItem('entries', JSON.stringify(entries));
    }

    // Form submission handler for journal entries
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = entryTitle.value;
        const content = entryContent.value;

        // Create a new entry
        const newEntry = createEntry(title, content);

        // Append the new entry to the entry list
        entryList.appendChild(newEntry);

        // Save the new entry to localStorage
        saveEntries();

        // Clear the form fields
        entryTitle.value = '';
        entryContent.value = '';
    });

    // Login form submission handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if the username and password are correct
        if (username === validUsername && password === validPassword) {
            // Hide login form and show journal entries
            loginSection.style.display = 'none';
            journalSection.style.display = 'block';

            // Load and display the stored entries
            loadEntries();
        } else {
            // Show error message if login failed
            loginError.style.display = 'block';
        }
    });
});
