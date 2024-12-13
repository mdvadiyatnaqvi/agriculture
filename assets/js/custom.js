// Function to add new row to the table
document.getElementById('addRowBtn').addEventListener('click', function () {
    const tableBody = document.getElementById('qualificationTable').getElementsByTagName('tbody')[0];
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>
            <select class="form-select" name="qualification[]">
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="graduation">Graduation</option>
            </select>
        </td>
        <td>
            <input type="text" class="form-control" name="subject[]" placeholder="Enter Subject" required>
        </td>
        <td>
            <input type="number" class="form-control" name="percentage[]" placeholder="Enter Percentage" required>
        </td>
        <td>
            <input type="text" class="form-control" name="school_college[]" placeholder="Enter School/College" required>
        </td>
        <td>
            <input type="number" class="form-control" name="year_of_passing[]" placeholder="Enter Year" required>
        </td>
        <td>
            <button type="button" class="btn btn-danger removeRowBtn">Remove</button>
        </td>
    `;

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Add an event listener to the remove button to delete the row
    const removeButton = newRow.querySelector('.removeRowBtn');
    removeButton.addEventListener('click', function () {
        newRow.remove(); // Removes the row from the table
    });
});

// for experience input

// Add a new row to the table
document.getElementById('addRowBtn1').addEventListener('click', function () {
    let tableBody = document.querySelector('#experienceTable tbody');
    let newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" class="form-control" name="org[]" placeholder="Organization Name"></td>
        <td><input type="text" class="form-control" name="designation[]" placeholder="Designation"></td>
        <td><input type="text" class="form-control" name="duty[]" placeholder="Nature of Duty"></td>
        <td><input type="date" class="form-control" name="date_from[]"></td>
        <td><input type="date" class="form-control" name="date_to[]"></td>
        <td><input type="text" class="form-control" name="duration[]" placeholder="Duration"></td>
        <td><button type="button" class="btn btn-danger removeRow">Remove</button></td>
      `;

    tableBody.appendChild(newRow);
});

// Handle removing rows 
document.querySelector('#experienceTable').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('removeRow')) {
        // Get the number of rows in the table
        let rows = document.querySelectorAll('#experienceTable tbody tr');

        // If there's more than 1 row, allow removal
        if (rows.length > 1) {
            event.target.closest('tr').remove();
        } else {
            // Optionally, disable remove button if there's only 1 row left
            alert("At least one experience row must remain.");
        }
    }
});