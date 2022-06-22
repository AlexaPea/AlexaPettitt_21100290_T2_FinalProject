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

$user = $data->activeUser;
$taskName = $data->taskName;
$taskDescription = $data->taskDescription;



$sql = "INSERT INTO tasks(id, receptionist, taskName, taskDescription) VALUES (NULL,'$user','$taskName','$taskDescription');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Task has been added!");
}

?>