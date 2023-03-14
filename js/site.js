function SendContactForm(PackageName)
{
    alert("Clicked");
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "admin@varanasi.indiaholidaysplanner.com",
    //     Password : "Gangasharma@123",
    //     To : 'gangs.sharma17@gmail.com',
    //     From : "admin@varanasi.indiaholidaysplanner.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
    var templateParams = {
        from_name: $("#fullname").val(),
        email_id: $("#mailId").val(),
        contact_no:$("#contactNo").val(),
        message:$("#message").val()
    };
     
    emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
        .then(function(response) {
            swal("Good job!", "Your Response Has been submited!", "success");
        }, function(error) {
            swal("Sorry!", "Its not your fault!", "error");
        });
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }