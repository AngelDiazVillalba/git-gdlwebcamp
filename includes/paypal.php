<?php 

define('URL_SITIO','http://localhost:8888/gblwebcamp');


require 'paypal/autoload.php';

$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'Ad2Rdp6KtJEXo6IycbtKfVBQU3F_JUqRA62cqWqcvH-FfrYnD91kSOOajCrkFOmR-sGzLgH3cBl3ZcLv',
        'ECFBgA9jVk-Dflx8tzuhRvVd62m-D7WoGPxoxbOEM8zRUnZgXTIVuZAMYGkpEUMxgq4lPq5IPX2_eHi1'
    )
);