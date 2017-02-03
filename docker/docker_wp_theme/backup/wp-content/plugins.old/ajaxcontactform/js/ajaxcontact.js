jQuery(document).ready(function() {
    jQuery('#ajaxcontactform #form-submit').click(function(){
        ajaxformsendmail('#ajaxcontactform');
    });
});


//for converting form field data into an object
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


function ajaxformsendmail(formname)
{
    var formdata = {};

    formdata = jQuery(formname).serializeObject();
    
    //add this 
    formdata.action = 'ajaxcontact_send_mail';
    
    //for print testing objects
//    alert(JSON.stringify(formdata, null, 4));
    
    jQuery.ajax({

        type: 'POST',
        url: ajaxcontactajax.ajaxurl,
        data: formdata,
        success: function(data, textStatus, XMLHttpRequest){
            
//            alert(JSON.stringify(data, null, 4));
            //remove error class incase had it.
            jQuery('.price-calc input').removeClass('error-class');
            
            var id = '#ajaxcontact-response';
            jQuery(id).html('');
            //if success
            if (data.results == "Success") {
                jQuery(id).fadeIn();
                //if no error, print success message
                jQuery(id).html("Thank your for you mail! We'll get back to you shortly.");
                //if wp faild to send the mail
            } else if (data.results == "Error") {
                jQuery(id).fadeIn();
                //if no error date, print success message
                jQuery(id).html("Sorry, there was an error sending the message. Please contact us.");
                //otherwise the object will contain the error fields
            } else if(data !== null){
                jQuery(id).fadeIn();
                //look through the object and set error class to the fields with matching name
                jQuery.each( data, function( key, value ) {
                      jQuery('.price-calc input[name="' + value + '"]').addClass('error-class');
                });

                //print it out at the bottom
                jQuery(id).append('Sorry, the following are invalid: ', data.toString());
            }
        },

        error: function(MLHttpRequest, textStatus, errorThrown){
            alert(errorThrown);
        }


    });
}