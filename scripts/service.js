// File: service.js

function filterWorkers() {
    // Get the search term and convert it to lowercase for case-insensitive matching
    const searchTerm = document.getElementById('serviceSearch').value.toLowerCase();
    
    // Get all worker cards
    const workers = document.querySelectorAll('.service-list .worker');

    workers.forEach(worker => {
        // Find the element containing the worker's name/service info
        const workerInfoElement = worker.querySelector('.w-info h3');
        
        if (workerInfoElement) {
            const workerText = workerInfoElement.textContent.toLowerCase();

            // Check if the worker's text contains the search term
            if (workerText.includes(searchTerm)) {
                worker.style.display = 'flex'; // Show the worker
            } else {
                worker.style.display = 'none'; // Hide the worker
            }
        }
    });
}

// Attach the filter function to the search input's 'keyup' event
const searchInput = document.getElementById('serviceSearch');
if (searchInput) {
    // Ensure you add the ID 'serviceSearch' to your search input in service.html
    searchInput.addEventListener('keyup', filterWorkers);
}