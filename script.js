// client-side validation
function validateForm() {
    var firstName = document.getElementsByName("firstName")[0].value;
    var lastName = document.getElementsByName("lastName")[0].value;
    var facilitator = document.getElementsByName("facilitator")[0].value;
    var errors = "";
    var validated = true;

    // validate firstName and lastName only contain alpha characters
    var alpha = /^[A-Za-z]+$/;
    if(!firstName.match(alpha))
    {
        errors += "Non-alphabetic letters were used in first name. ";
        validated = false;
    }
    if(!lastName.match(alpha))
    {
        errors += "Non-alphabetic letters were used in last name. ";
        validated = false;
    }

    // validate firstName and lastName contain more than two characters
    if (firstName.length <= 2) {
        errors +=  "First name has too few characters. ";
        validated = false;
    }
    if (lastName.length <= 2) {
        errors += "Last name has too few characters. ";
        validated = false;
    }

    // validate facilitator name is on list
    if (!(facilitator == "Christian" || facilitator == "Fazil" || facilitator == "Josh" || facilitator == "Chris" || facilitator == "Behdad")) {
        errors += "Facilitator name not recognized as Christian, Fazil, Josh, Chris, or Behdad. ";
        validated = false;
    }

    if (validated == false) {
        document.getElementById("errorMessage").innerHTML = "Your submission failed due to the following: " + errors;
        return false;
    }

    // form will not be permitted to submit unless all fields pass validation
    return true;
}