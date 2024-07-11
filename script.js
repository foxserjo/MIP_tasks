document.addEventListener('DOMContentLoaded', () => {
  const resultsTable = document.getElementById('results-table');
  const resultsTableBody = resultsTable.tBodies[0];

  // Calculate the sum of "+" values for each column
  const columnSums = Array.from({ length: resultsTableBody.rows[0].cells.length - 1 }, () => 0);
  Array.prototype.forEach.call(resultsTableBody.rows, (row, rowIndex) => {
    if (rowIndex === resultsTableBody.rows.length - 1) return; // Skip the "Итог" row

    Array.prototype.forEach.call(row.cells, (cell, index) => {
      if (index === 0) return; // Skip the first column (participants)

      const resultValue = cell.textContent.trim();

      if (resultValue.startsWith('+')) {
        columnSums[index - 1]++;
      }
    });
  });

  // Set the background color for each cell
  Array.prototype.forEach.call(resultsTableBody.rows, (row, rowIndex) => {
    if (rowIndex === resultsTableBody.rows.length - 1) { // "Итог" row
      Array.prototype.forEach.call(row.cells, (cell, index) => {
        if (index === 0) return; // Skip the first column (participants)

        cell.style.backgroundColor = '#C9E4F7'; // Light blue
      });
    } else {
      Array.prototype.forEach.call(row.cells, (cell, index) => {
        if (index === 0) return; // Skip the first column (participants)

        const resultValue = cell.textContent.trim();

        if (resultValue.startsWith('+')) {
          cell.style.backgroundColor = '#C6F7D0'; // Pastel green
        } else if (resultValue.startsWith('-')) {
          cell.style.backgroundColor = '#F7CACA'; // Pastel red
        } else {
          cell.style.backgroundColor = '#FFFFCC'; // Slightly brighter yellow
        }
      });
    }
  });

  // Set the "Итог" row values
  const итогRow = resultsTableBody.rows[resultsTableBody.rows.length - 1];
  Array.prototype.forEach.call(итогRow.cells, (cell, index) => {
    if (index === 0) return; // Skip the first column (participants)

    cell.textContent = columnSums[index - 1];
  });
});
