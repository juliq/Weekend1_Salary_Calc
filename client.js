console.log('clientjs has been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addNewEmployee').on('click', submitClick);// add listener & callback
}

function submitClick() {
    console.log('submit button has been clicked');
    // create variables to make code less messy
    let newEmployeeFirstName = $('#firstName').val();
    let newEmployeeLastName = $('#lastName').val();
    let newEmployeeID = $('#ID').val();
    let newEmployeeTitle = $('#title').val();
    let newEmployeeAnnualSalary = $('#annualSalary').val();


    $('"salaryCalculatorTable"').append(`
        <tr>
            <td>` + newEmployeeFirstName + `</td>
            <td>` + newEmployeeLastName + `</td> 
            <td>` + newEmployeeID + `</td>
            <td>` + newEmployeeTitle + `</td>
            <td>` + newEmployeeAnnualSalary + `</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
    `);// select tbody and put a row inside it
}