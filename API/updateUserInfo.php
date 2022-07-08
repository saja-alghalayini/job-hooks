<?php
include_once "./connection.php";

$id = $_REQUEST['id'];    // whrer id 
$first = $_REQUEST["firstName"];
$last = $_REQUEST["lastName"];
$email= $_REQUEST["email"];
$password= $_REQUEST["password"];
$phone= $_REQUEST["phone"];

$sql="UPDATE user SET first_name='$first',last_name='$last', email='$email', password='$password',phone_number='$phone' WHERE id='$id';";

mysqli_query($con,$sql);
?>

