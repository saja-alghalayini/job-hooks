<?php
include_once "./connection.php";

$uname=$_REQUEST['uname'];
$email=$_REQUEST['email'];
$msg=$_REQUEST['msg'];

$sql="INSERT INTO comments(`uname`, `email`, `msg`) VALUES('$uname', '$email', '$msg')";

mysqli_query($con,$sql);

$con->close();

?>