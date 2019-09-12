function displayItems() {

  // Mobile Number Checkbox
  var checkBox_mobile = document.getElementById("Mobile_check");
  var number = document.querySelectorAll(".mobile-number");

  // Email Checkbox
  var checkBox_email = document.getElementById("Email_address");
  var email = document.querySelectorAll(".email-address");


  if (checkBox_mobile.checked == true){
    for( i = 0; i< number.length; i++){
        number[i].style.cssText = "display:block";}
  } else {
    for(i = 0; i< number.length; i++){
        number[i].style.cssText = "none";}
  }


  if (checkBox_email.checked == true){
    for( i = 0; i< number.length; i++){
        email[i].style.cssText = "display:block";}
  } else {
    for(i = 0; i< number.length; i++){
        email[i].style.cssText = "none";}
  }
}