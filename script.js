// client-side validation
function validateForm() {
    var firstName = document.getElementsByName("firstName")[0].value;
    var lastName = document.getElementsByName("lastName")[0].value;
    var facilitator = document.getElementsByName("facilitator")[0].value;

    // validate firstName and lastName only contain alpha characters
    var alpha = /^[A-Za-z]+$/;
    if(!(firstName.match(alpha) && lastName.match(alpha)))
    {
        alert('Please only use alphabetic letters in first and last name');
        return false;
    }

    // validate firstName and lastName contain more than two characters
    if (firstName.length <= 2) {
        alert("First name has too few characters");
        return false;
    }
    if (lastName.length <= 2) {
        alert("Last name has too few characters");
        return false;
    }

    // validate facilitator name is on list
    if (!(facilitator == "Christian" || facilitator == "Fazil" || facilitator == "Josh" || facilitator == "Chris" || facilitator == "Behdad")) {
        alert("Please provide a valid facilitator name: Christian, Fazil, Josh, Chris, or Behdad");
        return false;
    }

    // form will not be permitted to submit unless all fields pass validation
    return true;
}