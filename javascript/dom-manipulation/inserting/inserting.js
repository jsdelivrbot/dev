
//insert before
function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
//insert after 
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


//insert before
element.parentNode.insertBefore(newElement, element);

//insert after 
element.parentNode.insertBefore(newElement, element.nextSibling);