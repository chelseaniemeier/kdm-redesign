

$(document).ready(function(){
    
        //HAMBURGER MENU -- TOGGLE//

        $('.menu_exit').click(function(){
            $('.sidebar_menu').removeClass("show_menu");
            $('.toggle_menu').addClass("opacity_one").removeClass("toggle_menu_zindex-change");
        });
    
        $('.toggle_menu').click(function(){
            $('.sidebar_menu').addClass("show_menu");
            $('.toggle_menu').removeClass("opacity_one").addClass("toggle_menu_zindex-change");
        });
    
    });
    

//E-MAIL JOIN NEWSLETTER IN FOOTER//

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



//Google Map//

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(38.205377, -85.771569),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("contactMap"), mapOptions);
}