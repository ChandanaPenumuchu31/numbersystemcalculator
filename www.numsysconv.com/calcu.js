function dectobin(){
var x=parseInt(document.getElementById("tex1").value);

document.getElementById("tex2").value=x.toString(2);
}
function dectooct(){
var x=parseInt(document.getElementById("tex1").value);

document.getElementById("tex2").value=x.toString(8);
}
function dectohex(){
var x=parseInt(document.getElementById("tex1").value);

document.getElementById("tex2").value=x.toString(16);
}
function bintodec(){
var x=parseInt(document.getElementById("tex1").value);

document.getElementById("tex2").value=parseInt(x,2).toString(10);
}
function bintooct(){
var x=parseInt(document.getElementById("tex1").value);

var y=parseInt(x,2).toString(10);
var z=parseInt(y);
document.getElementById("tex2").value=z.toString(8);

}
function bintohex(){
var x=parseInt(document.getElementById("tex1").value);

var y=parseInt(x,2).toString(10);
var z=parseInt(y);
document.getElementById("tex2").value=z.toString(16);


}
function octtodec(){
var x=parseInt(document.getElementById("tex1").value);

document.getElementById("tex2").value=parseInt(x,8);
}
function octtobin(){
var x=parseInt(document.getElementById("tex1").value);

 var y=parseInt(x,8);
 var z=parseInt(y);
 document.getElementById("tex2").value=z.toString(2);
 
}
function octtohex(){
var x=parseInt(document.getElementById("tex1").value);

 var y=parseInt(x,8);
 var z=parseInt(y);
document.getElementById("tex2").value=z.toString(16);
 
}
function hextodec(){
var x=document.getElementById("tex1").value;
x=x.toLowerCase();
var dec=0,v;
for(var i=0;i<x.length;i++)
{
	v='0123456789abcdef'.indexOf(x[i]);
	dec=dec*16+v;
}
document.getElementById("tex2").value=dec;
}
function hextobin(){
var x=document.getElementById("tex1").value;
x=x.toLowerCase();
var dec=0,v;
for(var i=0;i<x.length;i++)
{
	v='0123456789abcdef'.indexOf(x[i]);
	dec=dec*16+v;
}
var y=dec;
var z=parseInt(y);
document.getElementById("tex2").value=z.toString(2);
}
function hextooct(){
var x=document.getElementById("tex1").value;
x=x.toLowerCase();
var dec=0,v;
for(var i=0;i<x.length;i++)
{
	v='0123456789abcdef'.indexOf(x[i]);
	dec=dec*16+v;
}
var y=dec;
var z=parseInt(y);
document.getElementById("tex2").value=z.toString(8);
}








