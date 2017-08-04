<?php
// print_r($_POST);
$filename = "response/".$_POST['chatID']."_resp.json";
// Create the file if it does not exist
if(!file_exists($filename))
{
    file_put_contents($filename, file_get_contents("response/template_resp.json"));
}

$jsonString = file_get_contents($filename);
$data = json_decode($jsonString, true);

array_push($data['response'], $_POST['response']);

// Encode and store it
$newJsonString = json_encode($data);
file_put_contents($filename, $newJsonString);
echo("Data collected succesfully!");
print_r($_POST);
?>