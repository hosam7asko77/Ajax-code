	$(document).ready(function() {
		$("#dob").datepicker({
			changeMonth : true,
			changeYear : true,
			yearRange : "1987:2003"
		});
    
		$(function() {
			$('form[id="ownerDtls"]').validate({
					rules :{
						fname: 'required',
						lname: 'required',
						dob :{
							date: true
							
							},
						email :{
							required :true,
							email:true
								},
							phno : {
									required : true,
									number : true,
									minlength : 10,
									maxlength : 10
								},			
								zzn :{
									required : true,
									maxlength: 11,
									minlength: 11
									}	
						},
						messages : {
							fname : 'Please Enter First Name',
							lname : 'Please Enter Last Name',
							dob : {
								date : 'Please Enter Date',
								
							},
							email : {
								required: 'Please Enter email',
								email :'Enter valid Format'
							},
							phno : {
								required : 'Please Enter phone Number',
								number :'Enter Only Numbers',
								minlength: 'Phone no. must be 10 digit',
								maxlength:'Phone No. Must be 10 digit'
							},
							zzn :{	
							required: 'Please Enter SSN Number',
							maxlength: 'Only 9 number are Entered',
							minlength: 'only 9 digit are Entered'
								}
						},
						submitHandler : function(form) {
							form.submit();
						}
					});	
				});
	

	$('#zzn').keypress(function(e){
		console.log(e);
		console.log(typeof(e.which));
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		 }	
		else  if (e.which != 8 && e.which != 0 && (e.which <= 57 &&  e.which >= 48)) {
		var zzn1=$('#zzn').val();
				console.log(e);
			if(event.keyCode!='8'){
				console.log("jtkakasm");
				if(zzn1.length==6){
					$('#zzn').val(zzn1+'-');
					}
				else if(zzn1.length==3){
					$('#zzn').val(zzn1+'-');
				}
			}
		}
	});

});

	function clearConf(){

	return confirm("Are you want to reset Your Form....!!");
}
	
