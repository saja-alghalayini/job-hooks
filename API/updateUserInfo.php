<?php
include_once "./connection.php";

$id = $_REQUEST['id'];
$first_name = $_REQUEST["first_name"];
$email= $_REQUEST["email"];
$password= $_REQUEST["password"];

$sql="UPDATE users SET name='$name', email='$email', password='$password' WHERE id='$id' ";

mysqli_query($con,$sql);
?>