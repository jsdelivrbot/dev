jQuery(document).ready( function($) {

        check_empty()

        $( "#contrib-sort-order, #contrib-users" ).sortable({
            
//            containment : '#contrib-sort-order',
            cursor: 'pointer',
            connectWith: ".connectedSortable",
            update: function(event, ui) { 
            
            check_empty()

            //clear the value first
            $('input#contrib_order').attr('value', '')


            var length = $( "#contrib-sort-order" ).children('div:not(.default-message)').length;
            var i = 0;
            var conrib_ids = $( "#contrib-sort-order" ).children('div:not(.default-message)').each(function( index, element ) {
//            alert( index + ": " + $(this).data('id') );    
        
            var comma = ',';
            if(++i == length) {
                comma = '';
            }
            var prev= $('input#contrib_order').attr('value');
            $('input#contrib_order').attr('value' , prev +  $(this).data('id') + comma);

            })
            
        }
    });
    
    
    function check_empty() {
        
        if ($('#contrib-users').children('div').length == 0) {
            $( "#contrib-users span.empty-message" ).show();
        } else{
            $( "#contrib-users span.empty-message" ).hide();
        }
        
        if ($('#contrib-sort-order').children('div').length == 0) {
            $( "#contrib-sort-order span.empty-message" ).show();
        } else{
            $( "#contrib-sort-order span.empty-message" ).hide();
        }
        
    }
    
      $('#contrib-sort-order .delete').live('click' , function (e){


      //remove the id from the input
        var delete_id = $(e.target).parent().data('id');

        var ids= $('input#contrib_order').attr('value');
        var ids_array = ids.split(',');
        
        ids_array.splice( ids_array.indexOf(delete_id.toString()), 1 );
        
        var new_value = ids_array.toString();

        $('input#contrib_order').attr('value' , new_value);



        //detatch and re-attach the element to the authors column
        element = $(e.target).parent().detach();
        element.appendTo( "#contrib-users" );


        
        
        check_empty();

    })
    

    

});




