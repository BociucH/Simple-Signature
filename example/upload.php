<?php

$name = bin2hex(openssl_random_pseudo_bytes(16)); // random image name
$savePath = 'img/' . $name . '.jpg'; // path, where the image will be saved in

$image = json_decode($_POST['image'], true)['image'];

if (imagejpeg(imagecreatefromstring(base64_decode($image)), $savePath)) {
	echo $name; // return the name of a new-created image
}