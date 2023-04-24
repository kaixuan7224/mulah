// Display the data in a table
const table = document.createElement('table');

fetch('Table_Input.csv')
    .then(response => response.text())
    .then(csvData => {
        // Split the CSV data into rows and columns
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => row.split(','));

        // Combine the headers and data into a 2D array
        const dataArray = [headers, ...data];

        dataArray.forEach(rowData => {
            const row = document.createElement('tr');

            rowData.forEach(cellData => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                row.appendChild(cell);
            });

            table.appendChild(row);
        });
    });
document.body.appendChild(table);