<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$db_host = 'localhost';
$db_username = 'AfonsoFernando';
$db_password = 'F3rn@nd0';
$db_name = 'EducaDrive';

try{

    $pdo = new PDO("mysql:host=$db_host; dbname=$db_name", $db_username, $db_password);

}catch(PDOException $e){

    die('Connection Error : '. $e->getMessage());

}

?>