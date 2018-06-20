<?php

/* ==========================================================================
// making a REST/api request via php (curl)
========================================================================== */
// https://support.ladesk.com/061754-How-to-make-REST-calls-in-PHP

//api request
$service_url = 'https://myurl';

$curl = curl_init($service_url);

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); 
curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6");
curl_setopt($curl, CURLOPT_FAILONERROR, TRUE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$curl_response = curl_exec($curl);
if ($curl_response === false) {
    $info = curl_getinfo($curl);
    echo 'error occured during curl exec. Additioanl info: ' . var_export($info);
}

curl_close($curl);

if ($curl_response) {
	if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
	    echo 'error occured: ' . $decoded->response->errormessage;
	} else {
		//success
		$decoded = json_decode($curl_response);
	}
}

//post
//--------------------


curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); 
curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6");
curl_setopt($curl, CURLOPT_FAILONERROR, TRUE);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);

$curl_response = curl_exec($curl);
if ($curl_response === false) {
    $info = curl_getinfo($curl);
    dbug('Error: error occured during curl exec. Additioanl info: '.(print_r($info, true)), 'Work Center', 'users_permissions:build()');
}

curl_close($curl);

if ($curl_response) {
	if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
	    dbug("Error: {$decoded->response->errormessage}\nURL: {$service_url}", 'Work Center', 'users_permissions:build()');
	} else {
		//success
		$decoded = json_decode($curl_response);
	}
}

/* ==========================================================================
// guzzle (curl)
========================================================================== */

// get
//--------------------
$service_url = 'https://myurl';

$guzzle = new GuzzleClient([
	'defaults' => [
		'config' => [
			'curl' => [
				CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
				CURLOPT_SSL_VERIFYPEER => false
			]
		]
	]
]);

try {
	$response = $guzzle->get($service_url);

	if ($response->getStatusCode() >= 200 && $response->getStatusCode() < 400) {
		$content = $response->getBody()->getContents();
		//do something with content
	} else {
		throw new Exception('Failed '.$response->getStatusCode());
	}
} catch (Exception $e) {
	log_message('error', 'CORS: Unable to request ('.$service_url.') '.$e->getMessage());
}

// post
//--------------------
$service_url = 'https://myurl';

$guzzle = new GuzzleClient([
	'defaults' => [
		'config' => [
			'curl' => [
				CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
				CURLOPT_SSL_VERIFYPEER => false,
			]
		]
	]
]);

try {
	$response = $guzzle->post($service_url, [
		'body' => ['roles' => 1]
	]);

	if ($response->getStatusCode() >= 200 && $response->getStatusCode() < 400) {
		$content = $response->getBody()->getContents();
	} else {
		throw new Exception('Failed '.$response->getStatusCode());
	}
} catch (Exception $e) {
	log_message('error', 'CORS: Unable to request ('.$service_url.') '.$e->getMessage());
}