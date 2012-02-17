<?php
$tab = ucfirst(filter_input(INPUT_GET, 'tab', FILTER_SANITIZE_STRING));

echo "$tab ajax content";
?>
