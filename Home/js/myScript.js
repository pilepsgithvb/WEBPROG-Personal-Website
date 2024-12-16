function myFunction() {
  document.getElementById("demo").innerHTML = "I am Philippe";
}

function myFunction2() {
  const element = document.getElementsByTagName("abc");

  document.getElementById("demo").innerHTML = 'Wait for it ' + element[0].innerHTML;

}
