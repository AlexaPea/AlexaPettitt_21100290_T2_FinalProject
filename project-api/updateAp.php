
<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$vet = $data->vet; 
$client = $data->client; 
$date = $data->date;
$time = $data->time;
$room = $data->room;
$id = $data->id;


$sql = "UPDATE booking SET vet='$vet',client='$client',time='$time',date='$date',room='$room' WHERE id='$id';";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Post was Updated");
}
?>
