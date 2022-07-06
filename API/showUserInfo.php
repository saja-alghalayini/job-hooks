<?php
require_once './connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Request-Headers: x-requested-with');

$sql="SELECT * From user";
$sql=mysqli_query($conn, $sql);

while($row= mysqli_fetch_assoc($sql))
{
    $jsonData[]= $row;
}

echo json_encode(['res'=>$jsonData]);

?>