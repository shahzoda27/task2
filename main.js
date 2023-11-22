
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let mypassword = document.getElementById("input").value;
    let passwordlength = mypassword.length;
  
if (passwordlength < 4) {
  alert("To week");
} else if (passwordlength >= 4 && passwordlength <= 8) {
  alert("Not bad");
} else if(passwordlength > 8) {
  alert("Strong");
}
});

