<?php
// Directory
$directory = "./json";

// Returns array of files
$files = scandir($directory);

// Count number of files and store them to variable..
$num_files = count($files)-2;
$num_files;
echo file_get_contents("json/".(rand(1,$num_files )).".json");
?>