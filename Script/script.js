$(document).ready(function(){


		$('#form_comment').validate({
	    rules: {
	        txtfulname: {
	            required: true,
	            fullname: true
	      },

	        txtemail: {
	        required: true,
	        email: true
	        },

	        txtphone: {
	            required: true,
	            //digits: true
                phone: true
	        },
		  
	     
		   txtcomment: {
	      	minlength: 10,
	        required: true
	      },
		  
		   
	    },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready

