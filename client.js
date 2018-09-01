console.log('clientjs has been loaded');

let annualSalaryTotal = 0;
let monthlySalaryTotal = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addNewEmployee').on('click', submitClick);// add listener & callback
    // target class of deleteButton, target the tbody to delete
    $('#salaryTableBody').on('click','.deleteButton',deleteClick); // listener & callback fcn
}

function submitClick() {
    console.log('submit button has been clicked');
    // create variables to make code less messy for the table
    let newEmployeeFirstName = $('#firstName').val();
    let newEmployeeLastName = $('#lastName').val();
    let newEmployeeID = $('#ID').val();
    let newEmployeeTitle = $('#title').val();
    let newEmployeeAnnualSalary = parseInt($('#annualSalary').val());
    
    

    // add newEmployeeAnnualSalaries together : new salary + subtoal of prev salaries
    annualSalaryTotal = newEmployeeAnnualSalary + annualSalaryTotal;
    $('#annualSalaryTotal').text('Annual Salary Total: ' + annualSalaryTotal);
    console.log('total annual salary is', annualSalaryTotal);

    // divide annualSalaryTotal by 12 to get Total Monthly Salary
    monthlySalaryTotal = annualSalaryTotal / 12;
    $('#monthlySalaryTotal').text('Monthly Salary Total: $' + monthlySalaryTotal);
    console.log('monthly salary total is', monthlySalaryTotal);

    // background of Total Monthly turns red if total monthly cost excees $20,000
    if(monthlySalaryTotal > 20000){
        $('#monthlySalaryTotal').css('background-color', 'red');
    }
    

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


