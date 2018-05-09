<?php

/* ==========================================================================
encode/decode html
========================================================================== */

//convert most commonly used html to html entities
trim(htmlspecialchars($myHtml, ENT_QUOTES, 'UTF-8'));

//same as htmlspecialchars except it converts all html entities
htmlentities();

//instead of converting to entities, strip all html
strip_tags($myHtml);

//decode html entities
htmlspecialchars_decode($var, ENT_QUOTES);