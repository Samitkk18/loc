sign_in=document.getElementsByClassName("sign_in");
confirm_sign_up=document.getElementsByClassName("confirm_sign_up");
var count=0;

var user_info=[
	{username: "VanshayGupta", password: "12345678"}
	{username: "SamitKapadia", password:"12345678"}
];

confirm_sign_up.addEventListener("click",function(){

	user_info.append({username:document.getElementById("sign_up_username").value, password: document.getElementById("sign_up_password").value )
});


function testNumberValid(event){
	var charCode=(event.which)?event.which:event.keyCode;
	if(charCode>=48&&charCode<=57)
	{
		if(count<10)
		{
			count++;
			return true;
	    }
	    else
	    {
	    	return false;
	    }
	}
	else if(charCode==8)
	{
		if(count>0)
		{
			count--;
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}