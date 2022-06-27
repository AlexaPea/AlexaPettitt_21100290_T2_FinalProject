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
$image = $data->ownerImg;
$petImage = $data->petImg;



echo ($first);
//this is the value pushed to the databasse
$passwordEncrypt = md5($password);


//owner image
list($type, $image) = explode(';', $image);
list(, $image)      = explode(',', $image);
$image = base64_decode($image);

$newPath = 'profiles/' . time() . '.jpg';
 
file_put_contents($newPath, $image);

//pet image

list($type, $petImage) = explode(';', $petImage);
list(, $petImage)      = explode(',', $petImage);
$petImage = base64_decode($petImage);

$newPathPet = 'profiles/' . time() . '2.jpg';
 
file_put_contents($newPathPet, $petImage);

$sql = "INSERT INTO clients(id, profileImage, name, surname, email, phoneNumber, clientId, medicalAidNum, petImage, petType, petName, petAge, petGender) VALUES (NULL,'$newPath','$name','$surname','$email','$contact','$clientId','$medicalAidNum','$newPathPet','$petType','$petName','$petAge','$petGender');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Vet has been added!");
}

?>