$(document).ready(function(){
	$.ajax({
		url : 'getCountry',
		cache : false,
		dataType : 'json',
		success : function(result){
			$.each(result,function(key,value){
				$('<option>').val(key).text(value).appendTo('#country');
			});
		}
	});
});
$(document).on("change","#country",function(){
	$("#state").find('option').remove();
	$('<option>').val("").text("Select State").appendTo("#state");
	$("#city").find('option').remove();
	$('<option>').val("").text("Select City").appendTo("#city");
	var selectCountryId=$("#country").val();
	$.ajax({
		url : "getState",
		data : {
			countryId : selectCountryId
		},
		dataType : 'json',
		success : function(result){
			$.each(result,function(key,value){
				$('<option>').val(key).text(value).appendTo('#state');
			});
		}	
	});
});
$(document).on("change","#state",function(){
	$("#city").find('option').remove();
	$('<option>').val("").text("Select City").appendTo("#city");
	var selectStateId=$("#state").val();
	$.ajax({
		url : "getCitiy",
		data : {
			stateId : selectStateId
		},
		dataType : 'json',
		success : function(result){
			$.each(result,function(key,value){
				$('<option>').val(key).text(value).appendTo('#city');
			});
		}	
	});
});
//email validation
$(document).ready(function(){
	$("#email").blur(function(){
		var enteredEmail=$("#email").val();
		$.ajax({
		    type : "GET",
		    url : "/emailValidation",
		    data : "email="+enteredEmail,
		    success: function(result){
		    	if(result == "DUPLICATE"){
					$("#emailMsg").text("email alrady exist");
					$("#email").focus();
			    }else{
			    	$("#emailMsg").text("");
				}
		    }
		});
		
		})
});
//get email id for password update
$(document).ready(function(){
	var urlParams=new URLSearchParams(location.search);
	if (urlParams.has('email')) {
		verifyEmail=urlParams.get('email');
		var element = document.getElementById("text");
		$("#email").val(verifyEmail);
		element.innerHTML = verifyEmail;
		
		
	}
});
//validation temp password
$(document).ready(function(){
	$("#temp").blur(function(){
		var enteredTemp=$("#temp").val();
		$.ajax({
		    type : "GET",
		    url : "/tempValidation",
		    data : "temp="+enteredTemp,
		    success: function(result){
		    	if(result == "NOT_EXIST"){
					$("#tempMsg").text("Wrong Temp Password entred");
					$("#temp").focus();
			    }else{
			    	$("#tempMsg").text("");
				}
		    }
		});
		
		})
});
//validation password and conform password
$(document).ready(function(){
	$("#add").show();
	$("#config").blur(function(){
		var enteredPassword=$("#passowrd").val();
		var entredConfig=$('#config').val();
			if (enteredPassword!=entredConfig) {
				$("#configMsg").text("Wrong Temp Password entred");
				$("#add").hide();
			}
			$("#configMsg").text("");
			$("#add").show();
			
		
		})
});
