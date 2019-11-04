/*Copyright (c) 2019 Lavensoft, LEADER QUANG NHAT*/

var ip;

function confessFormSubmit(){

    var confess = document.forms["confess-form"]["confess-input"].value;
    var hastag  = document.forms["confess-form"]["confess-hastag"].value;
    var d = new Date();

    //KIỂM TRA GIÁ TRỊ NHẬP CÓ TRỐNG HAY KHÔNG

    if(confess == "" || confess == null){
        $("#error-confess").text("Hình như bạn chưa nhập confess...");
    }else{

        //PUT DATA TO PHP
     $.ajax({
            type: "POST",
            url: './PHP/confessForm.php',
            data: {
                content: confess,
                cfhastag : hastag,
                userip: ip,
                date: d
            },
            success: function(data) {
               console.log(data);
            }
          });

          confessFormSucess();

    }
}

//FORM SUCCESS CHANGE FORM

function confessFormSucess(){
    $("#confess-form h4").text("CONFESS CỦA BẠN ĐÃ GỬI THÀNH CÔNG!");
    $("#confess-form a").remove();
    $("#confess-form div").remove();
    $("#confess-form input").remove();
    $("#confess-form").addClass("confess-form-success");
    $("#confess-form button").remove();
}

function getConfess(){
    $.ajax({
        type: "GET",
        url: './PHP/confessForm.php',
        success: function(data) {
            console.log(data);
        }
      });
}

function appendNav(){
    let html = '<div class="left-menu">'
    +' <h5 class="nav-header">Hung Vuong Confession</h5>'
    +' </div>'
    +' <div class="center-menu">'
    +'    <!--DISABLED'
    +'    <div class="nav-menu" id="home">'
    +'            <a href="./index.html"><i class="material-icons nav-icon">home</i></a>'
    +'     </div>'
    +'    <div class="nav-menu">'
    +'            <i class="material-icons nav-icon">notifications</i>'
    +'    </div>'
    +'    <div class="nav-menu">'
    +'            <i class="material-icons nav-icon">account_circle</i>'
    +'    </div>'
    +'   <div class="nav-menu" id="people">'
    +'           <a href="./people.html"><i class="material-icons nav-icon">supervisor_account</i></a>'
    +'   </div>'
    
    +'   <div class="nav-menu" id="dating">'
    +'           <a href="./dating.html"><i class="material-icons nav-icon">favorite</i></a>'
    +'   </div>'
    +' -->'
    +' </div>'
    +'<div class="right-menu">'
    +'</div>'
    $("#nav-bar").append(html);
}

function load(file,id){
    $.get( file, function( data ) {
        $( id ).append( data );
    });
}