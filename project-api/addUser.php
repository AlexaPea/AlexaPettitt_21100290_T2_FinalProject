<?php

//ensures that there aren't any duplicates
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$last = $data->last;
$email = $data->email;
$contact = $data->contact;
$age = $data->age;
$gender = $data->gender;
$password = $data->password;
$image = $data->image;


echo ($first);
//this is the value pushed to the databasse
$passwordEncrypt = md5($password);

list($type, $image) = explode(';', $image);
list(, $image)      = explode(',', $image);
$image = base64_decode($image);

$newPath = 'profiles/' . time() . '.jpg';
 
file_put_contents($newPath, $image);

$sql = "INSERT INTO receptionists (id, profileImage, name, surname, age, gender, phoneNumber, email, password, rank) VALUES (NULL, '$newPath','$first' ,'$last' ,'$age' ,'$gender' ,'$contact','$email' ,'$passwordEncrypt', 'General');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! User has been added!");
}

?>