;(function($, window, document, undefined) {

    $.fn.onePixPlugin = function(options) {

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            'location': 'top',
            'background-color': 'blue'
        }, options);


    //for converting form field data into an object .serializeObject()
    jQuery.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        jQuery.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };


        //ajax ---------------------------------------------------------//

        $(document).ready(function() {
            
//            alert(onePixPlugin_data.plugin_url);
                var page = 1,
                    $loading = false,
                    $finished = false,
                    $window = $(window),
                    $outputEl = $('div#ajax-output'),
//                    $path = onePixPlugin_data.plugin_url + '/process-ajax.php';
                    $path = onePixPlugin_data.ajaxurl;


                var ajax_load = function() {
                    
                var formdata = {};

                formdata = $('#repair-number-lookup').serializeObject();
                
//                alert(JSON.stringify(formdata));

                //add this 
                formdata.action = 'onepixplugin_ajaxload';
                
                    $.ajax({
                        type: "POST",
                        url: $path,
                        data: formdata,
                        beforeSend: function() {
//                            add "Loading..." code
                             $outputEl.empty();
                             $outputEl.append("Loading...");
                        },
                        success: function(data) {
                            
                            $outputEl.empty();
                            
                            //if success
                            if (data.results == "Success") {
                                $outputEl.append('Success! ' + 'your number: ' + data.content );
                            } 
                            else if (data.results == "Error") {
                                $outputEl.append('Error During Processing');
                            }
                            else {
                                $outputEl.append(data.results + ': ' + (data.validation_errors).toString());
                                $loading = false;
                                $finished = true;
                            }
                            
                            
////                            remove our loading message
//                            $outputEl.empty();
//
//                            // Convert data to an object 
//                            $data = $(data);
//
//                            if (data.length > 1) {
//                                $outputEl.append($data);
//
//                            } else {
//                                $outputEl.append('no data');
//                                $loading = false;
//                                $finished = true;
//                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
                        }
                    });
                }

                $('#repair-number-lookup #form-submit').click(function() {
                    $loading = true;
                    ajax_load();
                });
                

        });


        //end $.fn.onePixPlugin = function ( options )
    }

    // call the plugin (must use body since it will only work when an element is called)
    $('body').onePixPlugin();


})(jQuery, window, document);