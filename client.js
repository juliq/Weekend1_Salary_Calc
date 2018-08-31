console.log('clientjs has been loaded');

let annualSalaryTotal = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addNewEmployee').on('click', submitClick);// add listener & callback
    // target class of deleteButton, target the tbody to delete
    $('#salaryTableBody').on('click','.deleteButton',deleteClick); // listener & callback fcn
}

function submitClick() {
    console.log('submit button has been clicked');
    // create variables to make code less messy
    let newEmployeeFirstName = $('#firstName').val();
    let newEmployeeLastName = $('#lastName').val();
    let newEmployeeID = $('#ID').val();
    let newEmployeeTitle = $('#title').val();
    let newEmployeeAnnualSalary = parseInt($('#annualSalary').val());
    

    // add newEmployeeAnnualSalaries together : new salay + subtoal of prev salaries
    annualSalaryTotal = newEmployeeAnnualSalary + annualSalaryTotal;
    $('#annualSalaryTotal').text('Annual Salary Total: ' + annualSalaryTotal);
    console.log('total annual salary is', annualSalaryTotal);
// clear boxes here

    $('#salaryTableBody').append(`
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

function deleteClick() {
    console.log('delete was clicked');
    $(this).closest('tr').remove(); // DOM traversal
}

function calculateMonthlyCosts(newEmployeeAnnualSalary) {

}
