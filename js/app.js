//Hide hint
$("form span").hide();

//Test to see if they left input field blank, and if so, show hint
function validateForm() {
    var x = document.forms["newsletterEmail"]["email"].value;
    if (x == "") {
        $("form span").show();
        return false;
    } 
}

//When hint shows, and they retry to add email, hide hide again
$("#email").focus(function(){
    $("form span").hide();
})
