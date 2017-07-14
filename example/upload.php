<?php

$name = bin2hex(openssl_random_pseudo_bytes(16)); // random image name
$savePath = 'img/' . $name . '.jpg'; // path, where the image will be saved in

if (imagejpeg(imagecreatefromstring(base64_decode($_POST['image'])), $savePath)) {
	echo $name; // return the name of a new-created image
}