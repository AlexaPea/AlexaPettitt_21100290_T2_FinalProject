<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->first; 
$surname = $data->last; 
$email = $data->email;
$age = $data->age;
$gender = $data->gender;
$contact = $data->contact;
$password = $data->password;
$id = $data->id;


$sql = "UPDATE receptionists SET name='$name',surname='$surname',age='$age',gender='$gender',phoneNumber='$contact',email='$email',password='$password' WHERE id='$id';";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! User was Updated");
}
?>