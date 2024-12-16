function myFunction() {
  document.getElementById("demo").innerHTML = "I am Philippe";
}

function myFunction2() {
  const element = document.getElementsByTagName("z");

  document.getElementById("demo").innerHTML = 'Wait for it ' + element[0].innerHTML;

}
