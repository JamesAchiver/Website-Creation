// Details Show at Different Page :


document.getElementById("btn").onclick = function() {
     document.getElementById("firstName").value =+ document.getElementById("fname").innerHTML ;
     document.getElementById("lastName").value =+ document.getElementById("lname").innerHTML ;
     document.getElementById("Number").value =+ document.getElementById("num").innerHTML ;
     document.getElementById("Email").value =+ document.getElementById("email-D").innerHTML ;
     document.getElementById("pass").innerHTML =+ "********" ;
}