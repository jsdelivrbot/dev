//input validation
export function validate(input, value) {

    //keep track of errors in object      
    const errors = {};


    if(input === 'website') {
        //validate the website
        if( ! /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/.test(value) ){
          // invalid email
          errors.website = 'Please enter a valid website';
        }
    }

    if(input === 'isEmpty') {
        //make sure they enter a value
        if( ! /\S/.test(value) ){
          // invalid email
          errors.empty = 'Please enter a value';
        }
    }

    if(input === 'name') {
        //validate the phone
        //(123) 456-7890 or 123-456-7890, 1234567890
        if( ! /^[A-Za-z ,.'-]+  *[A-Za-z ,.'-]+$/.test(value) ){
          // invalid email
          errors.name = 'Please enter a first and last name';
        }
    }

    if(input === 'email') {
      //validate the email
      if( ! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ){
        // invalid email
        errors.email = 'Please enter a valid email';
      }

    }

    if(input === 'phone') {
        //validate the phone
        if( ! /^\d{3}-?\d{3}-?\d{4}$/ .test(value) ){

        // invalid email
        errors.phone = 'Please enter a valid phone. Ex: XXX-XXX-XXXX';
      }
    }


    if(input === 'postalCode') {
        //make sure they enter a value
        if( ! /(^\d{5}(-\d{4})?$)|(^[A-Za-z]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$)/.test(value) ){    
          // invalid email
          errors.postalCode = 'Please enter a valid postal code';
        }
    }
  
    return errors;
}

//format to enter dashed automatically:
export function addDashes(f)
    {

        let output = null;

        //check if it has dashes already
        if(f.match(/\-/g)){
          //console.log("has dashes already");
          output = f;
          return output;
        } else {
          //First, clean your input by deleting all chars that are not numbers
          let f_val = f.replace(/\D[^\.]/g, "");
          //put in the dashes
          output = f_val.slice(0,3)+"-"+f_val.slice(3,6)+"-"+f_val.slice(6);
          return output;

         }

    }