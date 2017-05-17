    var country = undefined;

    setCountry();

    function setCountry() {

        var isCAN = false;

        // Set up XHR to get country from IP service
        var xhr = new XMLHttpRequest();
        var link = 'https://freegeoip.net/json/';

        if (isIE() !== false && isIE() < 10) {
            //pre-ie10 doesn't support xhr
        } else {
            xhr.open('GET', link, true);
            xhr.send();
        }

        xhr.onreadystatechange = function () {

            // Successful response from the IP service
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Parse the response
                var res = JSON.parse(xhr.responseText);

                // Set the country code constant
                country = res.country_code;

                console.log('country: ', country);

            } else {
                //console.log('error getting country');
            }
        };
        //check if ie
        var isIE = function isIE() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
        };

    }