<?php
header("Access-Control-Allow-Origin: * ");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS,DELETE,PUT');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$serverName='localhost';
$dbUserName='root';
$password='';
$database='seventh_project';

$con = mysqli_connect($serverName, $dbUserName, $password, $database);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }
?>