function fun()
{
var n=document.registration.name.value;
var nexp=/^[A-Za-z]{1}[A-Za-z\.\s]+$/;
if (n=="")
{alert ("name is empty!");
 document.registration.name.focus();
 return false ;
}
else if(!n.match(nexp))
{ 
alert("name is invalid!");
document.registration.name.focus();
return false;
}
var a=document.registration.email.value;
var aexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (a=="")
{
	alert("email field is empty!");
	document.registration.email.focus();
	return false;
}
else if (!a.match(aexp))
{
	alert("email is invalid!");
	document.registration.email.focus();
	return false;
}
else
	var c=document.registration.pass.value;
	var passw = /^[A-Za-z]\w{7,14}$/;
{if (c=="")
	{ 
alert("Password field cant be empty");
document.registration.pass.focus();
return false;
	}
else if (!a.match(passw))
	{
		alert("Incorrect Password !");
		document.registration.pass.focus();
		return false;
	}
}
if (!document.registration.edu[0].checked&&!document.registration.edu[1].checked&&!document.registration.edu[2].checked&&!document.registration.edu[3].checked)
{
	alert("check any qualification!");
	return false;
}
if (!document.registration.gender[0].checked&&!document.registration.gender[1])
{
	alert("check any gender!");
	return false;
}
var day=document.registration.day.value;
if (day=="")
{
	alert("day is empty!");
	document.registration.day.focus();
	return false;
}
return false;
}