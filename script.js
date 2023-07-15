// console.log ("Hello World!");

// on ready handler

$(document).ready(onReady); // saying hey jQuery for this document, wait until it's ready (fully rendered) before using the onReady function

function onReady() {
    // console.log("Hey jQuery!");

    // handlers go here
    $('.submit-button').on('click', handleSubmit); // using handleSubmit function for whenever submit-button is clicked

    $('#table-employees').on("click", '#delete-button', handleDelete)

}

function handleSubmit(event) {
    event.preventDefault(); // telling jQuery to stop the default event of clicking a submit button for a form
    console.log("inside handleSubmit")

    const firstNameEmployee = $('#first-name').val() // Getter used (the value of) the item (in this case what's written in the input) that has the ID of first-name
    const lastNameEmployee = $('#last-name').val()
    const idNumber = $('#id-number').val()
    const jobTitle = $('#job-title').val()
    const annualSalary = $('#annual-salary').val()

    // add employee info into table upon click Submit
    $('#table-employees').append(`
    <tr>
        <td>${firstNameEmployee}</td>
        <td>${lastNameEmployee}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td class="annual-salary-cell">$${annualSalary}</td >
        <td><button id="delete-button">Delete</button></td>
    </tr >
        `)
    // ^ this adds a table row of table data, using the values of newly declared variables (which themselves get the values we wrote in the inputs using a getter .val())
    // I also found out you can just add $ in front of the ${annualSalary} which might make it easier to use the calc?
    // made sure to add class and id for salary/delete button to use with handlers and calculations

    $("#first-name").val("");
    $('#last-name').val("");
    $('#id-number').val("");
    $('#job-title').val("");
    $('#annual-salary').val("");
}

function handleDelete() {
    $(this).parent().parent().remove();
    // this refers to what we're clicking on, first parent is <td>, second parent is <tr>, and we're removing this <tr>
}
