<?php

include_once('database.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if($request){
    $email = trim($request->email);
    $pwd = trim($request->password);
}

$sql_select_users = "SELECT * FROM users_school WHERE email =:email AND password = :password";
$stmt = $pdo->prepare($sql_select_users);


$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->bindParam(':password', $pwd, PDO::PARAM_STR);

$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

if($resultado){

    $rows = array();
   
    foreach($resultado as $row){
        $rows[] = $row; 
    }

    echo json_encode($rows);

}else{
    http_response_code(404);
}