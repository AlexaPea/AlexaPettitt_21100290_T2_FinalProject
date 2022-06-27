<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->name; 
$surname = $data->surname; 
$petName = $data->petName;
$petType = $data->petType;
$petGender = $data->petGender;
$email = $data->email;
$petAge = $data->petAge;
$contact = $data->contact;
$clientId = $data->clientId;
$medicalAidNum = $data->medicalAidNum;
$id = $data->id;


$sql = "UPDATE clients SET name='$name',surname='$surname',email='$email',phoneNumber='$contact',clientId='$clientId',medicalAidNum='$medicalAidNum',petType='$petType',petName='$petName',petAge='$petAge',petGender='$petGender' WHERE id='$id';";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Post was Updated");
}
?>