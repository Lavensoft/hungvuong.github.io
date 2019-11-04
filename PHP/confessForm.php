<?php
    require('connect.php');

    $temp =  isset($_POST['content']) ? $_POST['content'] : null;
    $hastag =  isset($_POST['cfhastag']) ? $_POST['cfhastag'] : null;
    $ip = isset($_POST['userip']) ? $_POST['userip'] : null;
    $date = isset($_POST['date']) ? $_POST['date'] : null;
   
    $qr = "INSERT INTO `confess`(`id`, `confess`, `hastag`, `user`, `ip`, `dateCreated`) VALUES ('','{$temp}','{$hastag}','admin','{$ip}','{$date}');";
   
    mysqli_query($connect, $qr);

    //ROW DATA
     //$qr = "SELECT * FROM `confess` ORDER BY confess";
     //$result = mysqli_query($connect, $qr);
    //$row = mysqli_fetch_row($result);
    //echo $row[2];

    echo("DONE");
?>