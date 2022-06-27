<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$updatedTaskName = $data->newTask; 
$updatedTaskDescription = $data->newTaskDescription; 
$taskId = $data->id;

$sql = "UPDATE tasks SET taskName='$updatedTaskName',taskDescription='$updatedTaskDescription' WHERE id = '$taskId';";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Post was Updated");
}
?>