const AGE = document.getElementById("age");
var dob = new Date(1998, 5, 5);

AGE.append(new Date().getFullYear() - dob.getFullYear());
