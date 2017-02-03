jQuery(function ($) {
/* You can safely use $ in this code block to reference jQuery */


$(document).ready(function() {
    
    //ensure if the panel is already down upon page refresh so it doesn't animate down
    already_foldown('#domain-options', $('.price-calc input[name="domain"]'));
    already_foldown('#inquiry-fields', $('.price-calc input[name="inquire"]'));
    
    //set the width of the foldown elements to prevent the 'jerk' at bottom of slidedown.
//    $('.price-calc .foldown').width($('.price-calc .foldown').parent().width());
    
    //fires just before page is refreshed
    calc();
    
    //fires when an input is entered or changed
    $('.price-calc form input').change(function(){
        
        //animate foldown panels if checked
        option_foldown('#inquiry-fields', $('.price-calc input[name="inquire"]'));
        
        calc();
    });
    
    //fires when a radio button is changed
    $('.price-calc form input[type="radio"]').change(function(){
        
        calc();
        
    });
    
    //fires when a select box is changed
    $('.price-calc form select').change(function(){
        
        calc();
        
    });

});


//only use 100% width when window resizes (otherzise width is calculated upon animation)
//$( window ).resize(function() {
//    $('.price-calc .foldown').width('100%');
//});

//calculate cost from fields
function calc() {

    total = 0;

// set up our variables
    var price;
    var appraisal;
    var warranty;
    var trade_in;
    var interest_rate;
    var loan_term;
    var principle;
    var payment;

    

    //inital price
    price = force_number($('#car-initial-price').html());

    //appraisal
    appraisal = process_input('radio', $('input:radio[name="appraisal"][value="yes"]'), 125);

    //warranies
    warranty = process_input('select', $('select[name="warranties"]'), 0);
    
    //tradin amount
    //must set this to avoid NaN
    trade_in = 0;
    var tn = parseInt($('input[name="trade-in"]').val());
    if(isNaN(tn) == false) {
        trade_in = tn;
    }
    
    principal = (price + appraisal + warranty) - trade_in; 
    
    //applied hst
    principal += principal * 13/100;
    
    //add sticker cost
    principal += 95;

    
    principal_w_comma = commaSeparateNumber(principal);
    
    
    //apply estimated cost
    $('input:text[name="total-cost-estimate"]').val(principal_w_comma);
    
    
    interest_rate = process_input('select', $('select[name="interest-rate"]'), 0);
    
    loan_term = process_input('select', $('select[name="loan-term"]'), 0);
    
    Payment = principal * (interest_rate / 12) / (1-1/  Math.pow(1+(interest_rate/12),loan_term) );
 
    
//    P*(I/12)/(  (1-1/((1+(I/12))  )^N)
//    
//    15705.87*(0.1195/12)  / (1-1/  ( (1+(0.1195/12)) )^36)
    
    Payment = commaSeparateNumber(Payment);
//    
//    alert(interest_rate);
    
    //apply monthly payments
    $('input:text[name="monthly-payments"]').val(Payment);
    
        
}

function force_number(value){
    strnum = value.replace(/\,/g, '');
    var num = parseInt(strnum.replace(/\,/g, ''), 10);
    return num;
}

//add commas to total
function commaSeparateNumber(val){
    
    //round to 2 decimal places...
    val = (val).toFixed(2);
    
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}


//animate sliding panels
function option_foldown(element, controller){
        if(controller.is(':checked')) {
            if($(element).css('display') == 'none') {
                $(element).slideDown();
            }
        }
        if(!controller.is(':checked')) {
            $(element).slideUp();
        }
}

//prevent animation on panels on window refresh
function already_foldown(element, controller){
        if(controller.is(':checked')) {
            if($(element).css('display') == 'none') {
                $(element).show();
            }
        }
        if(!controller.is(':checked')) {
            $(element).hide();
        }
}

//make sure no letters are entered for number fields
function process_input(type, value, price){
    var subtotal = 0;
    if(type === 'text') {
        if(value.val()) {
            if($.isNumeric(value.val())) {
                value.removeClass('error-class');
                subtotal = (parseFloat(value.val()) * price);
            } else {
                value.addClass('error-class');
//                alert('You must enter a number')
            }
        }
    } else if(type === 'checkbox') {
        if(value.is(':checked')) {
            subtotal += price;
        }
    } else if(type === 'radio') {
        if(value.is(':checked')) {
            subtotal += price;
        }
    } else if(type === 'select') {
            subtotal += parseFloat(value.val());
    }

    return subtotal;
}

});