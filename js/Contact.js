// JavaScript Document
function formValidation()
{
	var fname=document.registration.fullname;
	var em=document.registration.email;
	var mob=document.registration.mobileno;
	var cntry=document.registration.country;
	
	if(allLetter(fname))
	{
		if(ValidateEmail(em))
		{
			if(allnumeric(mob))
			{
				if(countryselect(cntry))
				{
				}
			}
		}
	}
	return false;
}
function allLetter(fname)
{
	var x=document.forms["registration"]["fullname"].value;
	
	if(x == "")
	{
		alert("Name must be fill out");
		return false;
	}
	
	var letters=/^[A-Za-z\s]+$/;
	
	if(fname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert("Username must have alphabet characters only");
		fname.focus();
		return false;
	}
}
function ValidateEmail(em)
{
	var y=document.forms["registration"]["email"].value;
	
	if(y == "")
	{
		alert("Email must be fill out");
		return false;
	}
	
	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
	if(em.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		em.focus();
		return false;
	}
}
function allnumeric(mob)
{
	var z=document.forms["registration"]["mobileno"].value;
	
	if(z == "")
	{
		alert("Mobile number must be fill out");
		return false;
	}
	
	var numbers= /^[0-9]+$/; 
		
	if(mob.value.match(numbers))
	{
		return true;
	}
	else
	{
		alert("Mobile must have numeric characters only");
		mob.focus();
		return false;
	}
}
function countryselect(cntry)
{
	if(cntry.value=="default")
	{
		alert('Select your country from the list');
		cntry.focus();
		return false;
	}
	else
	{
		return true;
	}
}