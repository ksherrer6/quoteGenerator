let test = document.getElementById("incTitContain");
//add event listener for mouse enter
test.addEventListener("mouseenter", function( event ) {
    //set element as title container
  var element = document.getElementById("incTitContain");
  // add flip out animation
  element.classList.remove("animate__flipInX");
  element.classList.add("animate__animated");
  element.classList.add("animate__flipOutX");
  //on mouseout remove flip out, add flip in
  test.addEventListener("mouseout", function( event ) {
    element.classList.remove("animate__flipOutX");
    element.classList.add("animate__flipInX");});
    });



  