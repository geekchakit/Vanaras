function SendContactForm(FormType)
{
    if(FormType=="HeaderForm")
    {
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

    else if(FormType=="ContactDiv")
    {
      var templateParams = {
        from_name: $("#fullnameC").val(),
        email_id: $("#mailIdC").val(),
        contact_no:$("#contactNoC").val(),
        message:$("#messageC").val()
    };
     
    emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
        .then(function(response) {
            swal("Good job!", "Your Response Has been submited!", "success");
        }, function(error) {
            swal("Sorry!", "Its not your fault!", "error");
        });
    }
    
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

  function GoToDiv(ID)
  {
    alert(ID);
    $('html, body').animate({
        scrollTop: $("#"+ID).offset().top
    }, 2000);
    $('body').removeClass('offcanvas');
    $('.js-gtco-nav-toggle').removeClass('active');
  }

  function SendEnquery()
  {
    $("#myModal").modal("show");
  }