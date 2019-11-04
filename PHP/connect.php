<?php
    //error_reporting(E_ERROR | E_PARSE);
    //http://www.phpmyadmin.co/
    // /$connect = mysqli_connect("localhost", "root" ,"", "hungvuongconfess");
    $connect = mysqli_connect("localhost", "root" ,"", "hungvuongconfess");
    if (!$connect) {
        die('Connect Error (' . mysqli_connect_errno() . ') '
                . mysqli_connect_error());
    }
     
    echo 'Success... ' . mysqli_get_host_info($connect) . "\n";

?>