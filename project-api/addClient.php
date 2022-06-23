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

$name = $data->name;
$surname = $data->surname;
$clientId = $data->clientId;
$medicalAidNum = $data->medicalAidNum;
$room = $data->room;
$email = $data->email;
$contact = $data->contact;
$petName = $data->petName;
$petType = $data->petType;
$petAge = $data->petAge;
$petGender = $data->petGender;
$ownerImage = $data->ownerImg;
$petImage = $data->petImg;



echo ($first);
//this is the value pushed to the databasse
$passwordEncrypt = md5($password);

$sql = "INSERT INTO clients(id, profileImage, name, surname, email, phoneNumber, clientId, medicalAidNum, petImage, petType, petName, petAge, petGender) VALUES (NULL,'$ownerImage','$name','$surname','$email','$contact','$clientId','$medicalAidNum','$petImage','$petType','$petName','$petAge','$petGender');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Vet has been added!");
}

?>