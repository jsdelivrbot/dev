//boilerplate exports:

//---------------------------------//
//export one thing
//---------------------------------//

function add (a) {
    return a += 1;
}

export default add;

//---------------------------------//
//export multiple things
//---------------------------------//

export function add (a) {
    return a += 1;
}

export function subtract (a) {
    return a -= 1;
}
//must use destructuring to improt like
//import {add, subtract} from '../math';
//or
//import * as Utils from '../math';

//---------------------------------//
//import
//---------------------------------//

//import from node_modules folder doesn't require file path
import React from 'react';

//up one level then lib/assets
import assets from '../lib/assets';

//use destructuring to get a specific function
import {add, subtract} from 'math';

//or if you want to group your imorted objects into an alias:
import * as Utils from '../math';
//call it like this:
Utils.add(5);