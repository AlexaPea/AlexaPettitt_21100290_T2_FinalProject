<?php 


//ensures that there aren't any duplicates
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

//decode contents
$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

//set variables
$email = $data->email;
$password = $data->password;


//encrypt password
$encryptedPassword = md5($password);

//if empty get error
if($email === "" && $password === ""){ //rather change to an or
    echo "Err";
} else {
    $sql = "SELECT * FROM receptionists WHERE email = '$email' AND password = '$encryptedPassword';"; //storing data , AND clause makes sure both username and password are correct
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result); //check how many rows are stored

    if($resultCheck > 0){ //if there is someone with that username and password
        echo 'true';
    } else {
        echo 'false'; //if there isn't
    }
}

?>