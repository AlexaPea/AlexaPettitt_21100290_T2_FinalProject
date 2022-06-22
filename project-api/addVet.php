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
$specialization = $data->specialization;
$vetId = $data->vetId;
$room = $data->room;
$email = $data->email;
$contact = $data->contact;
$age = $data->age;
$gender = $data->gender;
$password = $data->password;


echo ($first);
//this is the value pushed to the databasse
$passwordEncrypt = md5($password);

$sql = "INSERT INTO vets (id, profileImage, name, surname, age, gender, email, password, phoneNumber, doctorId, specialization, room) VALUES (NULL,'','$first','$last','$age','$gender','$email','$passwordEncrypt','$contact','$vetId','$specialization','$room')";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Vet has been added!");
}

?>