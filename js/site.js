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
  
  if($(window).width() < 739)
  {
    $(".mobileCall").prop('hidden',false);
    $('.pcCall').prop('hidden',true);
  }
  else{
    $(".mobileCall").prop('hidden',true);
    $('.pcCall').prop('hidden',false);
  }
  
  function GoToDiv(ID)
  {
    if($(window).width() > 739)
    {
      $('html, body').animate({
        scrollTop: $("#"+ID).offset().top
      }, 1000);
    }
    else{
      if(ID=="VanarasiPackageDiv")
      {
        var height = $('body').height();
        $('html, body').animate({
          scrollTop: height/1.5
        }, 1000);
      }
      else if(ID=="KashiBestAttraction")
      {
        var height = $('body').height();
        $('html, body').animate({
          scrollTop: height/0.4
        }, 1000);
      }
      else
      {
        //Contact Scroll
        var height = $('body').height();
        $('html, body').animate({
          scrollTop: height/0.29
        }, 1000);
      }
      
    }
    $('body').removeClass('offcanvas');
    $('body').removeClass('overflow');
   $('.js-gtco-nav-toggle').removeClass('active');
  }

  function SendEnquery()
  {
    $("#myModal").modal("show");
  }

  function PackageEnquiry(PackageName)
  {
    $("#PackageModal").modal("show");

    $("#PackageEnquirySent").click(function(){
      var templateParams = {
        from_name: $("#fullnamePKG").val(),
        email_id: $("#mailIdPKG").val(),
        contact_no:$("#contactNoPKG").val(),
        package_name:PackageName,
        message:$("#messagePKG").val()
    };
     
    emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
        .then(function(response) {
            swal("Good job!", "Your Response Has been submited!", "success");
            $("#fullnamePKG").val('');
            $("#mailIdPKG").val('');
            $("#contactNoPKG").val('');
            $("#messagePKG").val('');
            $("#PackageModal").modal("hide");
        }, function(error) {
            swal("Sorry!", "Its not your fault!", "error");
        });
    })
  }