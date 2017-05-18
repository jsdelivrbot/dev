//feed in jeojson data (stored on a database for example)
//(from ibm mapbox pwa youtube)
Map.addSource('muy-data', {
	type: 'geojson',
	data: 'https://cloudant.com/api/my-data'
});