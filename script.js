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
        errors += "<li>Non-alphabetic letters were used in first name.</li>";
        validated = false;
    }
    if(!lastName.match(alpha))
    {
        errors += "<li>Non-alphabetic letters were used in last name.</li>";
        validated = false;
    }

    // validate firstName and lastName contain more than two characters
    if (firstName.length <= 2) {
        errors +=  "<li>First name has too few characters.</li>";
        validated = false;
    }
    if (lastName.length <= 2) {
        errors += "<li>Last name has too few characters.</li>";
        validated = false;
    }

    // validate facilitator name is on list
    if (!(facilitator == "Christian" || facilitator == "Fazil" || facilitator == "Josh" || facilitator == "Chris" || facilitator == "Behdad")) {
        errors += "<li>Facilitator name not recognized as Christian, Fazil, Josh, Chris, or Behdad.</li>";
        validated = false;
    }

    if (validated == false) {
        document.getElementById("errorMessage").innerHTML = "Your submission failed due to the following: <ul>" + errors +"</ul>";
        return false;
    }

    // form will not be permitted to submit unless all fields pass validation
    return true;
}