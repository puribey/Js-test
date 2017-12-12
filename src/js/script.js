

$(document).ready(function(){

// Sorts list elements 

	$('.content').sortable({
	    placeholder: 'block-placeholder',
	    update: function (event, ui) {
	        // turn the dragged item into a "block"
	        ui.item.addClass('block');
	    }
	});


// Changes images 

	$(".profileImage").click(function(e) {
    	$(this).closest(".block").find(".imageUpload").click();
	});

	$(".imageUpload").change(function(){
    	fasterPreview( this );
	});


// Delete elements 
	
	$('.btn-delete').on('click',function(){
		var dataDelete =  $(this).data("delete");
		$(dataDelete).fadeOut();
	});

// Edit elements

	$('.btn-edit').on('click',function(e){
		var btnEdit =  $(this).data("edit");

		$('textarea').prop("disabled",true);
		$('input').prop("disabled",true)
		$(btnEdit).prop("disabled",false);
	});

// Pop up

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});


});// ends document.ready 


function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
    	$(uploader).closest(".block").find('img').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}




/* $.ajax({
	url:"./listado.php", //http://mariabelenalegre.com/adApi/ballet/addTurno.php //Conjunto de urls //Postman 
	type: "post",
	data: search,
	success: function (response){
		if(response!=false){
			console.log(response);
		}
	}
	var search=['search':$('#search').val(),'page':o];
});
*/