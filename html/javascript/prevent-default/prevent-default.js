//simple in anchor
<a href="javascript:void(0)"> some link </a>

//or
<a href='#link' onClick='return false;' > Prevent Link </a>;

 //with callback function
 a = document.getElementById("new_link");
a.addEventListener("click",function(e){
     alert("preform action");
     e.preventDefault();
},false);