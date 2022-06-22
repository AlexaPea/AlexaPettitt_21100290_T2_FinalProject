<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
//decodes input into strings
$data = json_decode($request_body);

$email = $data->email;

if($email === ""){
    echo "";
}else{

    $sql = "SELECT *  FROM receptionists WHERE email = '$email';";
    $result = mysqli_query($conn, $sql);
    //check result returned in query to see if any other accounts have this email
    $resultCheck = mysqli_num_rows($result);

    if($resultCheck > 0){
        echo ("Not Available"); //respond with boolean instead
    }else{
        echo ("Available");
    }

}




?>