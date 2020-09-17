const dateTimeNow = new Date();
let date = console.log(dateTimeNow.toLocaleDateString());
let temps = console.log(dateTimeNow.toLocaleTimeString());
alert("Nous somme le: " + date + " à " + temps);