/*
1.Create an HTML form with the following form controls:
    a. text input field with a name and id value of: “firstName”(required)
        i. When you submit the form: enter your first name here
    b. text input field with a name and id value of: “lastName”(required)
        i. When you submit the form: enter your last name here
    c. text input field with a name and id of: “facilitator” (required)
        i. When you submit the form: enter your facilitator’s first name
    d. a group of radio buttons with your choice of options
    e. a group of checkboxes with your choice of values
    f. Style the page with CSS using an external style sheet.
    g. The form action should point to http://bucs601.com/submit.php using the POST method.
2. Use HTML and JavaScript to perform client-side validation based on the following specifications:
    a. Validate both firstName and lastName to ensure:
        i. a minimum length of two (2) characters
        ii. that only alpha characters are used (A-Z and a-z)
    b. Validate facilitator andc onstrain the possible valid values to be those of the active facilitators for the course during this semester. For example, if we have facilitators with the following first names: “Laura”, “Fazil”, and “Harsh”, you would ensure that only these values would pass validation
        i. Christian OR Fazil OR Josh OR Chris OR Behdad
    c. facilitator is a text input, don’t change this into a select or any other type of input.
    d. The form should not be permitted to submit unless all fields pass validation.
*/

function validateForm() {
    var firstName = document.getElementsByName("firstName")[0].value;
    var lastName = document.getElementsByName("lastName")[0].value;
    var facilitator = document.getElementsByName("facilitator")[0].value;

    var letters = /^[A-Za-z]+$/;
    if(!(firstName.match(letters) && lastName.match(letters)))
    {
        alert('Please only use alphabetic letters in first and last name');
        return false;
    }
    if (firstName.length <= 2) {
        alert("First name has too few characters");
        return false;
    }
    if (lastName.length <= 2) {
        alert("Last name has too few characters");
        return false;
    }
    if (!(facilitator == "Christian" || facilitator == "Fazil" || facilitator == "Josh" || facilitator == "Chris" || facilitator == "Behdad")) {
        alert("Please provide a valid facilitator name: Christian, Fazil, Josh, Chris, or Behdad");
        return false;
    }
    return true;
}