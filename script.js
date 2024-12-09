// API URL to fetch data from
const URL = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Fetch data from the API
fetch(URL)
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        const tableBody = document.getElementById('dataTableBody');
        const columns = ['year', 'semester', 'the_programs', 'nationality', 'colleges', 'number_of_students'];

        // Loop through the results and generate the rows
        results.forEach(item => {
            const row = document.createElement('tr');
            row.classList.add('even:bg-blue-50', 'hover:bg-blue-100');

            // Create table data cells for each field in the row
            columns.forEach(field => {
                const cell = document.createElement('td');
                cell.classList.add('p-3', 'border-b', 'border-blue-300');
                cell.setAttribute('data-label', field.replace(/_/g, ' ').toUpperCase());

                // Append the field value to the cell
                cell.textContent = item[field] || ''; // Default to empty string if field is missing
                row.appendChild(cell);
            });

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
