<?php

include_once('database.php');
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $name = trim($request->name);
    $email = trim($request->email);
    $pwd = trim($request->password);

    $stmt = $pdo->prepare("INSERT INTO users_school (name, password, email) VALUES (:name, :email, :pwd)");

    $stmt->bindParam(":name", $name, PDO::PARAM_STR);
    $stmt->bindParam(":email", $email, PDO::PARAM_STR);
    $stmt->bindParam(":pwd", $pwd, PDO::PARAM_STR);

    $stmt->execute();

    if($stmt){
        $authdata = [
           'name' => $name,
           'email' => $email,
           'pwd' => '',
           'Id' => $pdo->lastInsertID()
        ];
        echo json_encode($authdata);
    }
}