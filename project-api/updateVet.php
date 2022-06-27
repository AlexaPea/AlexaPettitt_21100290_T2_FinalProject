<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->first; 
$surname = $data->last; 
$specialization = $data->specialization;
$vetId = $data->vetId;
$room = $data->room;
$email = $data->email;
$age = $data->age;
$gender = $data->gender;
$contact = $data->contact;
$password = $data->password;
$id = $data->id;


$sql = "UPDATE vets SET name='$name ',surname='$surname ',age='$age',gender='$gender',email='$email',password='$password',phoneNumber='$contact',doctorId='$vetId',specialization='$specialization',room='$room' WHERE id='$id';";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Post was Updated");
}
?>