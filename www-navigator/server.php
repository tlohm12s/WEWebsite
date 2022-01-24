<?php 
    session_start();

    //https://stackoverflow.com/questions/1070153/stop-post-data-from-different-domain-php
    header('X-Frame-Options: Deny');

    if((!isset($_SERVER['HTTP_REFERER']) || parse_url($_SERVER['HTTP_REFERER'])['host'] != $_SERVER['HTTP_HOST']) &&  $_SERVER['HTTP_HOST'] !== 'localhost'){
        http_response_code(403);
        exit("Not allowed - Unknown host request! ");
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if($_SESSION['privileges']) {
            $raw_data = file_get_contents('php://input');
            $result = false;

            $token = isset($_SESSION['csrf']) ? $_SESSION['csrf'] : "";
            if ($token && $_SERVER['HTTP_CSRF_TOKEN'] === $token) {
                $result = file_put_contents('../resources/navigator_scontents.json', $raw_data); 
                unset($_SESSION['csrf']);
            } else {
                http_response_code(403);
                exit("Not a valid token.");
            }

            if($result === false) { http_response_code(500); } else { http_response_code(200); }
        } else {
            http_response_code(401);
        }
    } else {
        http_response_code(405);
    }

?>