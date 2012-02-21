<?php
$tab = ucfirst(filter_input(INPUT_GET, 'tab', FILTER_SANITIZE_STRING));
sleep(1);

echo "$tab ajax content";
?>
