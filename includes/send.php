<?php
date_default_timezone_set('America/Lima');
$fecha = date('m-d-Y');
$tiempo = date('H:i:s');

if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['info']) ){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $info = nl2br($_POST['info']);

    $serverName = "ukucampaign.database.windows.net";
    $connectionOptions = array(
        "Database" => "UKUCampaign",
        "Uid" => "yordiagustin",
        "PWD" => "Lalibertad98"
    );
    //Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if($conn)
    {
        $query = "INSERT INTO Reservacion(nombre,email,informacion,fecha,hora) VALUES('$name','$email','$info','$fecha','$tiempo')";
        
        $statement = sqlsrv_query($conn, $query);   
        if($statement){
            echo json_encode(TRUE);
        }else{
            echo json_encode("Error en el servidor :(");
        }

    }else{
        echo json_encode("Error en el servidor :(");
    }
  
}

