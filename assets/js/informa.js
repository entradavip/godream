const loader = '<div class="loader-sm"> <svg class="circular-loader"viewBox="25 25 50 50" > <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#00C2FF" stroke-width="5" /> </svg> </div>';
const success = '<div class="f-modal-icon f-modal-success animate"> <span class="f-modal-line f-modal-tip animateSuccessTip"></span> <span class="f-modal-line f-modal-long animateSuccessLong"></span> <div class="f-modal-placeholder"></div> <div class="f-modal-fix"></div> </div>';
const warning = '<div class="f-modal-icon f-modal-warning scaleWarning"> <span class="f-modal-body pulseWarningIns"></span> <span class="f-modal-dot pulseWarningIns"></span> </div>';
const error = '<div class="f-modal-icon f-modal-error animate"> <span class="f-modal-x-mark"> <span class="f-modal-line f-modal-left animateXLeft"></span> <span class="f-modal-line f-modal-right animateXRight"></span> </span> <div class="f-modal-placeholder"></div> <div class="f-modal-fix"></div> </div>';


$(document).ready(function(){

	//Edit
	$('.contap .edit').on('click', function()
	{         
        //contap show
		var show = $(this).parent();

		//contap hidden
		var hidden = show.next();
		var input = hidden.find('input');


		show.hide();
		hidden.show();	
		input.val(show.find('label').text());
	});

	//Cancel
	$('.contap .cancel').on('click', function()
	{ 
		//contap hidden
		var hidden = $(this).parent().parent().parent();

        //contap show
		var show = hidden.prev();

		hidden.hide();
		hidden.find('input').val('');
		show.show();
	});

	//Save
	$('.contap .save').on('click', function()
	{ 

		//contap hidden
		var hidden = $(this).parent().parent().parent();

        //contap
		var show = hidden.prev();

		var input = hidden.find('input');

		var dataobj = {};
		dataobj.id = input.attr('data-id');
		dataobj.value = input.val();

		var buttons = hidden.find('.buttons');
		buttons.find(".action-buttons").hide();
		buttons.append($(loader));

		//success
		if(dataobj.id != 'senha') show.find('.name').text(dataobj.value);

		hidden.hide();
		hidden.find('input').val('');
		show.show();

		buttons.find(".action-buttons").show();
		buttons.find('.loader-sm').remove();

		/*
			$.ajax(
				{
					type:"POST",
					dataType:"json",
					url:"pages/demo.php",
					cache: false,
					data: dataobj,
					success:function(response)
					{	
						if(dataobj.id != 'senha') show.find('.name').text(dataobj.value);

						hidden.hide();
						hidden.find('input').val('');
						show.show();

						buttons.find(".action-buttons").show();
						buttons.find('.loader-sm').remove();											
					}
			}); 
		*/
	});

	$("#loadCard").on('click', function(){

		//contap
		var c = $(this).parent();
		c.hide();

		var card = new Card({
		    // a selector or DOM element for the form where users will
		    // be entering their information
		    form: 'form#card-form', // *required*
		    // a selector or DOM element for the container
		    // where you want the card to appear
		    container: '.card-wrapper', // *required*

		    formSelectors: {
		        numberInput: 'input#number', // optional — default input[name="number"]
		        expiryInput: 'input#expiry', // optional — default input[name="expiry"]
		        cvcInput: 'input#cvc', // optional — default input[name="cvc"]
		        nameInput: 'input#name' // optional - defaults input[name="name"]
		    },
		    // Strings for translation - optional
		    messages: {
		        validDate: 'validar\ndata', // optional - default 'valid\nthru'
		        monthYear: 'mm/yyyy', // optional - default 'month/year'
		    },

		    // Default placeholders for rendered fields - optional
		    placeholders: {
		        name: 'Nome completo',
		        expiry: '••/••',
		        cvc: '•••'
		    }
		});

		$(".card").show();
	});

	$("form#card-form .cancel").on('click', function(){
		$(".card").hide();
		$(".card").next().show();
		$("form#card-form").trigger("reset");
	});

	$('#submitCancel').on('click', function(e){
		e.preventDefault();
		$(this).attr("disabled", true);

		var modal = $('#modal');
		var cancelBtn = $(modal).find('.modal-footer button.close-modal');
		$(this).remove();

		cancelBtn.text("Cancelando...");

		/*
			$.ajax(
				{
					type:"POST",
					url:"pages/demo.php",
					cache: false,
					success:function(response)
					{											
					}
			}); 
		*/
		$(modal).find('.modal-body h4').text("Assinatura cancelada com sucesso.");
		$(modal).find('.f-modal-alert').append(success).show();


		cancelBtn.text("OK");

		$('#modal').on('hidden.bs.modal', function (e) {
			//this is just for tests, if you want to, redirect to another page
		  	location.reload();
		})

		//just for tests
		return false;
	});
});