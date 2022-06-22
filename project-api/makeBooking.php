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

$vet = $data->vet;
$client = $data->client;
$date = $data->date;
$time = $data->time;
$room = $data->room;



echo ($first);
//this is the value pushed to the databasse
$passwordEncrypt = md5($password);

$sql = "INSERT INTO booking(id, vet, client, time, date, room) VALUES (NULL,'$vet','$client','$time','$date','$room');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Booking has been made!");
}

?>