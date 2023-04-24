fetch('Table_Input.csv')
    .then(response => response.text())
    .then(csvData => {
        // Split the CSV data into rows and columns
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => row.split(','));

        // Combine the headers and data into a 2D array
        const dataArray = [headers, ...data];

        // Display the data in a table
        const table = document.createElement('table');

        const r1 = document.getElementById('r1');
        const r2 = document.getElementById('r2');
        const r3 = document.getElementById('r3');
        r1.textContent = (returnNumber(dataArray, "A5") + returnNumber(dataArray, "A20")).toString();
        r2.textContent = (returnNumber(dataArray, "A15") / returnNumber(dataArray, "A7")).toString();
        r3.textContent = (returnNumber(dataArray, "A13") * returnNumber(dataArray, "A12")).toString();
    });

function returnNumber(dataArray, index){
    const ind = dataArray.findIndex(row => row[0] === index);
    return parseFloat(dataArray[ind][1]);
}