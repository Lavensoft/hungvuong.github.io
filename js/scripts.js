/*Copyright (c) 2019 Lavensoft, LEADER QUANG NHAT */

  var url = window.location;

  //DOCUMENT READY
  $(document).ready(function(){

    //GET USER IP

      $.getJSON("https://api.ipify.org?format=json", function (data) {
             ip = data.ip.toString();
             //console.log(ip);
         })

    $('.parallax').parallax();//SETTING UP PARALLAX

    //SUBMIT CONFESS
         

    $("#confess-submit").click(function(){
      event.preventDefault();
      confessFormSubmit();
    });
  });

  //DOCUMENT SCROLL
  $(document).scroll(function(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    //var blur = 0;

    /*///BLUR PARALLAX WHEN SCROLL
    if(currentScroll > 0){
        blur = currentScroll - 65;
    }else if(blur < 0){
        blur = 0;
    }
    if(blur > 100){
        blur = 100;
    }
    $(".parallax img").css({"filter" : "blur("+blur+"px)"});
    */
    //NAV BAR EFFECT SCROLL
   // $("#nav-bar").addClass("nav-toggle");
    if (currentScroll == 0) {
       // $("#nav-bar").removeClass("nav-toggle");
    }
  });