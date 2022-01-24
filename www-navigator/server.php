<?php 
    session_start();

    //Aus den Folien
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if($_SESSION['privileges']) {
            $raw_data = file_get_contents('php://input');
            $result = file_put_contents('../resources/navigator_contents.json', $raw_data); 
            if($result === false) { http_response_code(500); } else { http_response_code(200); }
        } else {
            http_response_code(401);
        }
    } else {
        http_response_code(405);
    }

?>